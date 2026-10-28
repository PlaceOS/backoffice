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
function editSignalChipItem(items, item, event) {
  const value = (event.value || "").trim();
  if (!value) return removeSignalChipItem(items, item);
  if (value !== item && items.includes(value)) {
    return removeSignalChipItem(items, item);
  }
  return items.map((existing) => existing === item ? value : existing);
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
  editSignalChipItem,
  getInvalidSignalFields
};
//# debugId=ea384e2a-7aaf-5dc2-8d42-25ca85bc9776
//# sourceMappingURL=chunk-NTASD32E.js.map
