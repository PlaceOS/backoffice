import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
    dismissToast,
    MAX_TOASTS,
    notify,
    notifyError,
    notifyInfo,
    notifySuccess,
    notifyWarn,
    TOAST_DURATION_MS,
    toasts,
} from '../../app/common/notifications';

describe('notifications.ts', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        for (const toast of toasts()) dismissToast(toast.id);
        vi.spyOn(console, 'debug').mockImplementation(() => null);
        vi.spyOn(console, 'error').mockImplementation(() => null);
        vi.spyOn(console, 'warn').mockImplementation(() => null);
        vi.spyOn(console, 'info').mockImplementation(() => null);
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    it('shows a toast with the type, message and action', () => {
        notify('info', 'Saved', 'Undo');
        expect(toasts()).toMatchObject([
            { type: 'info', message: 'Saved', action: 'Undo' },
        ]);
    });

    it('removes a toast after its duration', () => {
        notify('info', 'Saved');
        vi.advanceTimersByTime(TOAST_DURATION_MS);
        expect(toasts()).toEqual([]);
    });

    it('keeps errors until they are dismissed', () => {
        notifyError('Failed');
        vi.advanceTimersByTime(TOAST_DURATION_MS * 10);
        expect(toasts()).toHaveLength(1);
        dismissToast(toasts()[0].id);
        expect(toasts()).toEqual([]);
    });

    it('closes the toast from the default action', () => {
        notify('info', 'Saved');
        toasts()[0].on_action();
        expect(toasts()).toEqual([]);
    });

    it('runs a custom action callback', () => {
        const on_action = vi.fn();
        notify('info', 'Saved', 'Undo', on_action);
        toasts()[0].on_action();
        expect(on_action).toHaveBeenCalledOnce();
    });

    it('keeps only the newest toasts', () => {
        for (let i = 0; i < MAX_TOASTS + 2; i++) notifyError(`Error ${i}`);
        expect(toasts().map((toast) => toast.message)).toEqual(
            Array.from({ length: MAX_TOASTS }, (_, i) => `Error ${i + 2}`),
        );
    });

    it.each([
        [notifySuccess, 'success', 'debug'],
        [notifyError, 'error', 'error'],
        [notifyWarn, 'warn', 'warn'],
        [notifyInfo, 'info', 'info'],
    ] as const)(
        '%o sets type %s and logs with console.%s',
        (fn, type, method) => {
            fn('Message', 'Retry');
            expect(toasts()).toMatchObject([
                { type, message: 'Message', action: 'Retry' },
            ]);
            expect(console[method]).toHaveBeenCalledWith('Message');
        },
    );
});
