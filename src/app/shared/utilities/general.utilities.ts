import { HashMap, Point } from './types.utilities';

import * as dayjs from 'dayjs';
import * as merge from 'deepmerge';
import * as yaml from 'js-yaml';

export function getItemWithKeys(keys: string[], map: HashMap) {
    const key = keys.shift();
    if (map[key]) {
        return keys.length > 0 ? getItemWithKeys(keys, map[key]) : map[key];
    }
    return null;
}

/**
 * Checks whether the platform is a mobile device.
 */
export function isMobileModule(): boolean {
    const r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return !!navigator.userAgent.match(r);
}

/**
 * Checks whether the browser is Mobile Safari.
 */
export function isMobileSafari(): boolean {
    const agent = navigator.userAgent;
    return !!(
        agent.match(/iPhone|iPad|iPod/) &&
        agent.match(/AppleWebKit/) &&
        !agent.match('CriOS')
    );
}

/**
 * Checks whether the browser is Android Chrome.
 */
export function isAndroidChrome(): boolean {
    const agent = navigator.userAgent;
    return !!(agent.match(/Android/) && agent.match(/Chrome/));
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
 * Generate string representation of a number with zeros padding the length
 * @param value Number to pad with zeros
 * @param length Length of the resulting string
 */
export function padZero(value: number, length: number): string {
    let str = value.toString();
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

/**
 * Remove duplicates from the given array
 * @param array List of items to remove duplicates from
 * @param key Key on array objects to compare for uniqueness
 */
export function unique(array: any[], key: string = '') {
    return array.filter(
        (element, index) =>
            (key
                ? array.findIndex((i) => i[key] === element[key])
                : array.findIndex((item) => item === element)) === index
    );
}

/**
 * Convert duration to human readable string
 * @param duration Duration in minutes
 * @param short Whether to use short form of duration words e.g. hours as h
 */
export function humaniseDuration(duration: number, short: boolean = false) {
    if (!duration || duration < 0) {
        return '';
    }
    const h = Math.floor(duration / 60);
    let d = `${h >= 1 ? h + (short ? 'h' : ' hour' + (h === 1 ? '' : 's')) : ''}`;
    if (duration % 60 !== 0) {
        if (d) {
            d += short ? ' ' : ', ';
        }
        const m = duration % 60;
        d += `${m >= 1 ? m + (short ? 'm' : ' minute' + (m === 1 ? '' : 's')) : ''}`;
    }
    return d;
}

/**
 * Get a filtered list of items
 * @param filter Value to filter on
 * @param items List of results to filter
 * @param fields Fields to check for matches on each item
 */
export function filterList<T = HashMap>(
    filter: string,
    items?: T[],
    fields: string[] = ['id']
): T[] {
    let results: any[];
    // Tokenise filter string
    const filters = (filter || '').toLowerCase().split(' ');
    const list = {};
    for (const f of filters) {
        if (f) {
            if (!list[f]) {
                list[f] = 0;
            }
            list[f]++;
        }
    }
    // Group similar tokens
    const parts = [];
    for (const f in list) {
        if (list.hasOwnProperty(f)) {
            parts.push({ word: f, count: list[f], regex: new RegExp(f, 'gi') });
        }
    }
    parts.sort((a, b) => b.word.length - a.word.length || a.word.localeCompare(b.word));
    const item_list = JSON.parse(JSON.stringify(items || []));
    if (filter) {
        results = item_list.filter((item) => {
            let match_count = 0;
            item.match_index = 65535;
            item.match = '';
            const field_list = {};
            // Initialise field match variables
            for (const f of fields) {
                field_list[f] = {
                    value: (item[f] || '').toLowerCase(),
                    index: 65536,
                    matched: 0,
                };
            }
            // Search for matches with the tokenised filter string
            for (const i of parts) {
                if (i.word) {
                    // Check fields for matches
                    for (const f of fields) {
                        const field = field_list[f];
                        const index = field.value.indexOf(i.word);
                        field.index = index < field.index ? index : field.index;
                        field.matches = (field.value.match(i.regex) || []).length;
                        field.value = field.value.replace(i.regex, ' ');
                    }
                    // Update token match count
                    for (const f of fields) {
                        const field = field_list[f];
                        if (field.matches >= i.count) {
                            match_count++;
                            // Update field matches
                            let changed = 0;
                            const tokens = (item[`match_${f}`] || item[f] || '').split(' ');
                            for (const k of tokens) {
                                if (changed >= i.count) {
                                    break;
                                }
                                if (k.toLowerCase().indexOf(i.word) >= 0 && k.indexOf('`') < 0) {
                                    tokens[tokens.indexOf(k)] = k.replace(i.regex, '`$&`');
                                    changed++;
                                }
                            }
                            item[`match_${f}`] = tokens.join(' ');
                            break;
                        }
                    }
                }
            }
            // Get field with the most relevent match
            for (const f of fields) {
                const field = field_list[f];
                if (field.index < item.match_index && field.index >= 0) {
                    item.match_index = field.index;
                    item.match = f;
                }
            }
            return item.match_index >= 0 && item.match && match_count >= parts.length;
        });
    } else {
        results = item_list;
    }
    // Sort by order of relevence then name
    results.sort((a, b) => {
        const diff = a.match_index - b.match_index;
        return diff === 0 ? a.name.localeCompare(b.name) : diff;
    });
    return results;
}

/**
 * Convert a match string from `filterList` to renderable HTML
 * @param str Match string to change
 */
export function matchToHighlight(str: string): string {
    if (str) {
        str = str.replace(/\`[a-zA-Z0-9\@\.\_]*\`/g, '<span class="highlight">$&</span>');
        str = str.replace(/\`/g, '');
    }
    return str;
}

/**
 * Convert time string to ms from UTC epoch for today
 * @param time Time string in the format `HH:mm`
 */
export function timeToDate(time: string): number {
    const parts = (time || '').split(':');
    const date = dayjs()
        .hour(+parts[0])
        .minute(+parts[1])
        .startOf('m');
    return date.valueOf();
}

/**
 * Merge two YAML objects together
 * @param dest Destination object to merge
 * @param source Source object to merge
 */
export function mergeYAMLSettings(dest: string = '', source: string = ''): string {
    const dest_obj = yaml.safeLoad(dest) || {};
    const source_obj = yaml.safeLoad(source) || {};
    const merged_obj = merge(dest_obj, source_obj);
    return yaml.safeDump(merged_obj, { indent: 4 });
}

/** Get time format string for locale */
export function timeFormatString(): string {
    return is24HourTime() ? 'HH:mm' : 'h:mm A';
}

/** Whether locale string is displayed in 24 hour time */
export function is24HourTime(): boolean {
    const date = new Date();
    const localeString = date.toLocaleTimeString();
    return localeString.indexOf('AM') < 0 && localeString.indexOf('PM') < 0;
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
 * Parse raw CSV data into a JSON object
 * @param csv CSV data to parse
 */
export function csvToJson(csv: string, seperator: string = ',') {
    const lines = csv.split('\n');
    let fields = lines.splice(0, 1)[0].split(seperator);
    fields = fields.map((v) => v.replace('\r', ''));
    const list: any[] = [];
    for (const line of lines) {
        let parts = line.split(seperator);
        parts = parts.map((v) => v.replace('\r', ''));
        /* istanbul ignore else */
        if (parts.length >= fields.length) {
            const item: any = {};
            for (let i = 0; i <= parts.length; i++) {
                let part = null;
                part = parts[i];
                /* istanbul ignore else */
                if (part !== undefined) {
                    item[(fields[i] || '').split(' ').join('_').toLowerCase()] = JSON.parse(part);
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
