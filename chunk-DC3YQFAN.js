// src/app/common/forms.ts
function addSignalChipItem(items, event, transform = (value) => value) {
  const value = (event.value || "").trim();
  event.chipInput?.clear();
  if (!value) return items;
  const item = transform(value);
  return items.includes(item) ? items : [...items, item];
}
function removeSignalChipItem(items, item) {
  return items.filter((existing) => existing !== item);
}
function fieldLabel(key) {
  const words = key.replace(/_/g, " ").trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
}
function getInvalidSignalFields(form) {
  const value = form().value();
  return Object.keys(value).filter((key) => {
    const field = form[key];
    return typeof field === "function" && field().invalid();
  }).map(fieldLabel);
}

export {
  addSignalChipItem,
  removeSignalChipItem,
  getInvalidSignalFields
};
//# debugId=6304d218-5d5b-5517-a592-bdeb876bda8a
//# sourceMappingURL=chunk-DC3YQFAN.js.map
