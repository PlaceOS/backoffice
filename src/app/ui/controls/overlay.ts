import {
    ConnectedPosition,
    STANDARD_DROPDOWN_BELOW_POSITIONS,
} from '@angular/cdk/overlay';

/** Least space between a floating panel or tooltip and the viewport edge */
export const VIEWPORT_MARGIN = 4;

/** Space between a floating panel and the element that opened it, so their edges do not merge */
export const PANEL_GAP = 1;

/** Panel positions below the trigger, then above it */
export const PANEL_POSITIONS: ConnectedPosition[] = [
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
        offsetY: PANEL_GAP,
    },
    {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom',
        offsetY: -PANEL_GAP,
    },
];

/**
 * CDK menu positions: below the trigger, then above it, aligned to its start
 * and then its end. Use with `[cdkMenuPosition]`.
 */
export const MENU_POSITIONS: ConnectedPosition[] =
    STANDARD_DROPDOWN_BELOW_POSITIONS.map((position) => ({
        ...position,
        offsetY: position.overlayY === 'top' ? PANEL_GAP : -PANEL_GAP,
    }));
