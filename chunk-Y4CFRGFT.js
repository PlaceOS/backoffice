// src/app/common/forms.ts
function addChipItem(control, event) {
  if (!control) {
    return;
  }
  const input = event.input;
  const value = (event.value || "").trim();
  const item_list = control.value;
  if (value) {
    item_list.push(value);
    control.setValue(item_list);
  }
  if (input) {
    input.value = "";
  }
}
function removeChipItem(control, item) {
  if (!control) {
    return;
  }
  const item_list = control.value;
  const index = item_list.indexOf(item);
  if (index >= 0) {
    item_list.splice(index, 1);
    control.setValue(item_list);
  }
}

export {
  addChipItem,
  removeChipItem
};
//# sourceMappingURL=chunk-Y4CFRGFT.js.map
