import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from '../overlays/confirm-modal/confirm-modal.component';
import { HashMap, Point } from './types';

/** Available console output streams. */
export type ConsoleStream = 'debug' | 'warn' | 'log' | 'error';

/**
 * Log data to the browser console
 * @param type Type of message
 * @param msg Message body
 * @param args array of argments to log to the console
 * @param stream Stream to emit the console on. 'debug', 'log', 'warn' or 'error'
 * @param force Whether to force message to be emitted when debug is disabled
 */
export function log(
    type: string,
    msg: string,
    args?: any,
    stream: ConsoleStream = 'debug',
    force: boolean = false,
    app_name: string = 'BACKOFFICE'
) {
    if (window.debug || force) {
        const colors: string[] = ['color: #E91E63', 'color: #ffb300', 'color: default'];
        if (args) {
            console[stream](`%c[${app_name}]%c[${type}] %c${msg}`, ...colors, args);
        } else {
            console[stream](`%c[${app_name}]%c[${type}] %c${msg}`, ...colors);
        }
    }
}

export async function openConfirmModal(data: ConfirmModalData, dialog: MatDialog) {
    const ref = dialog.open<ConfirmModalComponent, ConfirmModalData>(ConfirmModalComponent, {
        ...CONFIRM_METADATA,
        data,
    });
    return {
        ...(await Promise.race([
            ref.componentInstance.event.pipe(first((_) => _.reason === 'done')).toPromise(),
            ref.afterClosed().toPromise(),
        ])),
        loading: (s) => (ref.componentInstance.loading = s),
        close: () => ref.close(),
    };
}

/* istanbul ignore next */
/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
export function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

/**
 * Get item from the nested object
 * @param keys List of sub-keys to search for
 * @param map Object to search
 */
export function getItemWithKeys(keys: string[], map: HashMap) {
    const key = keys.shift();
    if (map[key]) {
        return keys.length > 0 ? getItemWithKeys(keys, map[key]) : map[key];
    }
    return null;
}

/**
 * Remove duplicates from the given array
 * @param array List of items to remove duplicates from
 * @param key Key on array objects to compare for uniqueness
 */
export function unique(array: any[], key: string = '') {
    return array.filter(
        (el, pos, arr) =>
            arr.indexOf(key ? arr.find((i) => i[key] === el[key]) : arr.find((i) => i === el)) ===
            pos
    );
}

/**
 * Generate a random number
 * @param ceil Biggest value to generate not inclusive
 * @param floor Smallest value to generate. Defaults to 0
 */
export function randomInt(ceil: number, floor: number = 0) {
    return Math.floor(Math.random() * (ceil - floor)) + floor;
}

/**
 * Copy the given value to the OS Clipboard
 * @param value String to copy to the clipboard
 */
export function copyToClipboard(value: string) {
    const el = document.createElement('textarea'); // Create a <textarea> element
    el.value = value; // Set its value to the string that you want copied
    el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px'; // Move outside the screen to make it invisible
    document.body.appendChild(el); // Append the <textarea> element to the HTML document
    // Check if there is any content selected previously
    const selected =
        document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0) // Store selection if found
            : false; // Mark as false to know no selection existed before
    // Select the <textarea> content
    el.select();
    // Copy - only works as a result of a user action (e.g. click events)
    document.execCommand('copy');
    document.body.removeChild(el); // Remove the <textarea> element
    if (selected) {
        // If a selection existed before copying
        // Unselect everything on the HTML document
        document.getSelection().removeAllRanges();
        // Restore the original selection
        document.getSelection().addRange(selected);
    }
}

/**
 * Calculate the position counter for the given number e.g `1st`, `2nd`, `3rd`, `4th`...
 * @param num Number to caculate position for
 */
export function numberToPosition(num: number): string {
    const mod_ten = num % 10;
    if (num > 10 && num < 20) {
        return `${num}th`;
    } else if (mod_ten === 1) {
        return `${num}st`;
    } else if (mod_ten === 2) {
        return `${num}nd`;
    } else if (mod_ten === 3) {
        return `${num}rd`;
    }
    return `${num}th`;
}

