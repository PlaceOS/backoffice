import {
  CallFailed
} from "./chunk-LD3K5ATK.js";

// src/app/common/errors.ts
var MAX_BODY_LENGTH = 300;
function httpError(error) {
  return error instanceof CallFailed && error.error.kind === "http" ? error.error : null;
}
function describeError(error) {
  if (!error) return "Unknown error";
  if (typeof error === "string") return error;
  if (typeof error !== "object") return String(error);
  const http = httpError(error);
  if (http) return `${http.status} request failed`;
  const { message, status, statusText } = error;
  if (typeof message === "string" && message) return message;
  if (typeof status === "number" && status) {
    return `${status} ${statusText || "request failed"}`.trim();
  }
  return "Unknown error";
}
async function readError(error) {
  const summary = describeError(error);
  const detail = bodyMessage(error);
  return detail ? `${summary}: ${detail}` : summary;
}
function bodyMessage(error) {
  const http = httpError(error);
  if (!http) return "";
  const { body } = http;
  const body_message = body && typeof body === "object" && !Array.isArray(body) ? body["message"] : null;
  const text = (http.message || (typeof body_message === "string" ? body_message : "") || http.text || "").trim();
  if (text.startsWith("<")) return "";
  return text.slice(0, MAX_BODY_LENGTH);
}

export {
  httpError,
  describeError,
  readError
};
//# debugId=dc97d24b-73f4-566b-a397-1b2468a1e401
//# sourceMappingURL=chunk-YCY3FSLN.js.map
