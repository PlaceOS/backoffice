import {
  AuthenticatedImageDirective
} from "./chunk-GILXWXRU.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QSXZQV2A.js";

// src/app/ui/user-avatar.component.ts
function UserAvatarComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials(), " ");
  }
}
function UserAvatarComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.photo_url())("alt", "User avatar");
  }
}
function UserAvatarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, UserAvatarComponent_Conditional_0_Conditional_1_Template, 2, 1, "div", 1)(2, UserAvatarComponent_Conditional_0_Conditional_2_Template, 1, 2, "img", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("user-id", ctx_r0.user().id);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.photo_url() ? 1 : 2);
  }
}
var UserAvatarComponent = class _UserAvatarComponent {
  user = input(
    void 0,
    ...ngDevMode ? [{ debugName: "user" }] : (
      /* istanbul ignore next */
      []
    )
  );
  photo_url = computed(
    () => {
      const user = this.user();
      return user?.photo || user?.image || "";
    },
    ...ngDevMode ? [{ debugName: "photo_url" }] : (
      /* istanbul ignore next */
      []
    )
  );
  initials = computed(
    () => {
      const user = this.user();
      if (!user)
        return "NA";
      const name = user.name || "";
      const parts = name.replace(/[()[\]\-+=\\/]+/gi, "").split(" ");
      return parts.length > 1 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : name.slice(0, 2);
    },
    ...ngDevMode ? [{ debugName: "initials" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function UserAvatarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserAvatarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvatarComponent, selectors: [["a-user-avatar"]], inputs: { user: [1, "user"] }, decls: 1, vars: 1, consts: [[1, "flex", "items-center", "justify-center", "overflow-hidden", "rounded-full"], ["initials", "", 1, "text-base-content", "text-opacity-80", "uppercase"], ["auth", "", 1, "h-full", "w-full", "object-cover", 3, "source", "alt"]], template: function UserAvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, UserAvatarComponent_Conditional_0_Template, 3, 2, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.user() ? 0 : -1);
    }
  }, dependencies: [AuthenticatedImageDirective], styles: ["\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 2.5em;\n  width: 2.5em;\n  background-color: var(--base-200);\n  overflow: hidden;\n  border: 2px solid var(--base-100);\n}\n.initials[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=user-avatar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAvatarComponent, [{
    type: Component,
    args: [{ selector: "a-user-avatar", template: `
        @if (user()) {
            <div
                class="flex items-center justify-center overflow-hidden rounded-full"
                [attr.user-id]="user().id"
            >
                @if (!photo_url()) {
                    <div
                        initials
                        class="text-base-content text-opacity-80 uppercase"
                    >
                        {{ initials() }}
                    </div>
                } @else {
                    <img
                        auth
                        class="h-full w-full object-cover"
                        [source]="photo_url()"
                        [alt]="'User avatar'"
                    />
                }
            </div>
        }
    `, imports: [AuthenticatedImageDirective], styles: ["/* angular:styles/component:css;7e5108eb93cc1b6b75798556330d7fd5cf3da60c87e8ff23e271dab094184f05;/home/runner/work/backoffice/backoffice/src/app/ui/user-avatar.component.ts */\n:host > div {\n  height: 2.5em;\n  width: 2.5em;\n  background-color: var(--base-200);\n  overflow: hidden;\n  border: 2px solid var(--base-100);\n}\n.initials {\n  font-size: 1em;\n}\n/*# sourceMappingURL=user-avatar.component.css.map */\n"] }]
  }], null, { user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvatarComponent, { className: "UserAvatarComponent", filePath: "src/app/ui/user-avatar.component.ts", lineNumber: 48 });
})();

export {
  UserAvatarComponent
};
//# sourceMappingURL=chunk-AWMCRFNT.js.map
