// node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    return result === 0 ? 0 : result;
  };
}

export {
  getRoundingMethod
};
//# debugId=6c014785-5cfd-5819-bb04-491b482b0dd2
//# sourceMappingURL=chunk-S2SB26WJ.js.map
