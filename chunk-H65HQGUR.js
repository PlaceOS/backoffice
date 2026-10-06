import {
  required,
  validate
} from "./chunk-QBQ5C53A.js";
import {
  Ms
} from "./chunk-M2N6S2L7.js";

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
    repo_type: repository?.repo_type || Ms.Driver,
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
    if (valueOf(path.id))
      return void 0;
    return /^[a-zA-Z0-9_+\-().]*$/.test(value()) ? void 0 : { kind: "pattern", message: "Invalid folder name" };
  });
  required(path.uri);
};
function maskUriCredentials(uri) {
  if (!uri)
    return "";
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
//# sourceMappingURL=chunk-H65HQGUR.js.map
