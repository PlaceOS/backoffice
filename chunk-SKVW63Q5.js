import {
  required,
  validate
} from "./chunk-EQS235EG.js";
import {
  Os
} from "./chunk-NMVMT4VD.js";

// src/app/repositories/repositories.utilities.ts
function generateRepositoryFormModel(repository) {
  return {
    id: repository?.id || "",
    commit_hash: repository?.commit_hash || "HEAD",
    branch: repository?.branch || "",
    name: repository?.name || "",
    folder_name: repository?.folder_name || "",
    description: repository?.description || "",
    uri: repository?.uri || "",
    repo_type: repository?.repo_type || Os.Driver,
    root_path: repository?.root_path || "",
    username: repository?.username || "",
    password: repository?.password || ""
  };
}
var applyRepositoryFormSchema = (path) => {
  required(path.branch);
  required(path.name);
  required(path.folder_name, {
    when({ valueOf }) {
      return !valueOf(path.id);
    }
  });
  validate(path.folder_name, ({ value, valueOf }) => {
    if (valueOf(path.id)) return void 0;
    return /^[a-zA-Z0-9_+\-().]*$/.test(value()) ? void 0 : { kind: "pattern", message: "Invalid folder name" };
  });
  required(path.uri);
};
function maskUriCredentials(uri) {
  if (!uri) return "";
  try {
    const url = new URL(uri);
    url.username = "";
    url.password = "";
    return url.href;
  } catch {
    return uri.replace(/\/\/[^/\s]*@/, "//");
  }
}

export {
  generateRepositoryFormModel,
  applyRepositoryFormSchema,
  maskUriCredentials
};
//# debugId=360392ff-b3d4-539d-8412-998462c7969c
//# sourceMappingURL=chunk-SKVW63Q5.js.map
