import { Signal } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Subscribable, waitForEvent, waitForSignalValue } from './signals';
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
    args?: (object | string | number | boolean)[] | string,
    stream: ConsoleStream = 'debug',
    force = false,
    app_name = 'BACKOFFICE',
) {
    if (window.debug || force) {
        const colors: string[] = [
            'color: #E91E63',
            'color: #ffb300',
            'color: default',
        ];
        if (args) {
            console[stream](
                `%c[${app_name}]%c[${type}] %c${msg}`,
                ...colors,
                args,
            );
        } else {
            console[stream](`%c[${app_name}]%c[${type}] %c${msg}`, ...colors);
        }
    }
}

/* istanbul ignore next */
/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
export function detectIE(): number {
    const ua = window.navigator.userAgent;

    const msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    const trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        const rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    const edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return 0;
}

/**
 * Get item from the nested object
 * @param keys List of sub-keys to search for
 * @param map Object to search
 */
export function getItemWithKeys(
    keys: string[],
    map: HashMap<unknown>,
): unknown {
    const key = keys[0];
    if (map && key in map) {
        return keys.length > 1
            ? getItemWithKeys(
                  keys.slice(1),
                  (map[key] || {}) as HashMap<unknown>,
              )
            : map[key];
    }
    return null;
}

/**
 * Remove duplicates from the given array
 * @param array List of items to remove duplicates from
 * @param key Key on array objects to compare for uniqueness
 */
export function unique<T = string>(array: T[], key = '') {
    return array.filter(
        (el, pos, arr) =>
            arr.indexOf(
                key
                    ? arr.find((i) => i[key] === el[key])
                    : arr.find((i) => i === el),
            ) === pos,
    );
}

/**
 * Generate a random number
 * @param ceil Biggest value to generate not inclusive
 * @param floor Smallest value to generate. Defaults to 0
 */
export function randomInt(ceil: number, floor = 0) {
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

export const csvToJson = parseCSV;
/**
 * Parses a CSV string back into an array of JavaScript objects.
 * - It assumes the first line is the header row.
 * - Attempts JSON.parse on each cell. If parsing fails, keeps the raw string.
 * - Handles basic quote escaping ("" -> ").
 *
 * @param csv - The CSV string.
 * @param separator - The delimiter (comma by default).
 * @returns An array of objects.
 */
export function parseCSV(
    csv: string,
    separator = ',',
): Record<string, unknown>[] {
    // Split on newlines, remove any empty lines
    const lines = csv.split('\n').filter((line) => line.trim() !== '');
    if (!lines.length) return [];

    const [headerLine, ...dataLines] = lines;
    const headers = splitCsvLine(headerLine, separator);

    return dataLines.map((line) => {
        const cells = splitCsvLine(line, separator);

        const record: Record<string, unknown> = {};

        headers.forEach((header, idx) => {
            const cell = cells[idx] ?? '';

            try {
                record[header] = cell !== '' ? JSON.parse(cell) : '';
            } catch {
                const lower = `${cell}`.toLowerCase();
                record[header] =
                    lower === 'true' ? true : lower === 'false' ? false : cell;
            }
        });

        return record;
    });
}

/**
 * Splits a CSV line into cells, handling:
 * - quoted strings
 * - escaped quotes
 *
 * This is a simplified parser that expects CSV in the format produced by `jsonToCSV`.
 * For more robust parsing (multiline fields, etc.), consider a specialized library.
 */
function splitCsvLine(line: string, separator: string): string[] {
    const cells: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const nextChar = line[i + 1];

        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                // Escaped quote ("")
                current += '"';
                i++; // Skip the next quote
            } else {
                // Toggle quote mode
                inQuotes = !inQuotes;
            }
        } else if (char === separator && !inQuotes) {
            // End of current cell
            cells.push(current);
            current = '';
        } else {
            current += char;
        }
    }

    // Push the last cell
    cells.push(current);

    return cells;
}

/**
 * Converts an array of JSON objects into a CSV string.
 *
 * @param data - The JSON array to convert.
 * @param separator - The optional field separator (comma by default).
 * @returns A string in CSV format.
 */
