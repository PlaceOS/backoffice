// src/app/common/general.ts
function log(type, msg, args, stream = "debug", force = false, app_name = "BACKOFFICE") {
  if (window.debug || force) {
    const colors = [
      "color: #E91E63",
      "color: #ffb300",
      "color: default"
    ];
    if (args) {
      console[stream](`%c[${app_name}]%c[${type}] %c${msg}`, ...colors, args);
    } else {
      console[stream](`%c[${app_name}]%c[${type}] %c${msg}`, ...colors);
    }
  }
}
function detectIE() {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }
  const trident = ua.indexOf("Trident/");
  if (trident > 0) {
    const rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }
  const edge = ua.indexOf("Edge/");
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }
  return 0;
}
function getItemWithKeys(keys, map) {
  const key = keys[0];
  if (map && key in map) {
    return keys.length > 1 ? getItemWithKeys(keys.slice(1), map[key] || {}) : map[key];
  }
  return null;
}
function unique(array, key = "") {
  return array.filter((el, pos, arr) => arr.indexOf(key ? arr.find((i) => i[key] === el[key]) : arr.find((i) => i === el)) === pos);
}
var HTML_ENTITIES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function escapeHtml(value) {
  return `${value ?? ""}`.replace(/[&<>"']/g, (char) => HTML_ENTITIES[char]);
}
function randomInt(ceil, floor = 0) {
  return Math.floor(Math.random() * (ceil - floor)) + floor;
}
function copyToClipboard(value) {
  const el = document.createElement("textarea");
  el.value = value;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}
function numberToPosition(num) {
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
var csvToJson = parseCSV;
function parseCSV(csv, separator = ",") {
  const [headers, ...data_rows] = splitCsvRows(csv, separator);
  if (!headers)
    return [];
  return data_rows.map((cells) => {
    const record = {};
    headers.forEach((header, idx) => {
      const cell = cells[idx] ?? "";
      try {
        record[header] = cell !== "" ? JSON.parse(cell) : "";
      } catch {
        const lower = `${cell}`.toLowerCase();
        record[header] = lower === "true" ? true : lower === "false" ? false : cell;
      }
    });
    return record;
  });
}
function splitCsvRows(csv, separator) {
  const rows = [];
  let row = [];
  let cell = "";
  let in_quotes = false;
  const endRow = () => {
    row.push(cell);
    if (row.length > 1 || row[0].trim() !== "")
      rows.push(row);
    row = [];
    cell = "";
  };
  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];
    if (in_quotes) {
      if (char !== '"') {
        cell += char;
      } else if (csv[i + 1] === '"') {
        cell += '"';
        i++;
      } else {
        in_quotes = false;
      }
    } else if (char === '"') {
      in_quotes = true;
    } else if (separator && csv.startsWith(separator, i)) {
      row.push(cell);
      cell = "";
      i += separator.length - 1;
    } else if (char === "\n") {
      endRow();
    } else if (char === "\r" && csv[i + 1] === "\n") {
      endRow();
      i++;
    } else {
      cell += char;
    }
  }
  endRow();
  return rows;
}
function jsonToCsv(data, use_keys = [], separator = ",") {
  if (!data.length)
    return "";
  const headers = use_keys.length ? use_keys : [...new Set(data.flatMap((item) => Object.keys(item)))];
  const headerRow = headers.join(separator);
  const rows = data.map((item) => {
    return headers.map((header) => {
      let cell = item[header];
      if (cell && typeof cell === "object") {
        cell = JSON.stringify(cell);
      }
      const cellStr = cell == null ? "" : String(cell);
      if (cellStr.includes(separator) || cellStr.includes('"') || cellStr.includes("\n") || cellStr.includes("\r")) {
        const escaped = cellStr.replace(/"/g, '""');
        return `"${escaped}"`;
      }
      return cellStr;
    }).join(separator);
  });
  return [headerRow, ...rows].join("\n");
}
function eventToPoint(event) {
  if (!event) {
    return { x: -1, y: -1 };
  }
  if (event instanceof MouseEvent) {
    return { x: event.clientX, y: event.clientY };
  } else {
    return event.touches && event.touches.length > 0 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : { x: -1, y: -1 };
  }
}
function downloadFile(filename, contents) {
  const element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(contents));
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
function flatten(an_array) {
  const stack = [...an_array];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
}
var issueDescription = (hash, date) => `
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
function padLength(value, length = 2, character = "0") {
  let str = `${value}`;
  while (str.length < length)
    str = `${character}${str}`;
  return str;
}

export {
  log,
  detectIE,
  getItemWithKeys,
  unique,
  escapeHtml,
  randomInt,
  copyToClipboard,
  numberToPosition,
  csvToJson,
  jsonToCsv,
  eventToPoint,
  downloadFile,
  flatten,
  issueDescription,
  padLength
};
//# sourceMappingURL=chunk-SXYVSUAR.js.map
