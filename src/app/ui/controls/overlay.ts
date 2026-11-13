import { ConnectedPosition } from '@angular/cdk/overlay';

/** Least space between a floating panel or tooltip and the viewport edge */
export const VIEWPORT_MARGIN = 4;

/** Clear space between a floating panel and the element that opened it, so their edges do not merge */
export const PANEL_GAP = 1;

/** Height of the solid shadow below a floating panel or tooltip (`.select-panel`, `.cdk-menu`, `.tooltip-panel`) */
export const PANEL_SHADOW = 2;

/** How far the tooltip arrow reaches past the bubble. Matches `--arrow` in styles.css */
export const TOOLTIP_ARROW = 6;

/** Width of the focus ring outside a focused form field (`.field-box`) */
const FOCUS_RING = 2;

/** How far a trigger draws outside its box, above it and below it */
interface TriggerReach {
    above: number;
    below: number;
}

/** A focused form field draws its focus ring on all sides */
const FIELD_REACH: TriggerReach = { above: FOCUS_RING, below: FOCUS_RING };
/** A raised button with an open menu stays at rest, inside its box */
const BUTTON_REACH: TriggerReach = { above: 0, below: 0 };

/**
 * Positions below the trigger, then above it, with `PANEL_GAP` of clear
 * space between the edges that show: the trigger's reach outside its box,
 * and the panel's shadow when the panel is above the trigger.
 */
function positions(
    reach: TriggerReach,
    align: ConnectedPosition['originX'],
): ConnectedPosition[] {
    return [
        {
            originX: align,
            originY: 'bottom',
            overlayX: align,
            overlayY: 'top',
            offsetY: reach.below + PANEL_GAP,
        },
        {
            originX: align,
            originY: 'top',
            overlayX: align,
            overlayY: 'bottom',
            offsetY: -(reach.above + PANEL_SHADOW + PANEL_GAP),
        },
    ];
}

/** Positions of a panel that a form field opens, e.g. a select or autocomplete */
export const PANEL_POSITIONS = positions(FIELD_REACH, 'start');

/**
 * CDK menu positions for a button trigger: below, then above, aligned to
 * the start of the trigger and then its end. Use with `[cdkMenuPosition]`.
 */
export const MENU_POSITIONS: ConnectedPosition[] = [
    ...positions(BUTTON_REACH, 'start'),
    ...positions(BUTTON_REACH, 'end'),
];

/** Menu positions above the trigger, then below it */
export const MENU_POSITIONS_ABOVE: ConnectedPosition[] = [
    MENU_POSITIONS[1],
    MENU_POSITIONS[0],
];
