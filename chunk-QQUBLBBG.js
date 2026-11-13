import {
  openedTabs
} from "./chunk-IKYXRM55.js";
import {
  PlaceDebugService
} from "./chunk-W76WBBAI.js";
import {
  calculateModuleIndex
} from "./chunk-SDERNRDS.js";
import {
  reportLoadError
} from "./chunk-JNEMVL3M.js";
import {
  ActiveItemService
} from "./chunk-5VEIPREF.js";
import {
  describeError,
  readError
} from "./chunk-T3O7QHHC.js";
import {
  isSubsystemUser,
  querySupportSystems
} from "./chunk-BPSZRBL2.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-ZYXD5WKE.js";
import {
  AsyncHandler
} from "./chunk-ZPWJKOG5.js";
import {
  waitForDialog
} from "./chunk-ZXDSRNPN.js";
import {
  Dialog
} from "./chunk-CZLJS5TO.js";
import {
  Da,
  Ea,
  Es,
  Fa,
  Ha,
  Ia,
  La,
  Qa,
  Ra,
  Ua,
  Us,
  Za,
  _h,
  ce,
  kc,
  mc,
  qa,
  u,
  uc,
  vc,
  xa,
  za
} from "./chunk-LCM7Z6QA.js";
import {
  escapeHtml,
  moveItemInArray,
  unique
} from "./chunk-DGKMQHVX.js";
import {
  Service,
  computed,
  inject,
  resource,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-OGAUD6Z3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/systems/system-state.service.ts
async function selectItemModal() {
  const m = await import("./chunk-Q6GY6LYP.js");
  return m.SelectItemModalComponent;
}
var SystemStateService = class _SystemStateService extends AsyncHandler {
  _state = inject(ActiveItemService);
  _debug = inject(PlaceDebugService);
  _dialog = inject(Dialog);
  /** Signal of the active item */
  item = computed(
    () => this._state.item(),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _loading = signal(
    {},
    ...ngDevMode ? [{ debugName: "_loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _modules = signal(
    [],
    ...ngDevMode ? [{ debugName: "_modules" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _last_module_system = "";
  // Each list reloads only after an action that changes it
  _settings_change = signal(
    0,
    ...ngDevMode ? [{ debugName: "_settings_change" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _modules_change = signal(
    0,
    ...ngDevMode ? [{ debugName: "_modules_change" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _triggers_change = signal(
    0,
    ...ngDevMode ? [{ debugName: "_triggers_change" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _system_id = computed(
    () => {
      const item = this.item();
      return item instanceof Us ? item.id : void 0;
    },
    ...ngDevMode ? [{ debugName: "_system_id" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Tab lists load once their tab is opened. The item gives the module and
  // zone counts, and a single row query gives the trigger count.
  _opened_tabs = openedTabs(this._system_id);
  _load_modules = computed(
    () => this._opened_tabs().has("modules"),
    ...ngDevMode ? [{ debugName: "_load_modules" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _load_zones = computed(
    () => this._opened_tabs().has("zones"),
    ...ngDevMode ? [{ debugName: "_load_zones" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _load_triggers = computed(
    () => this._opened_tabs().has("triggers"),
    ...ngDevMode ? [{ debugName: "_load_triggers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _associated_settings = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_associated_settings" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      item: this.item(),
      changed: this._settings_change()
    }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof Us))
        return [];
      return isSubsystemUser() ? item.settings.filter((setting) => !!setting?.id) : La(item.id).catch(() => []);
    }
  }));
  /** Signal for associated settings of the active item */
  associated_settings = computed(
    () => this._associated_settings.value() || [],
    ...ngDevMode ? [{ debugName: "associated_settings" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _counts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_counts" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this.item(),
    loader: async ({ params: item }) => {
      if (!(item instanceof Us))
        return {};
      this.setLoading("settings", true);
      try {
        const metadata = await uc(item.id).then((response) => response.length).catch(() => 0);
        return {
          devices: item.modules.length,
          zones: item.zones.length,
          metadata
        };
      } finally {
        this.setLoading("settings", false);
      }
    }
  }));
  /** Signal of the counts of the active item */
  counts = computed(
    () => __spreadProps(__spreadValues({}, this._counts.value() || { devices: 0, zones: 0, metadata: 0 }), {
      // Counted from the trigger list so it is only requested once
      triggers: this._triggers.value()?.total || 0
    }),
    ...ngDevMode ? [{ debugName: "counts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _module_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_module_resource" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      item: this.item(),
      changed: this._modules_change(),
      load: this._load_modules()
    }),
    loader: async ({ params, abortSignal }) => {
      const { item, load } = params;
      if (!(item instanceof Us) || !load) {
        this._last_module_system = "";
        this._modules.set([]);
        return [];
      }
      if (item.id !== this._last_module_system)
        this._modules.set([]);
      this._last_module_system = item.id;
      this.setLoading("modules", true);
      try {
        const response = await mc({
          control_system_id: item.id,
          complete: true,
          limit: 200
        }).catch(reportLoadError({ data: [] }));
        if (abortSignal.aborted || this.item()?.id !== item.id) {
          return [];
        }
        const known_state = new Map(this._modules().map((mod) => [
          mod.id,
          mod.connected
        ]));
        const modules = [...response.data];
        modules.forEach((_) => _.connected = known_state.get(_.id));
        modules.sort((a, b) => {
          const index_a = item.modules.indexOf(a.id) > -1 ? item.modules.indexOf(a.id) : 9999;
          const index_b = item.modules.indexOf(b.id) > -1 ? item.modules.indexOf(b.id) : 9999;
          return index_a - index_b;
        });
        this._modules.set(modules);
        return modules;
      } finally {
        if (!abortSignal.aborted)
          this.setLoading("modules", false);
      }
    }
  }));
  /** Signal for modules associated with system */
  modules = computed(
    () => {
      this._module_resource.value();
      return this._modules();
    },
    ...ngDevMode ? [{ debugName: "modules" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Signal for debug state of the active modules */
  debug_state = computed(
    () => {
      this._debug.changed();
      return this.modules().reduce((mapping, device) => {
        mapping[device.id] = this._debug.isListening(device);
        return mapping;
      }, {});
    },
    ...ngDevMode ? [{ debugName: "debug_state" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Signal for module bindings */
  module_bindings = computed(
    () => this.modules().map((mod) => `${mod.custom_name || mod.name || "Blank"}_${calculateModuleIndex(this.modules(), mod)}`),
    ...ngDevMode ? [{ debugName: "module_bindings" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _zones = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_zones" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), load: this._load_zones() }),
    loader: async ({ params }) => {
      const { item, load } = params;
      if (!(item instanceof Us) || !load)
        return [];
      this.setLoading("zones", true);
      try {
        const response = isSubsystemUser() ? {
          // A zone the user cannot see must not hide the rest
          data: (await Promise.all(item.zones.map((id) => _h(id).catch(() => null)))).filter((zone) => !!zone)
        } : await Da(item.id).catch(reportLoadError({ data: [] }));
        const zones = [...response.data];
        zones.sort((a, b) => item.zones.indexOf(a.id) - item.zones.indexOf(b.id));
        return zones;
      } finally {
        this.setLoading("zones", false);
      }
    }
  }));
  /** Signal for zones associated with system */
  zones = computed(
    () => this._zones.value() || [],
    ...ngDevMode ? [{ debugName: "zones" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _triggers = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_triggers" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      item: this.item(),
      changed: this._triggers_change(),
      full: this._load_triggers()
    }),
    loader: async ({ params }) => {
      const { item, full } = params;
      const empty = { data: [], total: 0 };
      if (!(item instanceof Us))
        return empty;
      this.setLoading("triggers", true);
      try {
        const response = await Ha(item.id, full ? {} : { limit: 1 }).catch(full ? reportLoadError(empty) : () => empty);
        return full ? response : __spreadProps(__spreadValues({}, empty), { total: response.total });
      } finally {
        this.setLoading("triggers", false);
      }
    }
  }));
  /** Signal for triggers associated with system */
  triggers = computed(
    () => this._triggers.value()?.data || [],
    ...ngDevMode ? [{ debugName: "triggers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Signal of loading states */
  loading = this._loading.asReadonly();
  getModules = () => this._modules();
  /** Active system */
  get active_item() {
    return this._state.active_item || {};
  }
  /**
   * Open confirmation modal for stopping the active system
   */
  async startSystem() {
    const details = await this.confirm({
      title: "Start system?",
      content: `Start <strong>${escapeHtml(this.active_item.name)}</strong>?<br>All stopped modules within the system will boot up.`,
      icon: { type: "icon", class: "backoffice-controller-play" },
      confirm_text: "Start system"
    });
    if (details.reason !== "done")
      return;
    details.loading("Starting system...");
    const error = await Ua(this.active_item.id).then(() => null).catch((err) => {
      notifyError(`Failed to start system: ${describeError(err)}`);
      return err;
    });
    if (!error) {
      notifySuccess(`Successfully started system`);
      this.timeout("change", () => this.modulesChanged());
    }
    details.close();
  }
  /**
   * Open confirmation modal for stopping the active system
   */
  async stopSystem() {
    const details = await this.confirm({
      title: "Stop system?",
      content: `Stop <strong>${escapeHtml(this.active_item.name)}</strong>?<br>All modules will be immediately stopped regardless of any other systems they may be in.`,
      icon: { type: "icon", class: "backoffice-controller-stop" },
      confirm_text: "Stop system",
      destructive: true
    });
    if (details.reason !== "done")
      return;
    details.loading("Stopping system...");
    const error = await Ea(this.active_item.id).then(() => null).catch((err) => {
      notifyError(`Failed to stop system: ${describeError(err)}`);
      return err;
    });
    if (!error) {
      notifySuccess(`Successfully stopped system`);
      this.timeout("change", () => this.modulesChanged());
    }
    details.close();
  }
  toggleModuleDebug(device) {
    if (!device)
      return;
    if (this._debug.isListening(device)) {
      this._debug.unbind(device);
    } else {
      this._debug.bind(device, `${device.custom_name || device.name || "Blank"}_${calculateModuleIndex(this._modules(), device)}`);
    }
  }
  async newModule() {
    const mod = await this._state.edit(new Es({
      system: this.active_item,
      control_system_id: this.active_item.id
    })).catch((_err) => null);
    if (!mod)
      return;
    this.joinModule(mod.id);
  }
  async editModule(device) {
    await this._state.edit(device).catch((_err) => null);
    this.modulesChanged();
    this._settings_change.update((count) => count + 1);
  }
  async addModuleToSystem(device) {
    if (device.control_system_id)
      return notifyError("Logic modules cannot be added to another system");
    const item = this.item();
    const ref = this._dialog.open(await selectItemModal(), {
      data: {
        service_name: "module to system",
        query_fn: (_) => querySupportSystems({ q: _ }).then((resp) => resp.data.filter((_2) => _2.id !== item.id))
      }
    });
    const details = await waitForDialog(ref, "action");
    if (details?.reason !== "action")
      return ref.close();
    const system = ref.componentInstance.item;
    if (!system)
      return ref.close();
    await Ra(system.id, device.id).catch((_e) => {
      ref.close();
      notifyError(`Error adding module to system "${system.display_name || system.name}". Error: ${describeError(_e)}`);
      throw _e;
    });
    this.modulesChanged();
    ref.close();
    notifySuccess(`Successfully added module to system "${system.display_name || system.name}".`);
  }
  async selectTrigger() {
    const ref = this._dialog.open(await selectItemModal(), {
      data: {
        service_name: "Triggers",
        query_fn: (_) => Qa({ q: _ }).then((resp) => resp.data)
      }
    });
    const details = await waitForDialog(ref, "action");
    if (details?.reason !== "action")
      return ref.close();
    try {
      return await this.addTrigger(ref.componentInstance.item);
    } catch (err) {
      notifyError(`Error adding trigger to system. Error: ${describeError(err)}`);
    } finally {
      ref.close();
    }
  }
  async addTrigger(trigger) {
    const t = await za(this.active_item.id, {
      control_system_id: this.active_item.id,
      enabled: true,
      important: false,
      trigger_id: trigger.id
    });
    this.timeout("change", () => this.triggersChanged());
    return t;
  }
  async editTrigger(trigger) {
    if (this.item() && trigger) {
      const { SystemTriggerFormComponent } = await import("./chunk-KUM5O2JZ.js");
      const ref = this._dialog.open(SystemTriggerFormComponent, {
        data: {
          item: trigger,
          name: "Trigger",
          save: (item) => Za(item.id, item),
          external_save: true
        }
      });
      const instance = ref.componentInstance;
      const details = await waitForDialog(ref, "action");
      if (details?.reason !== "action")
        return;
      instance.loading.set("Saving trigger settings...");
      const url = `${u()}/systems/${this.active_item.id}/triggers/${trigger.id}`;
      const trig = await ce(url, details.metadata).catch((err) => {
        notifyError(`Error updating trigger settings. Error: ${describeError(err)}`);
        return null;
      });
      instance.loading.set("");
      ref.close();
      if (!trig)
        return trigger;
      notifySuccess(`Successfully updated trigger settings.`);
      this.timeout("change", () => this.triggersChanged());
      return trig;
    }
  }
  async removeTrigger(trigger) {
    const details = await this.confirm({
      title: `Remove trigger`,
      content: `<p>Are you sure you want remove trigger "${escapeHtml(trigger.name)}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
      icon: { type: "icon", content: "delete" }
    });
    if (details.reason !== "done")
      return;
    details.loading("Removing trigger...");
    try {
      await Fa(this.active_item.id, trigger.id);
    } catch (err) {
      return notifyError(`Error removing trigger ${trigger.id} from system. Error: ${await readError(err)}`);
    } finally {
      details.close();
    }
    notifySuccess(`Successfully removed trigger from system.`);
    this.triggersChanged();
  }
  async reorderModules(fst, snd) {
    const details = await this.confirm({
      title: "Change order?",
      content: `Are you sure you want to change the module priority?<br>Settings will be updated immediately for the system.`,
      icon: { type: "icon", content: "layers" }
    });
    if (details.reason !== "done")
      return;
    details.loading("Updating module order...");
    const list = [...this.active_item.modules];
    moveItemInArray(list, fst, snd);
    const resp = await qa(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      modules: list
    })).catch((err) => {
      notifyError(`Failed to reorder system modules: ${describeError(err)}`);
      return err;
    });
    details.close();
    if (resp instanceof Us) {
      notifySuccess(`Successfully reordered system modules.`);
      if (resp)
        this._state.replaceItem(resp);
    }
  }
  async sortModulesByType(alphabetical = false) {
    const modules = this._modules();
    if (modules.length < 2)
      return;
    const details = await this.confirm({
      title: "Sort modules by class?",
      content: `Are you sure you want to sort modules by class?<br>Modules with the same class name will be grouped together.`,
      icon: { type: "icon", content: "sort" }
    });
    if (details.reason !== "done")
      return;
    details.loading("Sorting modules by class...");
    let sorted_modules = [];
    if (alphabetical) {
      sorted_modules = [...modules].sort((a, b) => {
        const class_a = (a.custom_name || a.name || a.driver?.class_name || "").toLowerCase();
        const class_b = (b.custom_name || b.name || b.driver?.class_name || "").toLowerCase();
        return class_a.localeCompare(class_b);
      });
    } else {
      const processed = /* @__PURE__ */ new Set();
      for (const mod_a of modules) {
        if (processed.has(mod_a))
          continue;
        const mod_class = mod_a.custom_name || mod_a.name || mod_a.driver?.class_name || "";
        sorted_modules.push(mod_a);
        processed.add(mod_a);
        for (const mod_b of modules) {
          if (processed.has(mod_b))
            continue;
          const mod_b_class = mod_b.custom_name || mod_b.name || mod_b.driver?.class_name || "";
          if (mod_class === mod_b_class) {
            sorted_modules.push(mod_b);
            processed.add(mod_b);
          }
        }
      }
    }
    const sorted_ids = sorted_modules.map((m) => m.id);
    const resp = await qa(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      modules: sorted_ids
    })).catch((err) => {
      notifyError(`Failed to sort system modules: ${describeError(err)}`);
      return err;
    });
    details.close();
    if (resp instanceof Us) {
      notifySuccess(`Successfully sorted system modules by class.`);
      if (resp)
        this._state.replaceItem(resp);
    }
  }
  async reorderZones(order) {
    if (order.length !== this.active_item.zones.length)
      return;
    const details = await this.confirm({
      title: "Change order?",
      content: `Are you sure you want to change the zone priority?<br>Settings will be updated immediately for the system.`,
      icon: { type: "icon", content: "layers" }
    });
    if (details.reason !== "done")
      return;
    details.loading("Updating zone order...");
    const resp = await qa(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      zones: order
    })).catch((err) => {
      notifyError(`Failed to reorder system zones: ${describeError(err)}`);
      return err;
    });
    if (resp instanceof Us) {
      notifySuccess(`Successfully reordered system zones.`);
      if (resp)
        this._state.replaceItem(resp);
    }
    details.close();
  }
  /**
   * Associate module with the active system
   * @param id ID of the module to associate with the active system
   */
  async joinModule(id) {
    const added = await Ra(this.active_item.id, id).catch((err) => {
      notifyError(`Error adding module ${id} to system. Error: ${describeError(err)}`);
      return null;
    });
    if (!added)
      return;
    this.timeout("join", async () => {
      const system = await xa(this.active_item.id);
      if (system)
        this._state.replaceItem(system);
      else
        this.changed();
      notifySuccess(`Successfully added module to system.`);
    });
  }
  /**
   * Remove associated module from the active system
   * @param id ID of the module to disassociate with the active system
   */
  async removeModule(device) {
    const details = await this.confirm({
      title: "Remove module?",
      content: `Remove ${device.custom_name || device.name || device.id} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,
      icon: { type: "icon", content: "delete" }
    });
    if (details.reason !== "done")
      return;
    details.loading("Removing module...");
    const system = await Ia(this.active_item.id, device.id).catch((err) => {
      notifyError(`Error removing module ${device.id} from system. Error: ${describeError(err)}`);
    });
    details.close();
    if (!system)
      return;
    this._state.replaceItem(system);
    notifySuccess(`Successfully removed module from system.`);
  }
  /**
   * Add list of zones to the system
   * @param zones List of zones to add
   * @returns Whether the zones were added
   */
  async addZones(zone_list) {
    const zones = unique([
      ...this.active_item.zones,
      ...zone_list.map((_) => _.id)
    ]);
    const system = await qa(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      zones
    })).catch((err) => {
      notifyError(`Error adding ${zone_list.length} zone(s) to system. Error: ${describeError(err)}`);
    });
    if (!system)
      return false;
    this._state.replaceItem(system);
    notifySuccess(`Successfully added zone to system.`);
    return true;
  }
  /**
   * Remove associated module from the active system
   * @param id ID of the module to disassociate with the active system
   */
  async removeZone(zone) {
    const details = await this.confirm({
      title: "Remove zone?",
      content: `<p>Are you sure you want remove zone "${escapeHtml(zone.name)}" from the system?</p>Configuration will be updated immediately.`,
      icon: { type: "icon", content: "delete" }
    });
    if (details.reason !== "done")
      return;
    const zones = this.active_item.zones.filter((z) => z !== zone.id);
    const system = await qa(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      zones
    })).catch((err) => {
      notifyError(`Error removing zone ${zone.id} from system. Error: ${describeError(err)}`);
    });
    details.close();
    if (!system)
      return;
    this._state.replaceItem(system);
    notifySuccess(`Successfully removed zone from system.`);
  }
  /**
   * Toggle the power state
   * @param device Module to toggle the power state
   */
  async toggleModulePower(device) {
    const method = device.running ? kc : vc;
    try {
      await method(device.id);
    } catch (err) {
      if (typeof err === "string" && err.length < 64) {
        return notifyError(err);
      }
      return notifyError(`Failed to ${device.running ? "stop" : "start"} module '${device.id}'.
View Error?`, "View", () => this.viewDetails(err));
    }
    notifySuccess(`Module successfully ${device.running ? "stopped" : "started"}`);
    device.running = !device.running;
    this.modulesChanged();
  }
  /** View Results of the execute */
  async viewDetails(content) {
    const { ViewResponseModalComponent } = await import("./chunk-W3APPMUQ.js");
    this._dialog.open(ViewResponseModalComponent, { data: { content } });
  }
  async confirm(data) {
    const { openConfirmModal } = await import("./chunk-MB4VHGUZ.js");
    return openConfirmModal(data, this._dialog);
  }
  setLoading(key, value) {
    this._loading.update((state) => __spreadProps(__spreadValues({}, state), { [key]: value }));
  }
  /** Reload the settings, module and trigger lists of the active system */
  changed() {
    this._settings_change.update((count) => count + 1);
    this.modulesChanged();
    this.triggersChanged();
  }
  modulesChanged() {
    this._modules_change.update((count) => count + 1);
  }
  triggersChanged() {
    this._triggers_change.update((count) => count + 1);
  }
  static \u0275fac = function SystemStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _SystemStateService, factory: _SystemStateService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemStateService, [{
    type: Service
  }], null, null);
})();

export {
  SystemStateService
};
//# debugId=0e306e41-98e9-5d9c-ad8f-77977f6d4644
//# sourceMappingURL=chunk-QQUBLBBG.js.map
