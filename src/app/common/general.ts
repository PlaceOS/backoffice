import { HashMap } from './types';

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
    app_name: string = 'PANEL'
) {
    if (window.debug || force) {
        const colors: string[] = ['color: #E91E63', 'color: #3F51B5', 'color: default'];
        if (args) {
            console[stream](`%c[${app_name}]%c[${type}] %c${msg}`, ...colors, args);
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
 * Parse raw CSV data into a JSON object
 * @param csv CSV data to parse
 */
export function csvToJson(csv: string) {
    const lines = csv.split('\n');
    let fields = lines.splice(0, 1)[0].split(',');
    fields = fields.map((v) => v.replace('\r', ''));
    const list: any[] = [];
    for (const line of lines) {
        let parts = line.split(',');
        parts = parts.map((v) => v.replace('\r', ''));
        if (parts.length >= fields.length) {
            const item: any = {};
            for (let i = 0; i <= parts.length; i++) {
                let part = null;
                part = parts[i];
                if (part !== undefined) {
                    item[(fields[i] || '').split(' ').join('_').toLowerCase()] = part;
                }
            }
            list.push(item);
        }
    }

    return list;
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
const rand = sfc32(0x9E3779B9, 0x243F6A88, 0xB7E15162, seed());

export function predictableRandomInt(ceil: number = 100, floor: number = 0) {
    return Math.floor(rand() * (ceil - floor)) + floor;
}

// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
function xmur3(str) {
    for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
        h = h << 13 | h >>> 19;
    return function() {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}

function sfc32(a, b, c, d) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0;
      var t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}
