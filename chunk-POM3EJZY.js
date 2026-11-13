// src/app/ui/controls/overlay.ts
var VIEWPORT_MARGIN = 4;
var PANEL_GAP = 1;
var PANEL_SHADOW = 2;
var TOOLTIP_ARROW = 6;
var FOCUS_RING = 2;
var FIELD_REACH = { above: FOCUS_RING, below: FOCUS_RING };
var BUTTON_REACH = { above: 0, below: 0 };
function positions(reach, align) {
  return [
    {
      originX: align,
      originY: "bottom",
      overlayX: align,
      overlayY: "top",
      offsetY: reach.below + PANEL_GAP
    },
    {
      originX: align,
      originY: "top",
      overlayX: align,
      overlayY: "bottom",
      offsetY: -(reach.above + PANEL_SHADOW + PANEL_GAP)
    }
  ];
}
var PANEL_POSITIONS = positions(FIELD_REACH, "start");
var MENU_POSITIONS = [
  ...positions(BUTTON_REACH, "start"),
  ...positions(BUTTON_REACH, "end")
];
var MENU_POSITIONS_ABOVE = [
  MENU_POSITIONS[1],
  MENU_POSITIONS[0]
];

export {
  VIEWPORT_MARGIN,
  PANEL_GAP,
  PANEL_SHADOW,
  TOOLTIP_ARROW,
  PANEL_POSITIONS,
  MENU_POSITIONS,
  MENU_POSITIONS_ABOVE
};
//# debugId=22b7a9c3-f5e2-56bb-84c5-3a5a36de4480
//# sourceMappingURL=chunk-POM3EJZY.js.map
