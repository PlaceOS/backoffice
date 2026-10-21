import { readError } from './errors';
import { i18n } from './locale.service';
import { notifyError } from './notifications';

/**
 * Catch handler for list loads. Tells the user the load failed, then returns
 * `empty` so the page still renders. Without it a failed load looks like a
 * list with nothing in it.
 */
export function reportLoadError<T>(empty: T) {
    return async (error: unknown): Promise<T> => {
        notifyError(
            i18n('COMMON.LOAD_ERROR', { error: await readError(error) }),
        );
        return empty;
    };
}
