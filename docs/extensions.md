# Backoffice extensions

An extension adds a tab to a Backoffice section. The tab shows an external web
page in an iframe. The page can read and change data for the selected item
through `postMessage`.

## Configuration

Backoffice keeps extensions in the domain config at `config.backoffice.extend`.
The first key is the section. The second key is the extension name. The name is
also the tab label.

```json
{
    "backoffice": {
        "extend": {
            "systems": {
                "Room Booking": {
                    "url": "https://example.com/booking?system={{id}}",
                    "conditions": [["bookable", "truthy", ""]],
                    "icon": { "content": "event" }
                }
            }
        }
    }
}
```

| Field        | Type                          | Use                                            |
| ------------ | ----------------------------- | ---------------------------------------------- |
| `url`        | `string`                      | Page that the iframe loads                     |
| `conditions` | `[field, operation, value][]` | Rules that decide if the tab shows for an item |
| `icon`       | `ApplicationIcon`             | Tab icon. `content` is a Material Symbols name |

`conditions` and `icon` are optional. The default icon is `extension`.
Backoffice ignores an extension that has no `url`.

The valid sections are `admin`, `systems`, `modules`, `zones`, `drivers`,
`repositories`, `triggers`, `users` and `domains`. The section and the name
together identify an extension, so two sections can use the same name.

Backoffice reads extensions from the domain that serves the current host. It
reads them when the page loads. Refresh the page after each change.

### Edit extensions

1. Open Admin, then Extensions.
2. Select a domain.
3. Add, edit or remove an extension.

The form sets the section, name, URL and conditions. It does not set the icon.
To set an icon, edit the domain config. The form keeps an icon that is already
in the config.

The domain selector lists all domains. You only see the extensions of the
domain that serves your host.

## Conditions

A condition is `[field, operation, value]`. Backoffice shows the tab when all
conditions pass. An extension with no conditions shows for all items.

`field` is a top-level property of the selected item. Nested paths do not work.

| Operation        | Passes when                                            |
| ---------------- | ------------------------------------------------------ |
| `includes`       | The field is a string or array that contains `value`   |
| `equals`         | The field has a value and its text is equal to `value` |
| `truthy`, `true` | The field is truthy                                    |
| `falsy`, `false` | The field is falsy                                     |
| Other values     | Always                                                 |

`equals` compares the field and `value` as text. Thus the value `"12"` matches
the number `12`, and `"true"` matches the boolean `true`. This is necessary
because the form saves each `value` as a string.

`includes` fails for fields that are not a string or an array.

The form offers `includes`, `equals`, `truthy` and `falsy`. The form removes
conditions that have no field or no operation.

## URL placeholders

Backoffice replaces `{{key}}` in the URL with the URL-encoded value of that
property on the selected item. For example, `{{id}}` becomes the item ID.

- The key can contain letters, digits and underscores.
- The property must be a top-level string or number.
- Backoffice does not use strings longer than 128 characters.
- Backoffice replaces all occurrences of each placeholder.
- A placeholder with no usable value stays in the URL.

The URL can be absolute, or relative to the Backoffice origin. It must use
`http` or `https`.

## How a tab loads

1. The section component calls `extensionsForItem(item, type)` and adds the
   results to its tab list.
2. Each tab gets the ID `extend/<name>`, with the name in lower case and spaces
   changed to hyphens. The tab link carries the final URL in the `embed` query
   parameter. Example: `/systems/sys-123/extend/room-booking?embed=https%3A%2F%2Fexample.com%2Fbooking%3Fsystem%3Dsys-123`
3. The `extend/:id` child route of each section loads `ExtensionOutletComponent`.
4. The outlet waits for the API connection and the selected item. It then
   calls `allowedEmbedUrl` to compare `embed` with the extension URLs for that
   item.
5. If `embed` matches one of those URLs exactly, the outlet loads it in the
   iframe.

If the `embed` parameter is missing, the outlet goes back one page. If `embed`
does not match, the outlet stays empty. This check prevents a link that loads
an arbitrary page in the Backoffice iframe.

The iframe has no `sandbox` attribute. The extension server must permit
framing by the Backoffice origin in its `Content-Security-Policy` or
`X-Frame-Options` header.

## Message protocol

Backoffice never sends the first message. The extension gets its context from
the URL placeholders, then sends requests to `window.parent`.

Each message is a JSON string. Backoffice ignores a message when one of these
is true:

- The message does not come from the iframe window.
- The message origin is not the origin of the extension URL.
- The data is not a string of valid JSON.
- `type` is not `backoffice`.

### Request

| Field     | Type           | Use                                          |
| --------- | -------------- | -------------------------------------------- |
| `id`      | `string`       | Request ID. The reply has the same ID        |
| `type`    | `'backoffice'` | Required                                     |
| `action`  | `string`       | `update`, `metadata`, `load` or `resource`   |
| `name`    | `string`       | Metadata name or resource URL                |
| `parent`  | `boolean`      | For `load`. Read from the parent of the item |
| `content` | `object`       | Data for `update` and `metadata`             |

