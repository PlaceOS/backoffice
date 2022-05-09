import { Validators, AbstractControl } from '@angular/forms';

export const validateIpAddress = (ctrl) =>
    ctrl?.value
        ? /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)$/g.test(
              ctrl.value || ''
          ) ||
          /^(?!:\/\/)(?=.{1,255}$)((.{1,63}\.){1,127}(?![0-9]*$)[a-z0-9-]+\.?)$/gi.test(
              ctrl.value
          )
            ? null
            : { pattern: true }
        : null;

export const validateURI = (ctrl) => {
    if (!ctrl.value) {
        return null;
    } else {
        return /\w+:(\/?\/?)[^\s]+?/gim.test(ctrl.value)
            ? null
            : { pattern: true };
    }
};

export const isValidUrl = (url) => {
    try { new URL(url); } 
    catch (e) { return false; }
    return true;
};

export const validateURL = (ctrl: AbstractControl) => isValidUrl(ctrl?.value) ? null : { url: 'invalid' } ;

export function validateJSONString(control: AbstractControl) {
    if (!control || !control.value) {
        return null;
    }
    try {
        const json = JSON.parse(control.value);
    } catch (e) {
        return { json: true };
    }
    return null;
}