/**
 * Parse raw CSV data into a JSON object
 * @param csv CSV data to parse
 */
export function csvToJson(csv: string, seperator: string = ',') {
    const lines = csv.replace(/\r|\\r/g, '').split('\n');
    let fields = lines.splice(0, 1)[0].split(seperator);
    const list: any[] = [];
    for (const line of lines) {
        let parts = line.split(seperator);
        /* istanbul ignore else */
        if (parts.length >= fields.length) {
            const item: any = {};
            for (let i = 0; i <= parts.length; i++) {
                let part = null;
                part = parts[i];
                /* istanbul ignore else */
                if (part !== undefined) {
                    let value = '';
                    try {
                        value = JSON.parse(part);
                    } catch (e) {
                        value = part;
                    }
                    item[(fields[i] || '').split(' ').join('_').toLowerCase()] = value;
                }
            }
            list.push(item);
        }
    }

    return list;
}

/**
 * Convert javascript array to CSV string
 * @param json Javascript array to convert
 * @param use_keys Fields in the objects to use in the CSV output
 * @param seperator Seperator between field values in the CSV data
 */
export function jsonToCsv(json: HashMap[], use_keys?: string[], seperator = ',') {
    /* istanbul ignore else */
    if (json instanceof Array && json.length > 0) {
        const keys = Object.keys(json[0]);
        const valid_keys = keys.filter(
            (key) => (!use_keys || use_keys.includes(key)) && json[0].hasOwnProperty(key)
        );
        return `\uFEFF${valid_keys.join(seperator)}\n${json
            .map((item) =>
                valid_keys
                    .map((key) =>
                        item[key] instanceof Object ? JSON.stringify(item[key]) : item[key]
                    )
                    .join(seperator)
            )
            .join('\n')}`;
    }
    return '';
}

/**
 * Grab point details from mouse or touch event
 * @param event Event to grab details from
 */
export function eventToPoint(event: MouseEvent | TouchEvent): Point {
    if (!event) {
        return { x: -1, y: -1 };
    }
    if (event instanceof MouseEvent) {
        return { x: event.clientX, y: event.clientY };
    } else {
        return event.touches && event.touches.length > 0
            ? { x: event.touches[0].clientX, y: event.touches[0].clientY }
            : { x: -1, y: -1 };
    }
}

/**
 * Downloads a file to the users computer with the given filename and contents
 * @param filename Name of the file to download
 * @param contents Contents of the file to download
 */
export function downloadFile(filename: string, contents: string) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contents));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

export function parseJWT(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
    );
    return JSON.parse(jsonPayload);
}

/* istanbul ignore next */
/**
 * Flatten nested array
 * @param an_array Array to flatten
 */
export function flatten<T = any>(an_array: T[]) {
    const stack = [...an_array];
    const res = [];
    while (stack.length) {
        // pop value from stack
        const next = stack.pop();
        if (Array.isArray(next)) {
            // push back array items, won't modify the original input
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    // reverse to restore input order
    return res.reverse();
}

const seed = xmur3('PlaceOS');
const rand = sfc32(0x9e3779b9, 0x243f6a88, 0xb7e15162, seed());

export function predictableRandomInt(ceil: number = 100, floor: number = 0) {
    return Math.floor(rand() * (ceil - floor)) + floor;
}

// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
function xmur3(str) {
    for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
        (h = Math.imul(h ^ str.charCodeAt(i), 3432918353)), (h = (h << 13) | (h >>> 19));
    return function () {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
    };
}

function sfc32(a, b, c, d) {
    return function () {
        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        d >>>= 0;
        var t = (a + b) | 0;
        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        d = (d + 1) | 0;
        t = (t + d) | 0;
        c = (c + t) | 0;
        return (t >>> 0) / 4294967296;
    };
}

export const issueDescription = (hash, date) => `
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Smartphone (please complete the following information):**
 - Device: [e.g. iPhone6]
 - OS: [e.g. iOS8.1]
 - Browser [e.g. stock browser, safari]
 - Version [e.g. 22]

**Additional context**

**Hash:** ${hash}
**Built:** ${date}
`;