### Actions

| Action     | Needs             | Backoffice does                                       | Reply                             |
| ---------- | ----------------- | ----------------------------------------------------- | --------------------------------- |
| `update`   | `content`         | Merges `content` into the selected item and saves it  | `status` is `success` or `error`  |
| `metadata` | `name`, `content` | Saves `content` as the metadata `name` on the item    | `status` is `success`             |
| `load`     | `name`            | Reads the metadata `name` from the item or its parent | `content` is the metadata details |
| `resource` | `name`            | Makes the URL in `name` safe for the page to display  | `content` is a URL                |

Backoffice replies to each of these actions. It does not reply to other
actions. A `metadata`, `load` or `resource` request with no `name` gets an
`error` reply.

`update`. Backoffice shows a notification for the result. After the save,
Backoffice replaces the selected item with the saved item. The next `update`
merges into the saved item, so send only the fields that change. `content`
must be an object. The Admin section has no item to save, so `update` fails
there.

`metadata`. Backoffice sets the metadata description to `Metadata from <url>`.
`content` can be an object or an array.

`load`. With `parent` set, Backoffice reads from the `parent_id` of the item.
An item with no `parent_id` gets an `error` reply.

`resource`. Use this for upload URLs that need the credentials of the user.
The URL must contain `/api/engine/v2/uploads` and must occur in the data of the
selected item. Backoffice then downloads the file and replies with a data URL.
For all other URLs, the reply contains the same URL. Backoffice caches each
data URL in memory until the page reloads.

### Reply

Backoffice posts each reply to the iframe as a JSON string. The target origin
is the origin of the extension URL.

```json
{
    "id": "1",
    "type": "backoffice",
    "action": "result",
    "status": "success",
    "content": {}
}
```

Match replies on `id`. `status` is `success` or `error`. `content` is only
present when the action returns data. Use a timeout, because Backoffice cannot
reply after the user leaves the tab.

### Example

```ts
const BACKOFFICE_ORIGIN = 'https://backoffice.example.com';
const REPLY_TIMEOUT = 10_000;
let next_id = 0;

interface BackofficeReply<T> {
    id: string;
    status?: 'success' | 'error';
    content?: T;
}

/** Send a request to Backoffice and wait for the reply with the same ID */
function request<T>(action: string, name = '', content: object = {}) {
    const id = `${++next_id}`;
    return new Promise<BackofficeReply<T>>((resolve, reject) => {
        const finish = () => {
            clearTimeout(timer);
            window.removeEventListener('message', onMessage);
        };
        const timer = setTimeout(() => {
            finish();
            reject(new Error(`No reply for ${action}`));
        }, REPLY_TIMEOUT);
        const onMessage = (event: MessageEvent) => {
            if (event.origin !== BACKOFFICE_ORIGIN) return;
            if (typeof event.data !== 'string') return;
            const reply: BackofficeReply<T> = JSON.parse(event.data);
            if (reply.id !== id) return;
            finish();
            if (reply.status === 'error') reject(new Error(`${action} failed`));
            else resolve(reply);
        };
        window.addEventListener('message', onMessage);
        window.parent.postMessage(
            JSON.stringify({ id, type: 'backoffice', action, name, content }),
            BACKOFFICE_ORIGIN,
        );
    });
}

const settings = await request<{ theme: string }>('load', 'booking_settings');
await request('metadata', 'booking_settings', { theme: 'dark' });
await request('update', '', { description: 'Updated by the extension' });
```

## Known limits

- The selected item in the Admin section is only `{ name: 'PlaceOS Admin' }`.
  Conditions and placeholders for `admin` extensions can only use `name`. The
  `update`, `metadata` and `load` actions fail there.
- The Groups section has no extension support.

## Source files

| File                                                         | Contents                                            |
| ------------------------------------------------------------ | --------------------------------------------------- |
| `src/app/common/api.ts`                                      | `extensionsForItem` and `allowedEmbedUrl`           |
| `src/app/common/types.ts`                                    | `AppComponentExtension` and `EXTENSION_SECTIONS`    |
| `src/app/ui/extension-outlet.component.ts`                   | The iframe and the message handlers                 |
| `src/app/ui/item-tablist.component.ts`                       | Tab links with the `embed` query parameter          |
| `src/app/admin/extensions.component.ts`                      | Admin list. Reads and writes the domain config      |
| `src/app/admin/extension-modal/extension-modal.component.ts` | Add and edit form                                   |
| `src/app/admin/admin.component.ts`                           | Admin menu links for `admin` extensions             |
| `src/tests/common/api.spec.ts`                               | Tests for `extensionsForItem` and `allowedEmbedUrl` |
| `src/tests/ui/extension-outlet.component.spec.ts`            | Tests for the message handlers                      |
