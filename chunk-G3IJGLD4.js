// src/app/common/errors.ts
var MAX_BODY_LENGTH = 300;
function describeError(error) {
  if (!error)
    return "Unknown error";
  if (typeof error === "string")
    return error;
  if (typeof error !== "object")
    return String(error);
  if (typeof Response !== "undefined" && error instanceof Response) {
    return `${error.status} ${error.statusText || "request failed"}`.trim();
  }
  const { message, status, statusText } = error;
  if (typeof message === "string" && message)
    return message;
  if (typeof status === "number" && status) {
    return `${status} ${statusText || "request failed"}`.trim();
  }
  return "Unknown error";
}
async function readError(error) {
  const summary = describeError(error);
  if (typeof Response === "undefined" || !(error instanceof Response) || error.bodyUsed) {
    return summary;
  }
  const body = await error.clone().text().catch(() => "");
  const detail = bodyMessage(body);
  return detail ? `${summary}: ${detail}` : summary;
}
function bodyMessage(body) {
  const text = body.trim();
  if (!text)
    return "";
  try {
    const json = JSON.parse(text);
    const message = json?.message || json?.error;
    if (typeof message === "string" && message) {
      return message.slice(0, MAX_BODY_LENGTH);
    }
  } catch {
  }
  if (text.startsWith("<"))
    return "";
  return text.slice(0, MAX_BODY_LENGTH);
}

export {
  describeError,
  readError
};
//# sourceMappingURL=chunk-G3IJGLD4.js.map
