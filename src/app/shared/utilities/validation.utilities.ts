import { Validators, AbstractControl } from '@angular/forms';

export const validateIpAddress = (ctrl) =>
    ctrl?.value
        ? /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)$/g.test(
              ctrl.value || ''
          ) ||
          /^(?!:\/\/)(?=.{1,255}$)((.{1,63}\.){1,127}(?![0-9]*$)[a-z0-9-]+\.?)$/gi.test(ctrl.value)
            ? null
            : { pattern: true }
        : null;

export const validateURI = (ctrl) => {
    if (!ctrl.value) {
        return null;
    } else {
        return /\w+:(\/?\/?)[^\s]+?/gm.test(ctrl.value) ? null : { pattern: true };
    }
};

export const validateURL = Validators.pattern(
    /^(?:(http(s)?):\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g
);

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
