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
function getInvalidSignalFields(form) {
  const value = form().value();
  return Object.keys(value).filter((key) => {
    const field = form[key];
    return typeof field === "function" && field().invalid();
  });
}

export {
  addSignalChipItem,
  removeSignalChipItem,
  getInvalidSignalFields
};
//# debugId=72e02eee-8123-583a-8331-1ca2d96f6a45
//# sourceMappingURL=chunk-RCQMTPIS.js.map