export function jsonToCsv<T extends Record<string, unknown>>(
    data: T[],
    use_keys: string[] = [],
    separator = ',',
): string {
    if (!data.length) return '';

    const headers = Object.keys(data[0]).filter(
        (key) => !use_keys.length || use_keys.includes(key),
    );
    const headerRow = headers.join(separator);

    const rows = data.map((item) => {
        return headers
            .map((header) => {
                let cell = item[header];

                // If the cell is an object or array, convert it to a JSON string.
                if (cell && typeof cell === 'object') {
                    cell = JSON.stringify(cell);
                }

                // Convert undefined or null to empty string; otherwise, to string
                const cellStr = cell == null ? '' : String(cell);

                // If the cell contains the separator, quotes, or new lines, wrap it in quotes.
                if (
                    cellStr.includes(separator) ||
                    cellStr.includes('"') ||
                    cellStr.includes('\n')
                ) {
                    // Escape quotes
                    const escaped = cellStr.replace(/"/g, '""');
                    return `"${escaped}"`;
                }

                return cellStr;
            })
            .join(separator);
    });

    return [headerRow, ...rows].join('\n');
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
    element.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(contents),
    );
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
            .join(''),
    );
    return JSON.parse(jsonPayload);
}

/* istanbul ignore next */
/**
 * Flatten nested array
 * @param an_array Array to flatten
 */
export function flatten<T = unknown>(an_array: T[]) {
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

export function predictableRandomInt(ceil = 100, floor = 0) {
    return Math.floor(rand() * (ceil - floor)) + floor;
}

// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
function xmur3(str) {
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
        h = (h << 13) | (h >>> 19);
    }
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
        let t = (a + b) | 0;
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

export function getInvalidFields(form: UntypedFormGroup, prefix = '') {
    let invalid = [];
    for (const key in form.controls) {
        if (form.controls[key] instanceof UntypedFormGroup) {
            invalid = [
                ...invalid,
                ...getInvalidFields(
                    form.controls[key] as UntypedFormGroup,
                    `${key}.`,
                ),
            ];
        } else if (!form.controls[key].valid) {
            invalid.push(`${prefix}${key}`);
        }
    }
    return invalid;
}

/**
 * Create a promise that returns the current value returned by the given signal
 * @param source Signal to use
 */
export function nextValueFrom<T = unknown>(source: Signal<T>): Promise<T> {
    return source ? Promise.resolve(source()) : Promise.resolve(null);
}

/**
 * Create a promise that returns the first truthy value returned by the given signal
 * @param source Signal to use
 */
export function firstTruthyValueFrom<T>(source: Signal<T>): Promise<T> {
    return source
        ? waitForSignalValue(source, (_) => !!_)
        : Promise.resolve(null);
}

export function mapLastValueFrom<T, R>(
    source: Promise<T> | Signal<T>,
    map_fn?: (value: T) => R,
): Promise<T | R> {
    if (!source) return Promise.resolve(null);
    const promise =
        source instanceof Promise ? source : Promise.resolve(source());
    return map_fn ? promise.then(map_fn) : promise;
}

type AwaitableSource<T> = PromiseLike<T> | Subscribable<T> | Signal<T>;

export function lastValueFrom<T = unknown>(
    source: AwaitableSource<T>,
): Promise<T> {
    if (!source) return Promise.resolve(null);
    if (typeof source === 'function') {
        return Promise.resolve((source as Signal<T>)());
    }
    if (typeof (source as PromiseLike<T>).then === 'function') {
        return Promise.resolve(source as PromiseLike<T>);
    }
    return waitForEvent(source as Subscribable<T>);
}

export const firstValueFrom = lastValueFrom;

/**
 * Pad the start of a string or number with given character
 * @param value String or number to pad
 * @param length Length of the final string
 * @param character Character to pad output string with. Defaults to `0`.
 */
export function padLength(
    value: number | string,
    length = 2,
    character = '0',
): string {
    let str = `${value}`;
    while (str.length < length) str = `${character}${str}`;
    return str;
}
