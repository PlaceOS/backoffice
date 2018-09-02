/**
 * The static class that defines utility methods.
 *
 * @class Utils
 */

declare let require: any;
declare let process: any;

export class Utils {
    /**
     * Checks whether the platform is NW.js.
     *
     * @static
     * @method isNwjs
     * @return {Boolean} True if the platform is NW.js
     */
    public static isNwjs() {
        return typeof require === 'function' && typeof process === 'object';
    }
    /**
     * Checks whether the platform is a mobile device.
     *
     * @static
     * @method isMobileDevice
     * @return {Boolean} True if the platform is a mobile device
     */
    public static isMobileDevice() {
        const r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return !!navigator.userAgent.match(r);
    }

    /**
     * Checks whether the browser is Mobile Safari.
     *
     * @static
     * @method isMobileSafari
     * @return {Boolean} True if the browser is Mobile Safari
     */
    public static isMobileSafari() {
        const agent = navigator.userAgent;
        return !!(agent.match(/iPhone|iPad|iPod/) && agent.match(/AppleWebKit/) &&
            !agent.match('CriOS'));
    }

    /**
     * Checks whether the browser is Android Chrome.
     *
     * @static
     * @method isAndroidChrome
     * @return {Boolean} True if the browser is Android Chrome
     */
    public static isAndroidChrome() {
        const agent = navigator.userAgent;
        return !!(agent.match(/Android/) && agent.match(/Chrome/));
    }

    /**
     * Makes a CSS color string from RGB values.
     *
     * @static
     * @method rgbToCssColor
     * @param {Number} r The red value in the range (0, 255)
     * @param {Number} g The green value in the range (0, 255)
     * @param {Number} b The blue value in the range (0, 255)
     * @return {String} CSS color string
     */
    public static rgbToCssColor(r, g, b) {
        r = Math.round(r);
        g = Math.round(g);
        b = Math.round(b);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    public static padZero(num: number, length: number) {
        let value = num.toString();
        for (let i = 0; value.length < length; i++) {
            value = '0' + value;
        }
        return value;
    }

    public static generateQueryString(fields: any) {
        let query = '';
        if (fields) {
            for (const f in fields) {
                if (fields[f] && fields[f] !== '') {
                    if (query !== '') {
                        query += '&';
                    }
                    query += `${f}=${fields[f]}`;
                }
            }
        }
        return query;
    }

    public static removeChars(str: string, char_list: string) {
        if (!str) { return ''; }
        for (let char of char_list) {
            char = char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            str = str.replace(new RegExp(char, 'g'), '');
        }
        return str;
    }


    public static validateEmail(email: string) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test((email || '').toLowerCase());
    }

    public static parseXML(data) {
        const items: any[] = [];
        // request outages.xml from the server and then you can extract the information like this
        const parser = new DOMParser();
        const xmlDoc: any = parser.parseFromString(data, 'text/xml');

        // getElementsByTagName returns a sudo-array
        const entries = Array.prototype.slice.call(
            xmlDoc.getElementsByTagName('entry'),
        );

        entries.forEach((entry) => {
            // <content> <properties> ==> <id></id><title></title> etc
            const content = entry.getElementsByTagName('content')[0]
                .childNodes[0].childNodes;
            const obj = {};

            content.forEach((field) => {
                // looks like d:Id, d:Title etc
                const name = field.nodeName.slice(2).toLowerCase();
                const c = field.textContent;

                obj[name] = c;
            });
            items.push(obj);
        });
        return items;
    }

    /**
     * Get a filtered list of items
     * @param filter Value to filter on
     * @param items List of results to filter
     * @param fields Fields to check for matches on each item
     */
    public static filter(filter: string, items?: any[], fields: string[] = ['name', 'email']) {
        let results: any[];
            // Tokenise filter string
        const filters = filter.toLowerCase().split(' ');
        const list = {};
        for (const f of filters) {
            if (f) {
                if (!list[f]) { list[f] = 0; }
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
            results = item_list.filter(
                (item) => {
                    let match_count = 0;
                    item.match_index = 65535;
                    item.match = '';
                    const field_list = {};
                        // Initialise field match variables
                    for (const f of fields) {
                        field_list[f] = {
                            value: (item[f] || '').toLowerCase(),
                            index: 65536,
                            matched: 0
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
                    return item.match_index >= 0 && item.match && (match_count >= parts.length);
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


    constructor() {
        throw new Error('This is a static class');
    }
}
