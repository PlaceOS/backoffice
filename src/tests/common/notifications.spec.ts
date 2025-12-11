import { Subject } from 'rxjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
    notify,
    notifyError,
    notifyInfo,
    notifySuccess,
    notifyWarn,
    setNotifyOutlet,
} from '../../app/common/notifications';

// Create mock snackbar
const createMockSnackbar = () => {
    const action_subject = new Subject<void>();
    const mock_ref = {
        dismiss: vi.fn(),
        onAction: vi.fn(() => action_subject.asObservable()),
    };
    const mock_snackbar = {
        open: vi.fn(() => mock_ref),
    };
    return { mock_snackbar, mock_ref, action_subject };
};

describe('notifications.ts', () => {
    let mock_snackbar: any;
    let mock_ref: any;
    let action_subject: Subject<void>;

    beforeEach(() => {
        const mocks = createMockSnackbar();
        mock_snackbar = mocks.mock_snackbar;
        mock_ref = mocks.mock_ref;
        action_subject = mocks.action_subject;

        setNotifyOutlet(mock_snackbar as any);

        vi.spyOn(console, 'debug').mockImplementation(() => {});
        vi.spyOn(console, 'error').mockImplementation(() => {});
        vi.spyOn(console, 'warn').mockImplementation(() => {});
        vi.spyOn(console, 'info').mockImplementation(() => {});
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe('setNotifyOutlet', () => {
        it('should set the snackbar service', () => {
            setNotifyOutlet(mock_snackbar as any);
            // If set correctly, notify should not throw
            expect(() => notify('test', 'message')).not.toThrow();
        });
    });

    describe('notify', () => {
        it('should throw if snackbar not initialized', () => {
            setNotifyOutlet(null as any);
            expect(() => notify('test', 'message')).toThrow(
                "Snackbar service hasn't been initialised",
            );
            // Reset for other tests
            setNotifyOutlet(mock_snackbar as any);
        });

        it('should call snackbar.open with correct parameters', () => {
            notify('success', 'Test message');

            expect(mock_snackbar.open).toHaveBeenCalledWith(
                'Test message',
                'OK',
                {
                    panelClass: ['success'],
                    duration: 5000,
                },
            );
        });

        it('should use custom action text', () => {
            notify('info', 'Test message', 'CLOSE');

            expect(mock_snackbar.open).toHaveBeenCalledWith(
                'Test message',
                'CLOSE',
                expect.any(Object),
            );
        });

        it('should call custom action callback on action', () => {
            const on_action = vi.fn();
            notify('info', 'Test message', 'ACTION', on_action);

            action_subject.next();

            expect(on_action).toHaveBeenCalled();
        });

        it('should dismiss snackbar on action if no callback provided', () => {
            notify('info', 'Test message', 'OK');

            action_subject.next();

            expect(mock_ref.dismiss).toHaveBeenCalled();
        });
    });

    describe('notifySuccess', () => {
        it('should call notify with success type', () => {
            notifySuccess('Success message');

            // notify function defaults action to 'OK' when undefined
            expect(mock_snackbar.open).toHaveBeenCalledWith(
                'Success message',
                'OK',
                expect.objectContaining({
                    panelClass: ['success'],
                }),
            );
        });

        it('should log to console.debug', () => {
            notifySuccess('Debug message');

            expect(console.debug).toHaveBeenCalledWith('Debug message');
        });

        it('should pass action and callback', () => {
            const callback = vi.fn();
            notifySuccess('Message', 'ACTION', callback);

            expect(mock_snackbar.open).toHaveBeenCalledWith(
                'Message',
                'ACTION',
                expect.any(Object),
            );
        });
    });

    describe('notifyError', () => {
        it('should call notify with error type', () => {
            notifyError('Error message');

            // notify function defaults action to 'OK' when undefined
            expect(mock_snackbar.open).toHaveBeenCalledWith(
                'Error message',
                'OK',
                expect.objectContaining({
                    panelClass: ['error'],
                }),
            );
        });

        it('should log to console.error', () => {
            notifyError('Error message');

            expect(console.error).toHaveBeenCalledWith('Error message');
        });

        it('should pass action and callback', () => {
            const callback = vi.fn();
            notifyError('Error', 'RETRY', callback);

            expect(mock_snackbar.open).toHaveBeenCalledWith(
                'Error',
                'RETRY',
                expect.any(Object),
            );
        });
    });

    describe('notifyWarn', () => {
        it('should call notify with warn type', () => {
            notifyWarn('Warning message');

            // notify function defaults action to 'OK' when undefined
            expect(mock_snackbar.open).toHaveBeenCalledWith(
                'Warning message',
                'OK',
                expect.objectContaining({
                    panelClass: ['warn'],
                }),
            );
        });

        it('should log to console.warn', () => {
            notifyWarn('Warning message');

            expect(console.warn).toHaveBeenCalledWith('Warning message');
        });

        it('should pass action and callback', () => {
            const callback = vi.fn();
            notifyWarn('Warning', 'IGNORE', callback);

            expect(mock_snackbar.open).toHaveBeenCalledWith(
                'Warning',
                'IGNORE',
                expect.any(Object),
            );
        });
    });

    describe('notifyInfo', () => {
        it('should call notify with info type', () => {
            notifyInfo('Info message');

            // notify function defaults action to 'OK' when undefined
            expect(mock_snackbar.open).toHaveBeenCalledWith(
                'Info message',
                'OK',
                expect.objectContaining({
                    panelClass: ['info'],
                }),
            );
        });

        it('should log to console.info', () => {
            notifyInfo('Info message');

            expect(console.info).toHaveBeenCalledWith('Info message');
        });

        it('should pass action and callback', () => {
            const callback = vi.fn();
            notifyInfo('Info', 'GOT IT', callback);

            expect(mock_snackbar.open).toHaveBeenCalledWith(
                'Info',
                'GOT IT',
                expect.any(Object),
            );
        });
    });
});
