# Support subsystem access

Backoffice accepts users with a non-zero effective membership in a group that
includes `support` in its `subsystems` list. It loads memberships from
`GET /api/engine/v2/groups/current?subsystem=support` before it loads resources.
If that request fails, it does not grant subsystem access. Existing admin and
support JWT access does not depend on this request.

Subsystem users can open systems, modules, zones, and users. System lists and
system selectors send `subsystem=support` and the selected `group_id`. Module
lists load through the selected group's systems because the modules API has no
group filter. Up to eight systems load at once. Zone lists and zone selectors
start at the selected group's anchors. These lists require the Read membership
bit. Use the Children tab to browse below an anchor.
New subsystem modules use logic drivers so they have a control system for zone
permission checks. Device modules must already belong to a system before a
subsystem user can edit them.

Manage alone does not satisfy the API's Read check for group anchor lists.

Use the group button above the user menu to open the searchable group picker.
It shows the active group and each group's parent. Backoffice saves the choice
per user and authority. Subsystem users start in their first available group;
admin and support JWT users can also choose All groups. Admins can select any
support group. A switch clears the active resource and reloads the lists.
Responses from the previous group cannot replace the new list.

The sidebar hides sections the selected membership cannot use. Systems,
modules, and zones need Read for group browsing. Users need Read, Create,
Update, Delete, or Manage. Users remain authority-scoped because the API has no
group filter for that list. External alerts and metrics links require a support
or admin JWT. Group selection filters the workspace; the API still resolves
resource permissions across all memberships.

Create, edit, and delete controls use the selected group's membership bits. Manage
also enables these controls. The API checks the zone grants for each request,
including inheritance, deny rows, source and destination zones, and the
intersection of membership and zone permissions. A visible control does not
guarantee access to every resource. User changes require the applicable grant
on the authority's organisation zone.

System zone details load each zone by ID. System settings use a parent-scoped
settings query. Subsystem users can use plaintext settings; encrypted settings
retain their JWT role restrictions. User forms lock the authority and omit
admin role and legacy group fields from submitted data.

Admin pages, repositories, group administration, settings history, global
triggers, drivers, and zone triggers retain their JWT restrictions. Subsystem
users do not get cascade deletion. This change adds access to existing resource
pages; it does not add pages for API resources such as assets or pending mail.

See the [REST API support subsystem guide](https://github.com/PlaceOS/rest-api/blob/master/subsystems/support.md)
for the server's permission rules.
