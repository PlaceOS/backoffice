import { signal } from '@angular/core';

/** Notification shown by the `app-toast-outlet` */
export interface Toast {
    id: number;
    /** CSS class of the toast, e.g. `success` or `error` */
    type: string;
    message: string;
    /** Text of the action button. No button shows when it is empty */
    action: string;
    on_action: () => void;
}

/** Most toasts on screen at once. Older toasts are removed first */
export const MAX_TOASTS = 3;
/** Time a toast stays on screen. Errors stay until dismissed */
export const TOAST_DURATION_MS = 5000;

let next_id = 0;
const _toasts = signal<Toast[]>([]);

/** Toasts on screen, oldest first */
export const toasts = _toasts.asReadonly();

/** Remove a toast from the screen */
export function dismissToast(id: number) {
    _toasts.update((list) => list.filter((toast) => toast.id !== id));
}

/**
 * Create notification popup
 * @param type CSS Class to add to the notification
 * @param message Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification. It defaults to closing it
 */
export function notify(
    type: string,
    message: string,
    action = 'OK',
    on_action?: () => void,
): void {
    const id = next_id++;
    const toast: Toast = {
        id,
        type,
        message,
        action: action || '',
        on_action: on_action || (() => dismissToast(id)),
    };
    _toasts.update((list) => [...list, toast].slice(-MAX_TOASTS));
    // Errors stay until dismissed so they can be read and acted on
    if (type !== 'error') {
        setTimeout(() => dismissToast(id), TOAST_DURATION_MS);
    }
}

/**
 * Create success notification popup
 * @param msg Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 */
export function notifySuccess(
    msg: string,
    action?: string,
    on_action?: () => void,
): void {
    console.debug(msg);
    notify('success', msg, action, on_action);
}

/**
 * Create error notification popup
 * @param msg Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 */
export function notifyError(
    msg: string,
    action?: string,
    on_action?: () => void,
): void {
    console.error(msg);
    notify('error', msg, action, on_action);
}

/**
 * Create warning notification popup
 * @param msg Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 */
export function notifyWarn(
    msg: string,
    action?: string,
    on_action?: () => void,
): void {
    console.warn(msg);
    notify('warn', msg, action, on_action);
}

/**
 * Create info notification popup
 * @param msg Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 */
export function notifyInfo(
    msg: string,
    action?: string,
    on_action?: () => void,
): void {
    console.info(msg);
    notify('info', msg, action, on_action);
}
