import {
  uploadFile
} from "./chunk-J2NWBVJP.js";
import {
  MatDialog
} from "./chunk-MX73KXEQ.js";
import {
  Service,
  inject,
  lastValueFrom,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-2GWPJS4J.js";

// src/app/common/uploads.service.ts
var UploadsService = class _UploadsService {
  _dialog = inject(MatDialog);
  _upload_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "_upload_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  upload_list = this._upload_list.asReadonly();
  constructor() {
    if (localStorage) {
      this._upload_list.set(JSON.parse(localStorage.getItem("BACKOFFICE.uploads") || "[]"));
    }
  }
  clearList() {
    const in_progress_list = this._upload_list().filter((file) => file.progress < 100 && !file.error);
    this._upload_list.set(in_progress_list);
  }
  async uploadFileWithPermissions(file) {
    const { UploadPermissionsModalComponent } = await import("./chunk-HGNW32WW.js");
    return new Promise((resolve, reject) => {
      const ref = this._dialog.open(UploadPermissionsModalComponent, {
        data: { file }
      });
      lastValueFrom(ref.afterClosed()).then(async (details) => {
        if (details) {
          const id = await this.uploadFile(details.file, details.is_public, details.permissions).catch((e) => {
            reject(e);
            throw e;
          });
          resolve(id);
        } else
          reject();
      });
    });
  }
  uploadFile(file, is_public = true, permissions = "none") {
    return new Promise((resolve) => {
      let resolved = false;
      const update_fn = (details) => {
        if (!resolved) {
          resolve(details.id);
          resolved = true;
        }
        this._upload_list.set([
          ...this._upload_list().filter((_) => _.id !== details.id),
          details
        ]);
      };
      uploadFile(file, is_public, permissions).subscribe(update_fn, update_fn, () => this._updateUploadHistory());
    });
  }
  _updateUploadHistory() {
    const done_list = this._upload_list().filter((file) => file.progress >= 100);
    done_list.forEach((i) => delete i.upload);
    if (localStorage) {
      localStorage.setItem("BACKOFFICE.uploads", JSON.stringify(done_list));
    }
  }
  static \u0275fac = function UploadsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _UploadsService, factory: _UploadsService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadsService, [{
    type: Service
  }], () => [], null);
})();

export {
  UploadsService
};
//# sourceMappingURL=chunk-Z4VDKL5H.js.map
