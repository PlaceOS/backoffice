// src/app/common/validation.ts
var validateIpAddress = (ctrl) => ctrl?.value ? /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)$/g.test(ctrl.value || "") || /^(?!:\/\/)(?=.{1,255}$)((.{1,63}\.){1,127}(?![0-9]*$)[a-z0-9-]+\.?)$/gi.test(ctrl.value) ? null : { pattern: true } : null;
var validateURI = (ctrl) => {
  if (!ctrl.value) {
    return null;
  } else {
    return /\w+:(\/?\/?)[^\s]+?/gim.test(ctrl.value) ? null : { pattern: true };
  }
};
var isValidUrl = (url) => {
  if (!url)
    return true;
  try {
    new URL(url);
  } catch {
    return false;
  }
  return true;
};
var isValidDomain = (str) => {
  const domainRegex = /^(?!-)(?:[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\.)+[a-zA-Z]{2,}$/;
  return domainRegex.test(str);
};
function validateJSONString(control) {
  if (!control || !control.value) {
    return null;
  }
  try {
    JSON.parse(control.value);
  } catch {
    return { json: true };
  }
  return null;
}

export {
  validateIpAddress,
  validateURI,
  isValidUrl,
  isValidDomain,
  validateJSONString
};
//# sourceMappingURL=chunk-BZKFKJMB.js.map
