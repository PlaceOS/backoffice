import {
  SkipToContentComponent
} from "./chunk-5PG3435R.js";
import {
  reportLoadError
} from "./chunk-QJT4A7RT.js";
import {
  ActiveItemService
} from "./chunk-YMSUF7BT.js";
import "./chunk-WW4MOCD2.js";
import {
  VirtualScrollComponent
} from "./chunk-UKX5GNV3.js";
import {
  toSignal
} from "./chunk-FF4ADQI6.js";
import "./chunk-AEEAYNFO.js";
import {
  SpinnerComponent
} from "./chunk-WWSSYZEA.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-2LLCGR7C.js";
import "./chunk-XSBVNB3I.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-LL56AHAM.js";
import "./chunk-2DKDRFBI.js";
import "./chunk-LJNKRCR4.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-CKZDCKLD.js";
import {
  AsyncHandler
} from "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import {
  SettingsToggleComponent
} from "./chunk-A7VS2VYD.js";
import {
  SelectComponent
} from "./chunk-XLCDDNWX.js";
import {
  OptionComponent
} from "./chunk-CH2YF4Y7.js";
import {
  FormFieldComponent
} from "./chunk-O2B7KTSR.js";
import "./chunk-SSVO7UC4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5APMNGCP.js";
import "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-G7DGN64C.js";
import "./chunk-JJ65W2TY.js";
import {
  Es,
  Eu,
  Nt,
  Us,
  en,
  hr
} from "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-JEKJ3JY5.js";
import "./chunk-QY7ZA5QE.js";
import {
  TooltipDirective
} from "./chunk-ERJVBWAI.js";
import "./chunk-POM3EJZY.js";
import {
  TREE_KEY_MANAGER,
  coerceObservable
} from "./chunk-UVK6APTK.js";
import {
  Directionality,
  isDataSource
} from "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  IterableDiffers,
  NgModule,
  Output,
  Subject,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  booleanAttribute,
  combineLatest,
  computed,
  concat,
  concatMap,
  distinctUntilChanged,
  effect,
  inject,
  input,
  isObservable,
  map,
  numberAttribute,
  of,
  reduce,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// node_modules/@angular/cdk/fesm2022/_selection-model-chunk.mjs
var SelectionModel = class {
  _multiple;
  _emitChanges;
  compareWith;
  _selection = /* @__PURE__ */ new Set();
  _deselectedToEmit = [];
  _selectedToEmit = [];
  _selected = null;
  get selected() {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values());
    }
    return this._selected;
  }
  changed = new Subject();
  bulk = {
    select: (values) => this._select(values),
    deselect: (values) => this._deselect(values),
    setSelection: (values) => this._setSelection(values)
  };
  constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    this.compareWith = compareWith;
    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach((value) => this._markSelected(value));
      } else {
        this._markSelected(initiallySelectedValues[0]);
      }
      this._selectedToEmit.length = 0;
    }
  }
  select(...values) {
    return this._select(values);
  }
  deselect(...values) {
    return this._deselect(values);
  }
  setSelection(...values) {
    return this._setSelection(values);
  }
  toggle(value) {
    return this.isSelected(value) ? this.deselect(value) : this.select(value);
  }
  clear(flushEvent = true) {
    this._unmarkAll();
    const changed = this._hasQueuedChanges();
    if (flushEvent) {
      this._emitChangeEvent();
    }
    return changed;
  }
  isSelected(value) {
    return this._selection.has(this._getConcreteValue(value));
  }
  isEmpty() {
    return this._selection.size === 0;
  }
  hasValue() {
    return !this.isEmpty();
  }
  sort(predicate) {
    if (this._multiple && this.selected) {
      this._selected.sort(predicate);
    }
  }
  isMultipleSelection() {
    return this._multiple;
  }
  _select(values) {
    this._verifyValueAssignment(values);
    values.forEach((value) => this._markSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  _deselect(values) {
    this._verifyValueAssignment(values);
    values.forEach((value) => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  _setSelection(values) {
    this._verifyValueAssignment(values);
    const oldValues = this.selected;
    const newSelectedSet = new Set(values.map((value) => this._getConcreteValue(value)));
    values.forEach((value) => this._markSelected(value));
    oldValues.filter((value) => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach((value) => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  _emitChangeEvent() {
    this._selected = null;
    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      this.changed.next({
        source: this,
        added: this._selectedToEmit,
        removed: this._deselectedToEmit
      });
      this._deselectedToEmit = [];
      this._selectedToEmit = [];
    }
  }
  _markSelected(value) {
    value = this._getConcreteValue(value);
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll();
      }
      if (!this.isSelected(value)) {
        this._selection.add(value);
      }
      if (this._emitChanges) {
        this._selectedToEmit.push(value);
      }
    }
  }
  _unmarkSelected(value) {
    value = this._getConcreteValue(value);
    if (this.isSelected(value)) {
      this._selection.delete(value);
      if (this._emitChanges) {
        this._deselectedToEmit.push(value);
      }
    }
  }
  _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach((value) => this._unmarkSelected(value));
    }
  }
  _verifyValueAssignment(values) {
    if (values.length > 1 && !this._multiple && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMultipleValuesInSingleSelectionError();
    }
  }
  _hasQueuedChanges() {
    return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
  }
  _getConcreteValue(inputValue, selection) {
    if (!this.compareWith) {
      return inputValue;
    } else {
      selection = selection ?? this._selection;
      for (let selectedValue of selection) {
        if (this.compareWith(inputValue, selectedValue)) {
          return selectedValue;
        }
      }
      return inputValue;
    }
  }
};
function getMultipleValuesInSingleSelectionError() {
  return Error("Cannot pass multiple values into SelectionModel with single-value mode.");
}

// node_modules/@angular/cdk/fesm2022/tree.mjs
var CDK_TREE_NODE_OUTLET_NODE = new InjectionToken("CDK_TREE_NODE_OUTLET_NODE");
var CdkTreeNodeOutlet = class _CdkTreeNodeOutlet {
  viewContainer = inject(ViewContainerRef);
  _node = inject(CDK_TREE_NODE_OUTLET_NODE, {
    optional: true
  });
  static \u0275fac = function CdkTreeNodeOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodeOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodeOutlet,
    selectors: [["", "cdkTreeNodeOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeOutlet]"
    }]
  }], null, null);
})();
var CdkTreeNodeOutletContext = class {
  $implicit;
  level;
  index;
  count;
  constructor(data) {
    this.$implicit = data;
  }
};
var CdkTreeNodeDef = class _CdkTreeNodeDef {
  template = inject(TemplateRef);
  when;
  static \u0275fac = function CdkTreeNodeDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodeDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodeDef,
    selectors: [["", "cdkTreeNodeDef", ""]],
    inputs: {
      when: [0, "cdkTreeNodeDefWhen", "when"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeDef, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeDef]",
      inputs: [{
        name: "when",
        alias: "cdkTreeNodeDefWhen"
      }]
    }]
  }], null, null);
})();
function getTreeNoValidDataSourceError() {
  return Error(`A valid data source must be provided.`);
}
function getTreeMultipleDefaultNodeDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
function getTreeMissingMatchingNodeDefError() {
  return Error(`Could not find a matching node definition for the provided node data.`);
}
function getTreeControlMissingError() {
  return Error(`Could not find a tree control, levelAccessor, or childrenAccessor for the tree.`);
}
function getMultipleTreeControlsError() {
  return Error(`More than one of tree control, levelAccessor, or childrenAccessor were provided.`);
}
var CdkTree = class _CdkTree {
  _differs = inject(IterableDiffers);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality);
  _onDestroy = new Subject();
  _dataDiffer;
  _defaultNodeDef = null;
  _dataSubscription;
  _levels = /* @__PURE__ */ new Map();
  _parents = /* @__PURE__ */ new Map();
  _ariaSets = /* @__PURE__ */ new Map();
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
    }
  }
  _dataSource;
  treeControl;
  levelAccessor;
  childrenAccessor;
  trackBy;
  expansionKey;
  _nodeOutlet;
  _nodeDefs;
  viewChange = new BehaviorSubject({
    start: 0,
    end: Number.MAX_VALUE
  });
  _expansionModel;
  _flattenedNodes = new BehaviorSubject([]);
  _nodeType = new BehaviorSubject(null);
  _nodes = new BehaviorSubject(/* @__PURE__ */ new Map());
  _keyManagerNodes = new BehaviorSubject([]);
  _keyManagerFactory = inject(TREE_KEY_MANAGER);
  _keyManager;
  _viewInit = false;
  ngAfterContentInit() {
    this._initializeKeyManager();
  }
  ngAfterContentChecked() {
    this._updateDefaultNodeDefinition();
    this._subscribeToDataChanges();
  }
  ngOnDestroy() {
    this._nodeOutlet.viewContainer.clear();
    this._nodes.complete();
    this._keyManagerNodes.complete();
    this._nodeType.complete();
    this._flattenedNodes.complete();
    this.viewChange.complete();
    this._onDestroy.next();
    this._onDestroy.complete();
    if (this._dataSource && typeof this._dataSource.disconnect === "function") {
      this.dataSource.disconnect(this);
    }
    this._dataSubscription?.unsubscribe();
    this._dataSubscription = void 0;
    this._keyManager?.destroy();
  }
  ngOnInit() {
    this._checkTreeControlUsage();
    this._initializeDataDiffer();
  }
  ngAfterViewInit() {
    this._viewInit = true;
  }
  _updateDefaultNodeDefinition() {
    const defaultNodeDefs = this._nodeDefs.filter((def) => !def.when);
    if (defaultNodeDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeMultipleDefaultNodeDefsError();
    }
    this._defaultNodeDef = defaultNodeDefs[0];
  }
  _setNodeTypeIfUnset(newType) {
    const currentType = this._nodeType.value;
    if (currentType === null) {
      this._nodeType.next(newType);
    } else if ((typeof ngDevMode === "undefined" || ngDevMode) && currentType !== newType) {
      console.warn(`Tree is using conflicting node types which can cause unexpected behavior. Please use tree nodes of the same type (e.g. only flat or only nested). Current node type: "${currentType}", new node type "${newType}".`);
    }
  }
  _switchDataSource(dataSource) {
    if (this._dataSource && typeof this._dataSource.disconnect === "function") {
      this.dataSource.disconnect(this);
    }
    this._dataSubscription?.unsubscribe();
    this._dataSubscription = void 0;
    if (!dataSource) {
      this._nodeOutlet.viewContainer.clear();
    }
    this._dataSource = dataSource;
    if (this._nodeDefs) {
      this._subscribeToDataChanges();
    }
  }
  _getExpansionModel() {
    if (!this.treeControl) {
      this._expansionModel ??= new SelectionModel(true);
      return this._expansionModel;
    }
    return this.treeControl.expansionModel;
  }
  _subscribeToDataChanges() {
    if (this._dataSubscription) {
      return;
    }
    let dataStream;
    if (isDataSource(this._dataSource)) {
      dataStream = this._dataSource.connect(this);
    } else if (isObservable(this._dataSource)) {
      dataStream = this._dataSource;
    } else if (Array.isArray(this._dataSource)) {
      dataStream = of(this._dataSource);
    }
    if (!dataStream) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        throw getTreeNoValidDataSourceError();
      }
      return;
    }
    this._dataSubscription = this._getRenderData(dataStream).pipe(takeUntil(this._onDestroy)).subscribe((renderingData) => {
      this._renderDataChanges(renderingData);
    });
  }
  _getRenderData(dataStream) {
    const expansionModel = this._getExpansionModel();
    return combineLatest([dataStream, this._nodeType, expansionModel.changed.pipe(startWith(null), tap((expansionChanges) => {
      this._emitExpansionChanges(expansionChanges);
    }))]).pipe(switchMap(([data, nodeType]) => {
      if (nodeType === null) {
        return of({
          renderNodes: data,
          flattenedNodes: null,
          nodeType
        });
      }
      return this._computeRenderingData(data, nodeType).pipe(map((convertedData) => __spreadProps(__spreadValues({}, convertedData), {
        nodeType
      })));
    }));
  }
  _renderDataChanges(data) {
    if (data.nodeType === null) {
      this.renderNodeChanges(data.renderNodes);
      return;
    }
    this._updateCachedData(data.flattenedNodes);
    this.renderNodeChanges(data.renderNodes);
    this._updateKeyManagerItems(data.flattenedNodes);
  }
  _emitExpansionChanges(expansionChanges) {
    if (!expansionChanges) {
      return;
    }
    const nodes = this._nodes.value;
    for (const added of expansionChanges.added) {
      const node = nodes.get(added);
      node?._emitExpansionState(true);
    }
    for (const removed of expansionChanges.removed) {
      const node = nodes.get(removed);
      node?._emitExpansionState(false);
    }
  }
  _initializeKeyManager() {
    const items = combineLatest([this._keyManagerNodes, this._nodes]).pipe(map(([keyManagerNodes, renderNodes]) => keyManagerNodes.reduce((items2, data) => {
      const node = renderNodes.get(this._getExpansionKey(data));
      if (node) {
        items2.push(node);
      }
      return items2;
    }, [])));
    const keyManagerOptions = {
      trackBy: (node) => this._getExpansionKey(node.data),
      skipPredicate: (node) => !!node.isDisabled,
      typeAheadDebounceInterval: true,
      horizontalOrientation: this._dir.value
    };
    this._keyManager = this._keyManagerFactory(items, keyManagerOptions);
  }
  _initializeDataDiffer() {
    const trackBy = this.trackBy ?? ((_index, item) => this._getExpansionKey(item));
    this._dataDiffer = this._differs.find([]).create(trackBy);
  }
  _checkTreeControlUsage() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      let numTreeControls = 0;
      if (this.treeControl) {
        numTreeControls++;
      }
      if (this.levelAccessor) {
        numTreeControls++;
      }
      if (this.childrenAccessor) {
        numTreeControls++;
      }
      if (!numTreeControls) {
        throw getTreeControlMissingError();
      } else if (numTreeControls > 1) {
        throw getMultipleTreeControlsError();
      }
    }
  }
  renderNodeChanges(data, dataDiffer = this._dataDiffer, viewContainer = this._nodeOutlet.viewContainer, parentData) {
    const changes = dataDiffer.diff(data);
    if (!changes && !this._viewInit) {
      return;
    }
    changes?.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
      if (item.previousIndex == null) {
        this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
      } else if (currentIndex == null) {
        viewContainer.remove(adjustedPreviousIndex);
      } else {
        const view = viewContainer.get(adjustedPreviousIndex);
        viewContainer.move(view, currentIndex);
      }
    });
    changes?.forEachIdentityChange((record) => {
      const newData = record.item;
      if (record.currentIndex != void 0) {
        const view = viewContainer.get(record.currentIndex);
        view.context.$implicit = newData;
      }
    });
    if (parentData) {
      this._changeDetectorRef.markForCheck();
    } else {
      this._changeDetectorRef.detectChanges();
    }
  }
  _getNodeDef(data, i) {
    if (this._nodeDefs.length === 1) {
      return this._nodeDefs.first;
    }
    const nodeDef = this._nodeDefs.find((def) => def.when && def.when(i, data)) || this._defaultNodeDef;
    if (!nodeDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeMissingMatchingNodeDefError();
    }
    return nodeDef;
  }
  insertNode(nodeData, index, viewContainer, parentData) {
    const levelAccessor = this._getLevelAccessor();
    const node = this._getNodeDef(nodeData, index);
    const key = this._getExpansionKey(nodeData);
    const context = new CdkTreeNodeOutletContext(nodeData);
    context.index = index;
    parentData ??= this._parents.get(key) ?? void 0;
    if (levelAccessor) {
      context.level = levelAccessor(nodeData);
    } else if (parentData !== void 0 && this._levels.has(this._getExpansionKey(parentData))) {
      context.level = this._levels.get(this._getExpansionKey(parentData)) + 1;
    } else {
      context.level = 0;
    }
    this._levels.set(key, context.level);
    const container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
    container.createEmbeddedView(node.template, context, index);
    if (CdkTreeNode.mostRecentTreeNode) {
      CdkTreeNode.mostRecentTreeNode.data = nodeData;
    }
  }
  isExpanded(dataNode) {
    return !!(this.treeControl?.isExpanded(dataNode) || this._expansionModel?.isSelected(this._getExpansionKey(dataNode)));
  }
  toggle(dataNode) {
    if (this.treeControl) {
      this.treeControl.toggle(dataNode);
    } else if (this._expansionModel) {
      this._expansionModel.toggle(this._getExpansionKey(dataNode));
    }
  }
  expand(dataNode) {
    if (this.treeControl) {
      this.treeControl.expand(dataNode);
    } else if (this._expansionModel) {
      this._expansionModel.select(this._getExpansionKey(dataNode));
    }
  }
  collapse(dataNode) {
    if (this.treeControl) {
      this.treeControl.collapse(dataNode);
    } else if (this._expansionModel) {
      this._expansionModel.deselect(this._getExpansionKey(dataNode));
    }
  }
  toggleDescendants(dataNode) {
    if (this.treeControl) {
      this.treeControl.toggleDescendants(dataNode);
    } else if (this._expansionModel) {
      if (this.isExpanded(dataNode)) {
        this.collapseDescendants(dataNode);
      } else {
        this.expandDescendants(dataNode);
      }
    }
  }
  expandDescendants(dataNode) {
    if (this.treeControl) {
      this.treeControl.expandDescendants(dataNode);
    } else if (this._expansionModel) {
      const expansionModel = this._expansionModel;
      expansionModel.select(this._getExpansionKey(dataNode));
      this._getDescendants(dataNode).pipe(take(1), takeUntil(this._onDestroy)).subscribe((children) => {
        expansionModel.select(...children.map((child) => this._getExpansionKey(child)));
      });
    }
  }
  collapseDescendants(dataNode) {
    if (this.treeControl) {
      this.treeControl.collapseDescendants(dataNode);
    } else if (this._expansionModel) {
      const expansionModel = this._expansionModel;
      expansionModel.deselect(this._getExpansionKey(dataNode));
      this._getDescendants(dataNode).pipe(take(1), takeUntil(this._onDestroy)).subscribe((children) => {
        expansionModel.deselect(...children.map((child) => this._getExpansionKey(child)));
      });
    }
  }
  expandAll() {
    if (this.treeControl) {
      this.treeControl.expandAll();
    } else if (this._expansionModel) {
      this._forEachExpansionKey((keys) => this._expansionModel?.select(...keys));
    }
  }
  collapseAll() {
    if (this.treeControl) {
      this.treeControl.collapseAll();
    } else if (this._expansionModel) {
      this._forEachExpansionKey((keys) => this._expansionModel?.deselect(...keys));
    }
  }
  _getLevelAccessor() {
    return this.treeControl?.getLevel?.bind(this.treeControl) ?? this.levelAccessor;
  }
  _getChildrenAccessor() {
    return this.treeControl?.getChildren?.bind(this.treeControl) ?? this.childrenAccessor;
  }
  _getDirectChildren(dataNode) {
    const levelAccessor = this._getLevelAccessor();
    const expansionModel = this._expansionModel ?? this.treeControl?.expansionModel;
    if (!expansionModel) {
      return of([]);
    }
    const key = this._getExpansionKey(dataNode);
    const isExpanded = expansionModel.changed.pipe(switchMap((changes) => {
      if (changes.added.includes(key)) {
        return of(true);
      } else if (changes.removed.includes(key)) {
        return of(false);
      }
      return EMPTY;
    }), startWith(this.isExpanded(dataNode)));
    if (levelAccessor) {
      return combineLatest([isExpanded, this._flattenedNodes]).pipe(map(([expanded, flattenedNodes]) => {
        if (!expanded) {
          return [];
        }
        return this._findChildrenByLevel(levelAccessor, flattenedNodes, dataNode, 1);
      }));
    }
    const childrenAccessor = this._getChildrenAccessor();
    if (childrenAccessor) {
      return coerceObservable(childrenAccessor(dataNode) ?? []);
    }
    throw getTreeControlMissingError();
  }
  _findChildrenByLevel(levelAccessor, flattenedNodes, dataNode, levelDelta) {
    const key = this._getExpansionKey(dataNode);
    const startIndex = flattenedNodes.findIndex((node) => this._getExpansionKey(node) === key);
    const dataNodeLevel = levelAccessor(dataNode);
    const expectedLevel = dataNodeLevel + levelDelta;
    const results = [];
    for (let i = startIndex + 1; i < flattenedNodes.length; i++) {
      const currentLevel = levelAccessor(flattenedNodes[i]);
      if (currentLevel <= dataNodeLevel) {
        break;
      }
      if (currentLevel <= expectedLevel) {
        results.push(flattenedNodes[i]);
      }
    }
    return results;
  }
  _registerNode(node) {
    this._nodes.value.set(this._getExpansionKey(node.data), node);
    this._nodes.next(this._nodes.value);
  }
  _unregisterNode(node) {
    this._nodes.value.delete(this._getExpansionKey(node.data));
    this._nodes.next(this._nodes.value);
  }
  _getLevel(node) {
    return this._levels.get(this._getExpansionKey(node));
  }
  _getSetSize(dataNode) {
    const set = this._getAriaSet(dataNode);
    return set.length;
  }
  _getPositionInSet(dataNode) {
    const set = this._getAriaSet(dataNode);
    const key = this._getExpansionKey(dataNode);
    return set.findIndex((node) => this._getExpansionKey(node) === key) + 1;
  }
  _getNodeParent(node) {
    const parent = this._parents.get(this._getExpansionKey(node.data));
    return parent && this._nodes.value.get(this._getExpansionKey(parent));
  }
  _getNodeChildren(node) {
    return this._getDirectChildren(node.data).pipe(map((children) => children.reduce((nodes, child) => {
      const value = this._nodes.value.get(this._getExpansionKey(child));
      if (value) {
        nodes.push(value);
      }
      return nodes;
    }, [])));
  }
  _sendKeydownToKeyManager(event) {
    if (event.target === this._elementRef.nativeElement) {
      this._keyManager.onKeydown(event);
    } else {
      const nodes = this._nodes.getValue();
      for (const [, node] of nodes) {
        if (event.target === node._elementRef.nativeElement) {
          this._keyManager.onKeydown(event);
          break;
        }
      }
    }
  }
  _getDescendants(dataNode) {
    if (this.treeControl) {
      return of(this.treeControl.getDescendants(dataNode));
    }
    if (this.levelAccessor) {
      const results = this._findChildrenByLevel(this.levelAccessor, this._flattenedNodes.value, dataNode, Infinity);
      return of(results);
    }
    if (this.childrenAccessor) {
      return this._getAllChildrenRecursively(dataNode).pipe(reduce((allChildren, nextChildren) => {
        allChildren.push(...nextChildren);
        return allChildren;
      }, []));
    }
    throw getTreeControlMissingError();
  }
  _getAllChildrenRecursively(dataNode) {
    if (!this.childrenAccessor) {
      return of([]);
    }
    return coerceObservable(this.childrenAccessor(dataNode)).pipe(take(1), switchMap((children) => {
      for (const child of children) {
        this._parents.set(this._getExpansionKey(child), dataNode);
      }
      return of(...children).pipe(concatMap((child) => concat(of([child]), this._getAllChildrenRecursively(child))));
    }));
  }
  _getExpansionKey(dataNode) {
    return this.expansionKey?.(dataNode) ?? dataNode;
  }
  _getAriaSet(node) {
    const key = this._getExpansionKey(node);
    const parent = this._parents.get(key);
    const parentKey = parent ? this._getExpansionKey(parent) : null;
    const set = this._ariaSets.get(parentKey);
    return set ?? [node];
  }
  _findParentForNode(node, index, cachedNodes) {
    if (!cachedNodes.length) {
      return null;
    }
    const currentLevel = this._levels.get(this._getExpansionKey(node)) ?? 0;
    for (let parentIndex = index - 1; parentIndex >= 0; parentIndex--) {
      const parentNode = cachedNodes[parentIndex];
      const parentLevel = this._levels.get(this._getExpansionKey(parentNode)) ?? 0;
      if (parentLevel < currentLevel) {
        return parentNode;
      }
    }
    return null;
  }
  _flattenNestedNodesWithExpansion(nodes, level = 0) {
    const childrenAccessor = this._getChildrenAccessor();
    if (!childrenAccessor) {
      return of([...nodes]);
    }
    return of(...nodes).pipe(concatMap((node) => {
      const parentKey = this._getExpansionKey(node);
      if (!this._parents.has(parentKey)) {
        this._parents.set(parentKey, null);
      }
      this._levels.set(parentKey, level);
      const children = coerceObservable(childrenAccessor(node));
      return concat(of([node]), children.pipe(take(1), tap((childNodes) => {
        this._ariaSets.set(parentKey, [...childNodes ?? []]);
        for (const child of childNodes ?? []) {
          const childKey = this._getExpansionKey(child);
          this._parents.set(childKey, node);
          this._levels.set(childKey, level + 1);
        }
      }), switchMap((childNodes) => {
        if (!childNodes) {
          return of([]);
        }
        return this._flattenNestedNodesWithExpansion(childNodes, level + 1).pipe(map((nestedNodes) => this.isExpanded(node) ? nestedNodes : []));
      })));
    }), reduce((results, children) => {
      results.push(...children);
      return results;
    }, []));
  }
  _computeRenderingData(nodes, nodeType) {
    if (this.childrenAccessor && nodeType === "flat") {
      this._clearPreviousCache();
      this._ariaSets.set(null, [...nodes]);
      return this._flattenNestedNodesWithExpansion(nodes).pipe(map((flattenedNodes) => ({
        renderNodes: flattenedNodes,
        flattenedNodes
      })));
    } else if (this.levelAccessor && nodeType === "nested") {
      const levelAccessor = this.levelAccessor;
      return of(nodes.filter((node) => levelAccessor(node) === 0)).pipe(map((rootNodes) => ({
        renderNodes: rootNodes,
        flattenedNodes: nodes
      })), tap(({
        flattenedNodes
      }) => {
        this._calculateParents(flattenedNodes);
      }));
    } else if (nodeType === "flat") {
      return of({
        renderNodes: nodes,
        flattenedNodes: nodes
      }).pipe(tap(({
        flattenedNodes
      }) => {
        this._calculateParents(flattenedNodes);
      }));
    } else {
      this._clearPreviousCache();
      this._ariaSets.set(null, [...nodes]);
      return this._flattenNestedNodesWithExpansion(nodes).pipe(map((flattenedNodes) => ({
        renderNodes: nodes,
        flattenedNodes
      })));
    }
  }
  _updateCachedData(flattenedNodes) {
    this._flattenedNodes.next(flattenedNodes);
  }
  _updateKeyManagerItems(flattenedNodes) {
    this._keyManagerNodes.next(flattenedNodes);
  }
  _calculateParents(flattenedNodes) {
    const levelAccessor = this._getLevelAccessor();
    if (!levelAccessor) {
      return;
    }
    this._clearPreviousCache();
    for (let index = 0; index < flattenedNodes.length; index++) {
      const dataNode = flattenedNodes[index];
      const key = this._getExpansionKey(dataNode);
      this._levels.set(key, levelAccessor(dataNode));
      const parent = this._findParentForNode(dataNode, index, flattenedNodes);
      this._parents.set(key, parent);
      const parentKey = parent ? this._getExpansionKey(parent) : null;
      const group = this._ariaSets.get(parentKey) ?? [];
      group.splice(index, 0, dataNode);
      this._ariaSets.set(parentKey, group);
    }
  }
  _forEachExpansionKey(callback) {
    const toToggle = [];
    const observables = [];
    this._nodes.value.forEach((node) => {
      toToggle.push(this._getExpansionKey(node.data));
      observables.push(this._getDescendants(node.data));
    });
    if (observables.length > 0) {
      combineLatest(observables).pipe(take(1), takeUntil(this._onDestroy)).subscribe((results) => {
        results.forEach((inner) => inner.forEach((r) => toToggle.push(this._getExpansionKey(r))));
        callback(toToggle);
      });
    } else {
      callback(toToggle);
    }
  }
  _clearPreviousCache() {
    this._parents.clear();
    this._levels.clear();
    this._ariaSets.clear();
  }
  static \u0275fac = function CdkTree_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTree)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkTree,
    selectors: [["cdk-tree"]],
    contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkTreeNodeDef, 5);
      }
      if (rf & 2) {
        let _t = void 0;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nodeDefs = _t);
      }
    },
    viewQuery: function CdkTree_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkTreeNodeOutlet, 7);
      }
      if (rf & 2) {
        let _t = void 0;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nodeOutlet = _t.first);
      }
    },
    hostAttrs: ["role", "tree", 1, "cdk-tree"],
    hostBindings: function CdkTree_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function CdkTree_keydown_HostBindingHandler($event) {
          return ctx._sendKeydownToKeyManager($event);
        });
      }
    },
    inputs: {
      dataSource: "dataSource",
      treeControl: "treeControl",
      levelAccessor: "levelAccessor",
      childrenAccessor: "childrenAccessor",
      trackBy: "trackBy",
      expansionKey: "expansionKey"
    },
    exportAs: ["cdkTree"],
    decls: 1,
    vars: 0,
    consts: [["cdkTreeNodeOutlet", ""]],
    template: function CdkTree_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkTreeNodeOutlet],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTree, [{
    type: Component,
    args: [{
      selector: "cdk-tree",
      exportAs: "cdkTree",
      template: `<ng-container cdkTreeNodeOutlet></ng-container>`,
      host: {
        "class": "cdk-tree",
        "role": "tree",
        "(keydown)": "_sendKeydownToKeyManager($event)"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Eager,
      imports: [CdkTreeNodeOutlet]
    }]
  }], null, {
    dataSource: [{
      type: Input
    }],
    treeControl: [{
      type: Input
    }],
    levelAccessor: [{
      type: Input
    }],
    childrenAccessor: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    expansionKey: [{
      type: Input
    }],
    _nodeOutlet: [{
      type: ViewChild,
      args: [CdkTreeNodeOutlet, {
        static: true
      }]
    }],
    _nodeDefs: [{
      type: ContentChildren,
      args: [CdkTreeNodeDef, {
        descendants: true
      }]
    }]
  });
})();
var CdkTreeNode = class _CdkTreeNode {
  _elementRef = inject(ElementRef);
  _tree = inject(CdkTree);
  _tabindex = -1;
  _type = "flat";
  get role() {
    return "treeitem";
  }
  set role(_role) {
  }
  get isExpandable() {
    return this._isExpandable();
  }
  set isExpandable(isExpandable) {
    this._inputIsExpandable = isExpandable;
    if (this.data && !this._isExpandable || !this._inputIsExpandable) {
      return;
    }
    if (this._inputIsExpanded) {
      this.expand();
    } else if (this._inputIsExpanded === false) {
      this.collapse();
    }
  }
  get isExpanded() {
    return this._tree.isExpanded(this._data);
  }
  set isExpanded(isExpanded) {
    this._inputIsExpanded = isExpanded;
    if (isExpanded) {
      this.expand();
    } else {
      this.collapse();
    }
  }
  isDisabled = false;
  typeaheadLabel = null;
  getLabel() {
    return this.typeaheadLabel || this._elementRef.nativeElement.textContent?.trim() || "";
  }
  activation = new EventEmitter();
  expandedChange = new EventEmitter();
  static mostRecentTreeNode = null;
  _destroyed = new Subject();
  _dataChanges = new Subject();
  _inputIsExpandable = false;
  _inputIsExpanded = void 0;
  _shouldFocus = true;
  _parentNodeAriaLevel;
  get data() {
    return this._data;
  }
  set data(value) {
    if (value !== this._data) {
      this._data = value;
      this._dataChanges.next();
    }
  }
  _data;
  get isLeafNode() {
    if (this._tree.treeControl?.isExpandable !== void 0 && !this._tree.treeControl.isExpandable(this._data)) {
      return true;
    } else if (this._tree.treeControl?.isExpandable === void 0 && this._tree.treeControl?.getDescendants(this._data).length === 0) {
      return true;
    }
    return false;
  }
  get level() {
    return this._tree._getLevel(this._data) ?? this._parentNodeAriaLevel;
  }
  _isExpandable() {
    if (this._tree.treeControl) {
      if (this.isLeafNode) {
        return false;
      }
      return true;
    }
    return this._inputIsExpandable;
  }
  _getAriaExpanded() {
    if (!this._isExpandable()) {
      return null;
    }
    return String(this.isExpanded);
  }
  _getSetSize() {
    return this._tree._getSetSize(this._data);
  }
  _getPositionInSet() {
    return this._tree._getPositionInSet(this._data);
  }
  _changeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    _CdkTreeNode.mostRecentTreeNode = this;
  }
  ngOnInit() {
    this._parentNodeAriaLevel = getParentNodeAriaLevel(this._elementRef.nativeElement);
    this._tree._getExpansionModel().changed.pipe(map(() => this.isExpanded), distinctUntilChanged(), takeUntil(this._destroyed)).pipe(takeUntil(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
    this._tree._setNodeTypeIfUnset(this._type);
    this._tree._registerNode(this);
  }
  ngOnDestroy() {
    if (_CdkTreeNode.mostRecentTreeNode === this) {
      _CdkTreeNode.mostRecentTreeNode = null;
    }
    this._dataChanges.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  getParent() {
    return this._tree._getNodeParent(this) ?? null;
  }
  getChildren() {
    return this._tree._getNodeChildren(this);
  }
  focus() {
    this._tabindex = 0;
    if (this._shouldFocus) {
      this._elementRef.nativeElement.focus();
    }
    this._changeDetectorRef.markForCheck();
  }
  unfocus() {
    this._tabindex = -1;
    this._changeDetectorRef.markForCheck();
  }
  activate() {
    if (this.isDisabled) {
      return;
    }
    this.activation.next(this._data);
  }
  collapse() {
    if (this.isExpandable) {
      this._tree.collapse(this._data);
    }
  }
  expand() {
    if (this.isExpandable) {
      this._tree.expand(this._data);
    }
  }
  makeFocusable() {
    this._tabindex = 0;
    this._changeDetectorRef.markForCheck();
  }
  _focusItem() {
    if (this.isDisabled) {
      return;
    }
    this._tree._keyManager.focusItem(this);
  }
  _setActiveItem() {
    if (this.isDisabled) {
      return;
    }
    this._shouldFocus = false;
    this._tree._keyManager.focusItem(this);
    this._shouldFocus = true;
  }
  _emitExpansionState(expanded) {
    this.expandedChange.emit(expanded);
  }
  static \u0275fac = function CdkTreeNode_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNode)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNode,
    selectors: [["cdk-tree-node"]],
    hostAttrs: ["role", "treeitem", 1, "cdk-tree-node"],
    hostVars: 5,
    hostBindings: function CdkTreeNode_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkTreeNode_click_HostBindingHandler() {
          return ctx._setActiveItem();
        })("focus", function CdkTreeNode_focus_HostBindingHandler() {
          return ctx._focusItem();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("tabIndex", ctx._tabindex);
        \u0275\u0275attribute("aria-expanded", ctx._getAriaExpanded())("aria-level", ctx.level + 1)("aria-posinset", ctx._getPositionInSet())("aria-setsize", ctx._getSetSize());
      }
    },
    inputs: {
      role: "role",
      isExpandable: [2, "isExpandable", "isExpandable", booleanAttribute],
      isExpanded: "isExpanded",
      isDisabled: [2, "isDisabled", "isDisabled", booleanAttribute],
      typeaheadLabel: [0, "cdkTreeNodeTypeaheadLabel", "typeaheadLabel"]
    },
    outputs: {
      activation: "activation",
      expandedChange: "expandedChange"
    },
    exportAs: ["cdkTreeNode"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNode, [{
    type: Directive,
    args: [{
      selector: "cdk-tree-node",
      exportAs: "cdkTreeNode",
      host: {
        "class": "cdk-tree-node",
        "[attr.aria-expanded]": "_getAriaExpanded()",
        "[attr.aria-level]": "level + 1",
        "[attr.aria-posinset]": "_getPositionInSet()",
        "[attr.aria-setsize]": "_getSetSize()",
        "[tabindex]": "_tabindex",
        "role": "treeitem",
        "(click)": "_setActiveItem()",
        "(focus)": "_focusItem()"
      }
    }]
  }], () => [], {
    role: [{
      type: Input
    }],
    isExpandable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isExpanded: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    typeaheadLabel: [{
      type: Input,
      args: ["cdkTreeNodeTypeaheadLabel"]
    }],
    activation: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }]
  });
})();
function getParentNodeAriaLevel(nodeElement) {
  let parent = nodeElement.parentElement;
  while (parent && !isNodeElement(parent)) {
    parent = parent.parentElement;
  }
  if (!parent) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw Error("Incorrect tree structure containing detached node.");
    } else {
      return -1;
    }
  } else if (parent.classList.contains("cdk-nested-tree-node")) {
    return numberAttribute(parent.getAttribute("aria-level"));
  } else {
    return 0;
  }
}
function isNodeElement(element) {
  const classList = element.classList;
  return !!(classList?.contains("cdk-nested-tree-node") || classList?.contains("cdk-tree"));
}
var CdkNestedTreeNode = class _CdkNestedTreeNode extends CdkTreeNode {
  _type = "nested";
  _differs = inject(IterableDiffers);
  _dataDiffer;
  _children;
  nodeOutlet;
  ngAfterContentInit() {
    this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);
    this._tree._getDirectChildren(this.data).pipe(takeUntil(this._destroyed)).subscribe((result) => this.updateChildrenNodes(result));
    this.nodeOutlet.changes.pipe(takeUntil(this._destroyed)).subscribe(() => this.updateChildrenNodes());
  }
  ngOnDestroy() {
    this._clear();
    super.ngOnDestroy();
  }
  updateChildrenNodes(children) {
    const outlet = this._getNodeOutlet();
    if (children) {
      this._children = children;
    }
    if (outlet && this._children) {
      const viewContainer = outlet.viewContainer;
      this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
    } else {
      this._dataDiffer.diff([]);
    }
  }
  _clear() {
    const outlet = this._getNodeOutlet();
    if (outlet) {
      outlet.viewContainer.clear();
      this._dataDiffer.diff([]);
    }
  }
  _getNodeOutlet() {
    const outlets = this.nodeOutlet;
    return outlets && outlets.find((outlet) => !outlet._node || outlet._node === this);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CdkNestedTreeNode_BaseFactory = void 0;
    return function CdkNestedTreeNode_Factory(__ngFactoryType__) {
      return (\u0275CdkNestedTreeNode_BaseFactory || (\u0275CdkNestedTreeNode_BaseFactory = \u0275\u0275getInheritedFactory(_CdkNestedTreeNode)))(__ngFactoryType__ || _CdkNestedTreeNode);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkNestedTreeNode,
    selectors: [["cdk-nested-tree-node"]],
    contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkTreeNodeOutlet, 5);
      }
      if (rf & 2) {
        let _t = void 0;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nodeOutlet = _t);
      }
    },
    hostAttrs: [1, "cdk-nested-tree-node"],
    exportAs: ["cdkNestedTreeNode"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkTreeNode,
      useExisting: _CdkNestedTreeNode
    }, {
      provide: CDK_TREE_NODE_OUTLET_NODE,
      useExisting: _CdkNestedTreeNode
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkNestedTreeNode, [{
    type: Directive,
    args: [{
      selector: "cdk-nested-tree-node",
      exportAs: "cdkNestedTreeNode",
      providers: [{
        provide: CdkTreeNode,
        useExisting: CdkNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: CdkNestedTreeNode
      }],
      host: {
        "class": "cdk-nested-tree-node"
      }
    }]
  }], null, {
    nodeOutlet: [{
      type: ContentChildren,
      args: [CdkTreeNodeOutlet, {
        descendants: true
      }]
    }]
  });
})();
var cssUnitPattern = /([A-Za-z%]+)$/;
var CdkTreeNodePadding = class _CdkTreeNodePadding {
  _treeNode = inject(CdkTreeNode);
  _tree = inject(CdkTree);
  _element = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _currentPadding = null;
  _destroyed = new Subject();
  indentUnits = "px";
  get level() {
    return this._level;
  }
  set level(value) {
    this._setLevelInput(value);
  }
  _level;
  get indent() {
    return this._indent;
  }
  set indent(indent) {
    this._setIndentInput(indent);
  }
  _indent = 40;
  constructor() {
    this._setPadding();
    this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe(() => this._setPadding(true));
    this._treeNode._dataChanges.subscribe(() => this._setPadding());
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  _paddingIndent() {
    const nodeLevel = (this._treeNode.data && this._tree._getLevel(this._treeNode.data)) ?? null;
    const level = this._level == null ? nodeLevel : this._level;
    return typeof level === "number" ? `${level * this._indent}${this.indentUnits}` : null;
  }
  _setPadding(forceChange = false) {
    const padding = this._paddingIndent();
    if (padding !== this._currentPadding || forceChange) {
      const element = this._element.nativeElement;
      const paddingProp = this._dir && this._dir.value === "rtl" ? "paddingRight" : "paddingLeft";
      const resetProp = paddingProp === "paddingLeft" ? "paddingRight" : "paddingLeft";
      element.style[paddingProp] = padding || "";
      element.style[resetProp] = "";
      this._currentPadding = padding;
    }
  }
  _setLevelInput(value) {
    this._level = isNaN(value) ? null : value;
    this._setPadding();
  }
  _setIndentInput(indent) {
    let value = indent;
    let units = "px";
    if (typeof indent === "string") {
      const parts = indent.split(cssUnitPattern);
      value = parts[0];
      units = parts[1] || units;
    }
    this.indentUnits = units;
    this._indent = numberAttribute(value);
    this._setPadding();
  }
  static \u0275fac = function CdkTreeNodePadding_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodePadding)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodePadding,
    selectors: [["", "cdkTreeNodePadding", ""]],
    inputs: {
      level: [2, "cdkTreeNodePadding", "level", numberAttribute],
      indent: [0, "cdkTreeNodePaddingIndent", "indent"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodePadding, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodePadding]"
    }]
  }], () => [], {
    level: [{
      type: Input,
      args: [{
        alias: "cdkTreeNodePadding",
        transform: numberAttribute
      }]
    }],
    indent: [{
      type: Input,
      args: ["cdkTreeNodePaddingIndent"]
    }]
  });
})();
var CdkTreeNodeToggle = class _CdkTreeNodeToggle {
  _tree = inject(CdkTree);
  _treeNode = inject(CdkTreeNode);
  recursive = false;
  _toggle(event) {
    event.stopPropagation();
    this.recursive ? this._tree.toggleDescendants(this._treeNode.data) : this._tree.toggle(this._treeNode.data);
    this._tree._keyManager.focusItem(this._treeNode);
  }
  static \u0275fac = function CdkTreeNodeToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodeToggle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodeToggle,
    selectors: [["", "cdkTreeNodeToggle", ""]],
    hostAttrs: ["tabindex", "-1"],
    hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) {
          return ctx._toggle($event);
        })("keydown.Enter", function CdkTreeNodeToggle_keydown_Enter_HostBindingHandler($event) {
          ctx._toggle($event);
          return $event.preventDefault();
        })("keydown.Space", function CdkTreeNodeToggle_keydown_Space_HostBindingHandler($event) {
          ctx._toggle($event);
          return $event.preventDefault();
        });
      }
    },
    inputs: {
      recursive: [2, "cdkTreeNodeToggleRecursive", "recursive", booleanAttribute]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeToggle, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeToggle]",
      host: {
        "(click)": "_toggle($event)",
        "(keydown.Enter)": "_toggle($event); $event.preventDefault();",
        "(keydown.Space)": "_toggle($event); $event.preventDefault();",
        "tabindex": "-1"
      }
    }]
  }], null, {
    recursive: [{
      type: Input,
      args: [{
        alias: "cdkTreeNodeToggleRecursive",
        transform: booleanAttribute
      }]
    }]
  });
})();
var EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];
var CdkTreeModule = class _CdkTreeModule {
  static \u0275fac = function CdkTreeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkTreeModule,
    imports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet],
    exports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeModule, [{
    type: NgModule,
    args: [{
      imports: EXPORTED_DECLARATIONS,
      exports: EXPORTED_DECLARATIONS
    }]
  }], null, null);
})();

// src/app/ui/item-sidebar.component.ts
var _c0 = ["search_input"];
var _c1 = (a0) => ({ name: a0 });
var _c2 = (a0) => ({ count: a0 });
var _c3 = (a0, a1, a2) => ["/", a0, a1, a2];
var _c4 = (a0, a1) => ["/", a0, a1];
function ItemSidebarComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 7);
  }
}
function ItemSidebarComponent_Conditional_10_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r4);
  }
}
function ItemSidebarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 13)(2, "icon", 14);
    \u0275\u0275text(3, "filter_list");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "app-form-field", 15)(5, "app-select", 16);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function ItemSidebarComponent_Conditional_10_Template_app_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selected_filters, $event) || (ctx_r2.selected_filters = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ItemSidebarComponent_Conditional_10_Template_app_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateSearch(ctx_r2.search));
    });
    \u0275\u0275repeaterCreate(7, ItemSidebarComponent_Conditional_10_For_8_Template, 2, 2, "app-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("border-info", ctx_r2.selected_filters.length)("text-info", ctx_r2.selected_filters.length);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selected_filters);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 6, "COMMON.FILTER"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.filter_options());
  }
}
function ItemSidebarComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 18);
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function ItemSidebarComponent_Conditional_11_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setIncludeDeleted($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r2.include_deleted());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "USERS.INCLUDE_DELETED"), " ");
  }
}
function ItemSidebarComponent_Conditional_16_Conditional_0_cdk_tree_node_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ItemSidebarComponent_Conditional_16_Conditional_0_cdk_tree_node_2_Conditional_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const node_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.toggleGroup(node_r7.group.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "icon", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("aria-label", (ctx_r2.isGroupExpanded(node_r7.group.id) ? "Collapse group " : "Expand group ") + ctx_r2.displayName(node_r7.group));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isGroupExpanded(node_r7.group.id) ? "expand_more" : "chevron_right", " ");
  }
}
function ItemSidebarComponent_Conditional_16_Conditional_0_cdk_tree_node_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 26);
  }
}
function ItemSidebarComponent_Conditional_16_Conditional_0_cdk_tree_node_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.childCount(node_r7.group), " ");
  }
}
function ItemSidebarComponent_Conditional_16_Conditional_0_cdk_tree_node_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", node_r7.group.description, " ");
  }
}
function ItemSidebarComponent_Conditional_16_Conditional_0_cdk_tree_node_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cdk-tree-node", 23);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275conditionalCreate(2, ItemSidebarComponent_Conditional_16_Conditional_0_cdk_tree_node_2_Conditional_2_Template, 3, 2, "button", 25)(3, ItemSidebarComponent_Conditional_16_Conditional_0_cdk_tree_node_2_Conditional_3_Template, 1, 0, "div", 26);
    \u0275\u0275elementStart(4, "a", 27)(5, "div", 28)(6, "p", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ItemSidebarComponent_Conditional_16_Conditional_0_cdk_tree_node_2_Conditional_8_Template, 2, 1, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ItemSidebarComponent_Conditional_16_Conditional_0_cdk_tree_node_2_Conditional_9_Template, 2, 1, "p", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.selected_id() === node_r7.group.id);
    \u0275\u0275property("cdkTreeNodePadding", node_r7.depth)("cdkTreeNodePaddingIndent", 8);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", 0.25 * node_r7.depth + "rem")("opacity", 0.1 * node_r7.depth);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.childCount(node_r7.group) > 0 ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r2.subroute() ? \u0275\u0275pureFunction3(14, _c3, ctx_r2.route(), node_r7.group.id, ctx_r2.subroute()) : \u0275\u0275pureFunction2(18, _c4, ctx_r2.route(), node_r7.group.id));
    \u0275\u0275attribute("aria-current", ctx_r2.selected_id() === node_r7.group.id ? "page" : null);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.displayName(node_r7.group), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.childCount(node_r7.group) > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r7.group.description ? 9 : -1);
  }
}
function ItemSidebarComponent_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "cdk-tree", 20);
    \u0275\u0275template(2, ItemSidebarComponent_Conditional_16_Conditional_0_cdk_tree_node_2_Template, 10, 21, "cdk-tree-node", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r2.group_tree_items())("levelAccessor", ctx_r2.groupLevelAccessor)("trackBy", ctx_r2.trackByGroupNode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "COMMON.END_OF_LIST"), " ");
  }
}
function ItemSidebarComponent_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "COMMON.LIST_EMPTY", \u0275\u0275pureFunction1(4, _c1, ctx_r2.title())), " ");
  }
}
function ItemSidebarComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ItemSidebarComponent_Conditional_16_Conditional_0_Template, 6, 6, "div", 19)(1, ItemSidebarComponent_Conditional_16_Conditional_1_Template, 4, 6, "div", 12);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.group_tree_items().length ? 0 : !ctx_r2.group_hierarchy_loading() ? 1 : -1);
  }
}
function ItemSidebarComponent_Conditional_17_ng_template_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "USERS.DELETED"), " ");
  }
}
function ItemSidebarComponent_Conditional_17_ng_template_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.extra, " ");
  }
}
function ItemSidebarComponent_Conditional_17_ng_template_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 40);
    \u0275\u0275text(1, " new_releases ");
    \u0275\u0275elementEnd();
  }
}
function ItemSidebarComponent_Conditional_17_ng_template_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, " brightness_alert ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().item;
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(1, 2, item_r9.zone_issues === "system" ? "SYSTEMS.MISCONFIGURED" : "ZONES.MISCONFIGURED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, item_r9.zone_issues === "system" ? "SYSTEMS.MISCONFIGURED" : "ZONES.MISCONFIGURED"), " ");
  }
}
function ItemSidebarComponent_Conditional_17_ng_template_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, " error ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(1, 2, "MODULES.ERROR"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "MODULES.ERROR"), " ");
  }
}
function ItemSidebarComponent_Conditional_17_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 28)(3, "p", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ItemSidebarComponent_Conditional_17_ng_template_4_Conditional_5_Template, 3, 3, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 38);
    \u0275\u0275conditionalCreate(7, ItemSidebarComponent_Conditional_17_ng_template_4_Conditional_7_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ItemSidebarComponent_Conditional_17_ng_template_4_Conditional_8_Template, 2, 0, "icon", 40);
    \u0275\u0275conditionalCreate(9, ItemSidebarComponent_Conditional_17_ng_template_4_Conditional_9_Template, 7, 6, "div", 41);
    \u0275\u0275conditionalCreate(10, ItemSidebarComponent_Conditional_17_ng_template_4_Conditional_10_Template, 7, 6, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.item;
    const idx_r10 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-base-200", idx_r10 % 2 === 1);
    \u0275\u0275property("routerLink", ctx_r2.subroute() ? \u0275\u0275pureFunction3(12, _c3, ctx_r2.route(), item_r9.id, ctx_r2.subroute()) : \u0275\u0275pureFunction2(16, _c4, ctx_r2.route(), item_r9.id))("appTooltip", item_r9.update_available && item_r9.commit !== item_r9.update_info.commit ? \u0275\u0275pipeBind1(1, 10, "COMMON.UPDATE_AVAILABLE") : "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r9.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.route() === "users" && item_r9.deleted ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r9.extra ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r9.update_available && item_r9.commit !== item_r9.update_info.commit ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r9.zone_issues ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r9.has_runtime_error ? 10 : -1);
  }
}
function ItemSidebarComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "virtual-scroll", 34);
    \u0275\u0275listener("scrolled", function ItemSidebarComponent_Conditional_17_Template_virtual_scroll_scrolled_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.atBottom($event));
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ItemSidebarComponent_Conditional_17_ng_template_4_Template, 11, 19, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const item_display_r11 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item_size", 72)("items", ctx_r2.items())("item_template", item_display_r11);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.END_OF_LIST"), " ");
  }
}
function ItemSidebarComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, ctx_r2.search ? "COMMON.SEARCH_EMPTY" : "COMMON.LIST_EMPTY", \u0275\u0275pureFunction1(4, _c1, ctx_r2.title())), " ");
  }
}
var ItemSidebarComponent = class _ItemSidebarComponent extends AsyncHandler {
  _router = inject(Router);
  _service = inject(ActiveItemService);
  _route_change = toSignal(this._router.events, {
    initialValue: null
  });
  title = input(
    "Systems",
    ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    )
  );
  route = input(
    "systems",
    ...ngDevMode ? [{ debugName: "route" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filter_options = input(
    [],
    ...ngDevMode ? [{ debugName: "filter_options" }] : (
      /* istanbul ignore next */
      []
    )
  );
  group_hierarchy = signal(
    [],
    ...ngDevMode ? [{ debugName: "group_hierarchy" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether the group tree is loading */
  group_hierarchy_loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "group_hierarchy_loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  expanded_groups = signal(
    {},
    ...ngDevMode ? [{ debugName: "expanded_groups" }] : (
      /* istanbul ignore next */
      []
    )
  );
  include_deleted = this._service.include_deleted;
  setIncludeDeleted = (include) => this._service.setIncludeDeleted(include);
  last_total = 0;
  last_check = 0;
  search = "";
  selected_filters = [];
  /** List of items for the active route */
  items = computed(
    () => this._processItems(this._service.list()),
    ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether list of items for the active route are loading */
  loading = this._service.loading_list;
  /** Total number of items in the last request */
  total = this._service.count;
  _input = viewChild(
    "search_input",
    ...ngDevMode ? [{ debugName: "_input" }] : (
      /* istanbul ignore next */
      []
    )
  );
  subroute = signal(
    "",
    ...ngDevMode ? [{ debugName: "subroute" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selected_id = computed(
    () => {
      this._route_change();
      return this._router.url.split("/")[2] || "";
    },
    ...ngDevMode ? [{ debugName: "selected_id" }] : (
      /* istanbul ignore next */
      []
    )
  );
  group_children_lookup = computed(
    () => {
      const lookup = {};
      for (const group of this.group_hierarchy()) {
        if (!group.parent_id)
          continue;
        lookup[group.parent_id] ||= [];
        lookup[group.parent_id].push(group);
      }
      return lookup;
    },
    ...ngDevMode ? [{ debugName: "group_children_lookup" }] : (
      /* istanbul ignore next */
      []
    )
  );
  group_child_count_lookup = computed(
    () => {
      const lookup = {};
      for (const group of this.group_hierarchy()) {
        if (!group.parent_id)
          continue;
        lookup[group.parent_id] = (lookup[group.parent_id] || 0) + 1;
      }
      return lookup;
    },
    ...ngDevMode ? [{ debugName: "group_child_count_lookup" }] : (
      /* istanbul ignore next */
      []
    )
  );
  group_tree_items = computed(
    () => {
      const groups = this.group_hierarchy();
      const children = this.group_children_lookup();
      const roots = groups.filter(({ parent_id }) => !parent_id);
      const items = [];
      const addGroup = (group, depth) => {
        items.push({ group, depth });
        if (!this.isGroupExpanded(group.id))
          return;
        for (const child of children[group.id] || [])
          addGroup(child, depth + 1);
      };
      for (const group of roots)
        addGroup(group, 0);
      return items;
    },
    ...ngDevMode ? [{ debugName: "group_tree_items" }] : (
      /* istanbul ignore next */
      []
    )
  );
  groupLevelAccessor = (node) => node.depth;
  trackByGroupNode = (_, node) => node.group.id;
  constructor() {
    super();
    effect(() => {
      this._route_change();
      this.subroute.set(this._router.url.split("/")[3] || "");
    });
    effect(() => {
      this._service.items_changed();
      if (this.route() === "groups")
        void this.loadGroupHierarchy();
    });
    effect(() => {
      const selected_id = this.selected_id();
      this.group_hierarchy();
      if (this.route() !== "groups" || !selected_id)
        return;
      this.expandGroupPath(selected_id);
    });
  }
  ngAfterViewInit() {
    this.focusInput();
    this.atBottom([0, 0]);
  }
  focusInput() {
    this._input()?.nativeElement.focus();
  }
  updateSearch(str) {
    let search_str = "";
    if (this.selected_filters.length) {
      search_str += `tags:(${this.selected_filters.map((_) => `+${_.trim()}`).join(" AND ").trim()})`;
    }
    if (str) {
      if (search_str.length > 0) {
        search_str += ` AND (+${str.trim()})`;
      } else
        search_str += str.trim();
    }
    this._service.setSearch(search_str);
  }
  displayName(item) {
    return item.display_name || item.name || "<Unnamed>";
  }
  childCount(group) {
    return this.group_child_count_lookup()[group.id] || group.children_count || 0;
  }
  isGroupExpanded(group_id) {
    return !!this.expanded_groups()[group_id];
  }
  toggleGroup(group_id) {
    this.expanded_groups.update((state) => __spreadProps(__spreadValues({}, state), {
      [group_id]: !state[group_id]
    }));
  }
  /** Whether to update the list of items */
  get is_stale() {
    const now = Date.now();
    const last_check = this.last_check;
    return this.last_total !== this._service.list_items().length || now - last_check > 60 * 1e3;
  }
  async atBottom([_start, end]) {
    this.timeout("load_more", async () => {
      const loading = this.loading();
      const items = this.items();
      if (loading || !this.is_stale)
        return;
      if (end >= items.length) {
        this.last_total = items.length;
        this.last_check = Date.now();
        const serviceTotal = this.total();
        if (this.last_total < serviceTotal) {
          this._service.moreItems();
        }
      }
    }, 150);
  }
  _processItems(list) {
    for (const item of list) {
      if (item instanceof Es) {
        const name = item.system?.display_name || item.system?.name;
        const detail = item.role === Nt.Service ? item.uri : item.role === Nt.Logic ? name ? `${name} | ${item.control_system_id} ` : item.control_system_id : item.ip;
        item.display_name = item.custom_name || item.name || "<Unnamed>";
        item.extra = detail;
      } else if (item instanceof hr) {
        item.display_name = item.name || "<Unnamed>";
        item.extra = item.repo_type;
      } else if (item instanceof Us) {
        item.display_name = item.display_name || item.name || "<Unnamed>";
        item.zone_issues = (item.email || item.map_id) && item.zones.length < 3 ? "system" : "";
      } else if (item instanceof en) {
        item.display_name = item.display_name || item.name || "<Unnamed>";
        item.zone_issues = (item.tags.includes("level") || item.tags.includes("building") || item.tags.includes("region")) && !item.parent_id ? "zone" : "";
      } else {
        item.display_name = item.display_name || item.custom_name || item.name || "<Unnamed>";
        item.extra = item.id;
      }
    }
    return list;
  }
  async loadGroupHierarchy() {
    this.group_hierarchy_loading.set(true);
    const response = await Eu({
      limit: 2500,
      fields: [
        "id",
        "name",
        "description",
        "authority_id",
        "parent_id",
        "children_count"
      ].join(",")
    }).catch(reportLoadError({ data: [] }));
    const groups = response.data.sort((a, b) => this.displayName(a).localeCompare(this.displayName(b)));
    this.group_hierarchy.set(groups);
    this.group_hierarchy_loading.set(false);
  }
  expandGroupPath(group_id) {
    const path = [];
    const visited = /* @__PURE__ */ new Set([group_id]);
    let group = this.findGroup(group_id);
    while (group?.parent_id && !visited.has(group.parent_id)) {
      visited.add(group.parent_id);
      path.unshift(group.parent_id);
      group = this.findGroup(group.parent_id);
    }
    if (!path.length)
      return;
    const state = this.expanded_groups();
    let changed = false;
    const next_state = __spreadValues({}, state);
    for (const id of path) {
      if (next_state[id])
        continue;
      next_state[id] = true;
      changed = true;
    }
    if (changed)
      this.expanded_groups.set(next_state);
  }
  findGroup(group_id) {
    return this.group_hierarchy().find(({ id }) => id === group_id);
  }
  static \u0275fac = function ItemSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItemSidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemSidebarComponent, selectors: [["item-sidebar"]], viewQuery: function ItemSidebarComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._input, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { title: [1, "title"], route: [1, "route"], filter_options: [1, "filter_options"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 19, consts: [["search_input", ""], ["item_display", ""], [1, "border-base-200", "bg-base-100", "flex", "h-full", "w-[24rem]", "max-w-[25vw]", "min-w-64", "flex-col", "space-y-2", "overflow-hidden", "rounded-sm", "shadow-sm", "sm:border-r", 3, "click"], [1, "flex", "items-center", "gap-1", "px-1", "pt-1"], [1, "no-subscript", "flex-1"], ["prefix", "", 1, "pointer-events-none", "text-2xl"], [3, "ngModelChange", "ngModel", "placeholder"], ["suffix", "", "diameter", "24"], [1, "focus-within:outline-info", "relative", "flex", "shrink-0", "overflow-hidden", "rounded-lg", "focus-within:outline-2"], [1, "px-1", 3, "ngModel"], [1, "w-full", "px-2", "text-sm", "opacity-60"], [1, "border-base-200", "flex", "h-1/2", "flex-1", "flex-col", "border-t"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "opacity-30"], ["icon", "", "default", "", "ripple", "", "tabindex", "-1", "aria-hidden", "true", 1, "h-12", "w-12"], [1, "m-2", "text-2xl"], [1, "no-subscript", "absolute", "top-1/2", "-right-2", "-translate-y-1/2", "opacity-0"], ["multiple", "", 3, "ngModelChange", "ngModel"], [1, "capitalize", 3, "value"], [1, "px-1", 3, "ngModelChange", "ngModel"], [1, "h-full", "overflow-auto"], [1, "group-tree", 3, "dataSource", "levelAccessor", "trackBy"], ["cdkTreeNodePadding", "", "class", "border-base-200 bg-base-100 hover:bg-base-200 relative flex min-h-16 items-center gap-2 border-b pr-2 transition-colors", 3, "cdkTreeNodePadding", "cdkTreeNodePaddingIndent", "active", 4, "cdkTreeNodeDef"], [1, "bg-base-200", "p-2", "text-center", "text-sm", "opacity-30"], ["cdkTreeNodePadding", "", 1, "border-base-200", "bg-base-100", "hover:bg-base-200", "relative", "flex", "min-h-16", "items-center", "gap-2", "border-b", "pr-2", "transition-colors", 3, "cdkTreeNodePadding", "cdkTreeNodePaddingIndent"], [1, "bg-base-content", "absolute", "inset-y-1", "left-1", "rounded-sm"], ["type", "button", 1, "hover:bg-base-content/20", "ml-1", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-lg", "transition-colors"], [1, "min-w-8"], [1, "flex", "min-w-0", "flex-1", "flex-col", "justify-center", "rounded-md", "py-3", "text-left", "no-underline", 3, "routerLink"], [1, "flex", "min-w-0", "items-center", "gap-2"], [1, "min-w-0", "flex-1", "truncate", "font-medium"], [1, "bg-base-200/70", "rounded-full", "px-2", "py-0.5", "text-xs"], [1, "mt-0.5", "w-full", "truncate", "text-xs", "opacity-70"], ["type", "button", 1, "hover:bg-base-content/20", "ml-1", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-lg", "transition-colors", 3, "click"], [1, "text-xl"], [3, "scrolled", "item_size", "items", "item_template"], ["routerLinkActive", "active", "ariaCurrentWhenActive", "page", 1, "border-base-100", "hover:border-info", "relative", "m-1", "flex", "h-16", "w-92", "max-w-[calc(100%-0.5rem)]", "flex-col", "justify-center", "rounded-sm", "border", "px-2", "py-1", 3, "routerLink", "appTooltip"], [1, "min-w-0", "flex-1", "truncate"], [1, "bg-error", "text-error-content", "shrink-0", "rounded-full", "px-2", "py-0.5", "text-xs"], [1, "flex", "w-full"], ["extra", "", 1, "mono", "border-base-300", "mt-1", "max-w-full", "truncate", "rounded-sm", "border", "p-1", "text-[0.625rem]", "opacity-60"], [1, "text-info", "absolute", "-top-1", "-right-1", "rotate-12", "text-2xl"], [1, "bg-warning", "text-warning-content", "absolute", "-top-1", "-right-1", "flex", "h-8", "w-8", "rotate-12", "items-center", "justify-center", "rounded-full", "text-2xl", 3, "appTooltip"], [1, "bg-error", "text-error-content", "absolute", "-top-1", "-right-1", "flex", "h-8", "w-8", "rotate-12", "items-center", "justify-center", "rounded-full", "text-2xl", 3, "appTooltip"], [1, "sr-only"]], template: function ItemSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "nav", 2);
      \u0275\u0275listener("click", function ItemSidebarComponent_Template_nav_click_0_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(1, "div", 3)(2, "app-form-field", 4)(3, "icon", 5);
      \u0275\u0275text(4, " search ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "input", 6, 0);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function ItemSidebarComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ItemSidebarComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.updateSearch($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, ItemSidebarComponent_Conditional_8_Template, 1, 0, "app-spinner", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "skip-to-content");
      \u0275\u0275conditionalCreate(10, ItemSidebarComponent_Conditional_10_Template, 9, 8, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, ItemSidebarComponent_Conditional_11_Template, 3, 4, "settings-toggle", 9);
      \u0275\u0275elementStart(12, "p", 10);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 11);
      \u0275\u0275conditionalCreate(16, ItemSidebarComponent_Conditional_16_Template, 2, 1)(17, ItemSidebarComponent_Conditional_17_Template, 6, 6)(18, ItemSidebarComponent_Conditional_18_Template, 4, 6, "div", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", ctx.title());
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 8, "COMMON.SEARCH_FOR", \u0275\u0275pureFunction1(15, _c1, ctx.title())));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() || ctx.group_hierarchy_loading() ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filter_options()?.length ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.route() === "users" ? 11 : -1);
      const t_r12 = ctx.total();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(14, 11, "COMMON.TOTAL_ITEMS", \u0275\u0275pureFunction1(17, _c2, t_r12), t_r12), " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.route() === "groups" && !ctx.search.trim() ? 16 : ctx.items().length ? 17 : !ctx.loading() ? 18 : -1);
    }
  }, dependencies: [
    SpinnerComponent,
    TooltipDirective,
    OptionComponent,
    SelectComponent,
    FormFieldComponent,
    CdkTreeModule,
    CdkTreeNodeDef,
    CdkTreeNodePadding,
    CdkTree,
    CdkTreeNode,
    IconComponent,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    VirtualScrollComponent,
    SettingsToggleComponent,
    SkipToContentComponent,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n}\nscroll-item[_ngcontent-%COMP%]:nth-child(2n)    > a[_ngcontent-%COMP%] {\n  background-color: var(--%NS%base-200);\n}\n.active[_ngcontent-%COMP%] {\n  background-color: var(--%NS%secondary) !important;\n  color: var(--%NS%secondary-content);\n}\n.group-tree[_ngcontent-%COMP%] {\n  background: transparent;\n}\n/*# sourceMappingURL=item-sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemSidebarComponent, [{
    type: Component,
    args: [{ selector: "item-sidebar", template: `
        <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
        <nav
            class="border-base-200 bg-base-100 flex h-full w-[24rem] max-w-[25vw] min-w-64 flex-col space-y-2 overflow-hidden rounded-sm shadow-sm sm:border-r"
            [attr.aria-label]="title()"
            (click)="$event.stopPropagation()"
        >
            <div class="flex items-center gap-1 px-1 pt-1">
                <app-form-field class="no-subscript flex-1">
                    <icon prefix class="pointer-events-none text-2xl">
                        search
                    </icon>
                    <input
                        #search_input
                        [(ngModel)]="search"
                        (ngModelChange)="updateSearch($event)"
                        [placeholder]="
                            'COMMON.SEARCH_FOR' | translate: { name: title() }
                        "
                    />
                    @if (loading() || group_hierarchy_loading()) {
                        <app-spinner suffix diameter="24" />
                    }
                </app-form-field>
                <!-- The search has focus on load, so offer the skip next -->
                <skip-to-content />
                @if (filter_options()?.length) {
                    <!-- The select sits invisible on top of the button and takes all input -->
                    <div
                        class="focus-within:outline-info relative flex shrink-0 overflow-hidden rounded-lg focus-within:outline-2"
                    >
                        <button
                            icon
                            default
                            ripple
                            class="h-12 w-12"
                            [class.border-info]="selected_filters.length"
                            [class.text-info]="selected_filters.length"
                            tabindex="-1"
                            aria-hidden="true"
                        >
                            <icon class="m-2 text-2xl">filter_list</icon>
                        </button>
                        <app-form-field
                            class="no-subscript absolute top-1/2 -right-2 -translate-y-1/2 opacity-0"
                        >
                            <app-select
                                multiple
                                [attr.aria-label]="'COMMON.FILTER' | translate"
                                [(ngModel)]="selected_filters"
                                (ngModelChange)="updateSearch(search)"
                            >
                                @for (
                                    option of filter_options();
                                    track option
                                ) {
                                    <app-option
                                        [value]="option"
                                        class="capitalize"
                                        >{{ option }}</app-option
                                    >
                                }
                            </app-select>
                        </app-form-field>
                    </div>
                }
            </div>
            @if (route() === 'users') {
                <settings-toggle
                    class="px-1"
                    [ngModel]="include_deleted()"
                    (ngModelChange)="setIncludeDeleted($event)"
                >
                    {{ 'USERS.INCLUDE_DELETED' | translate }}
                </settings-toggle>
            }
            <p class="w-full px-2 text-sm opacity-60">
                @let t = total();
                {{ 'COMMON.TOTAL_ITEMS' | translate: { count: t } : t }}
            </p>
            <div class="border-base-200 flex h-1/2 flex-1 flex-col border-t">
                @if (route() === 'groups' && !search.trim()) {
                    @if (group_tree_items().length) {
                        <div class="h-full overflow-auto">
                            <cdk-tree
                                class="group-tree"
                                [dataSource]="group_tree_items()"
                                [levelAccessor]="groupLevelAccessor"
                                [trackBy]="trackByGroupNode"
                            >
                                <cdk-tree-node
                                    *cdkTreeNodeDef="let node"
                                    cdkTreeNodePadding
                                    [cdkTreeNodePadding]="node.depth"
                                    [cdkTreeNodePaddingIndent]="8"
                                    class="border-base-200 bg-base-100 hover:bg-base-200 relative flex min-h-16 items-center gap-2 border-b pr-2 transition-colors"
                                    [class.active]="
                                        selected_id() === node.group.id
                                    "
                                >
                                    <div
                                        class="bg-base-content absolute inset-y-1 left-1 rounded-sm"
                                        [style.width]="
                                            0.25 * node.depth + 'rem'
                                        "
                                        [style.opacity]="0.1 * node.depth"
                                    ></div>
                                    @if (childCount(node.group) > 0) {
                                        <button
                                            type="button"
                                            class="hover:bg-base-content/20 ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors"
                                            [attr.aria-label]="
                                                (isGroupExpanded(node.group.id)
                                                    ? 'Collapse group '
                                                    : 'Expand group ') +
                                                displayName(node.group)
                                            "
                                            (click)="
                                                toggleGroup(node.group.id);
                                                $event.stopPropagation()
                                            "
                                        >
                                            <icon class="text-xl">
                                                {{
                                                    isGroupExpanded(
                                                        node.group.id
                                                    )
                                                        ? 'expand_more'
                                                        : 'chevron_right'
                                                }}
                                            </icon>
                                        </button>
                                    } @else {
                                        <div class="min-w-8"></div>
                                    }
                                    <a
                                        class="flex min-w-0 flex-1 flex-col justify-center rounded-md py-3 text-left no-underline"
                                        [routerLink]="
                                            subroute()
                                                ? [
                                                      '/',
                                                      route(),
                                                      node.group.id,
                                                      subroute(),
                                                  ]
                                                : ['/', route(), node.group.id]
                                        "
                                        [attr.aria-current]="
                                            selected_id() === node.group.id
                                                ? 'page'
                                                : null
                                        "
                                    >
                                        <div
                                            class="flex min-w-0 items-center gap-2"
                                        >
                                            <p
                                                class="min-w-0 flex-1 truncate font-medium"
                                            >
                                                {{ displayName(node.group) }}
                                            </p>
                                            @if (childCount(node.group) > 0) {
                                                <span
                                                    class="bg-base-200/70 rounded-full px-2 py-0.5 text-xs"
                                                >
                                                    {{ childCount(node.group) }}
                                                </span>
                                            }
                                        </div>
                                        @if (node.group.description) {
                                            <p
                                                class="mt-0.5 w-full truncate text-xs opacity-70"
                                            >
                                                {{ node.group.description }}
                                            </p>
                                        }
                                    </a>
                                </cdk-tree-node>
                            </cdk-tree>
                            <div
                                class="bg-base-200 p-2 text-center text-sm opacity-30"
                            >
                                {{ 'COMMON.END_OF_LIST' | translate }}
                            </div>
                        </div>
                    } @else if (!group_hierarchy_loading()) {
                        <div
                            class="flex flex-col items-center justify-center p-8 opacity-30"
                        >
                            <p>
                                {{
                                    'COMMON.LIST_EMPTY'
                                        | translate: { name: title() }
                                }}
                            </p>
                        </div>
                    }
                } @else if (items().length) {
                    <virtual-scroll
                        [item_size]="72"
                        [items]="items()"
                        [item_template]="item_display"
                        (scrolled)="atBottom($event)"
                    >
                        <div
                            class="bg-base-200 p-2 text-center text-sm opacity-30"
                        >
                            {{ 'COMMON.END_OF_LIST' | translate }}
                        </div>
                    </virtual-scroll>
                    <ng-template #item_display let-item="item" let-idx="index">
                        <a
                            [routerLink]="
                                subroute()
                                    ? ['/', route(), item.id, subroute()]
                                    : ['/', route(), item.id]
                            "
                            routerLinkActive="active"
                            ariaCurrentWhenActive="page"
                            [appTooltip]="
                                item.update_available &&
                                item.commit !== item.update_info.commit
                                    ? ('COMMON.UPDATE_AVAILABLE' | translate)
                                    : ''
                            "
                            [class.bg-base-200]="idx % 2 === 1"
                            class="border-base-100 hover:border-info relative m-1 flex h-16 w-92 max-w-[calc(100%-0.5rem)] flex-col justify-center rounded-sm border px-2 py-1"
                        >
                            <div class="flex min-w-0 items-center gap-2">
                                <p class="min-w-0 flex-1 truncate">
                                    {{ item.name }}
                                </p>
                                @if (route() === 'users' && item.deleted) {
                                    <span
                                        class="bg-error text-error-content shrink-0 rounded-full px-2 py-0.5 text-xs"
                                    >
                                        {{ 'USERS.DELETED' | translate }}
                                    </span>
                                }
                            </div>
                            <div class="flex w-full">
                                @if (item.extra) {
                                    <div
                                        extra
                                        class="mono border-base-300 mt-1 max-w-full truncate rounded-sm border p-1 text-[0.625rem] opacity-60"
                                    >
                                        {{ item.extra }}
                                    </div>
                                }
                            </div>
                            @if (
                                item.update_available &&
                                item.commit !== item.update_info.commit
                            ) {
                                <icon
                                    class="text-info absolute -top-1 -right-1 rotate-12 text-2xl"
                                >
                                    new_releases
                                </icon>
                            }
                            @if (item.zone_issues) {
                                <div
                                    class="bg-warning text-warning-content absolute -top-1 -right-1 flex h-8 w-8 rotate-12 items-center justify-center rounded-full text-2xl"
                                    [appTooltip]="
                                        (item.zone_issues === 'system'
                                            ? 'SYSTEMS.MISCONFIGURED'
                                            : 'ZONES.MISCONFIGURED'
                                        ) | translate
                                    "
                                >
                                    <icon> brightness_alert </icon>
                                    <span class="sr-only">
                                        {{
                                            (item.zone_issues === 'system'
                                                ? 'SYSTEMS.MISCONFIGURED'
                                                : 'ZONES.MISCONFIGURED'
                                            ) | translate
                                        }}
                                    </span>
                                </div>
                            }
                            @if (item.has_runtime_error) {
                                <div
                                    class="bg-error text-error-content absolute -top-1 -right-1 flex h-8 w-8 rotate-12 items-center justify-center rounded-full text-2xl"
                                    [appTooltip]="'MODULES.ERROR' | translate"
                                >
                                    <icon> error </icon>
                                    <span class="sr-only">
                                        {{ 'MODULES.ERROR' | translate }}
                                    </span>
                                </div>
                            }
                        </a>
                    </ng-template>
                } @else if (!loading()) {
                    <!-- The search box shows a spinner while the list loads -->
                    <div
                        class="flex flex-col items-center justify-center p-8 opacity-30"
                    >
                        <p>
                            {{
                                (search
                                    ? 'COMMON.SEARCH_EMPTY'
                                    : 'COMMON.LIST_EMPTY'
                                ) | translate: { name: title() }
                            }}
                        </p>
                    </div>
                }
            </div>
        </nav>
    `, imports: [
      SpinnerComponent,
      TooltipDirective,
      OptionComponent,
      SelectComponent,
      FormFieldComponent,
      CdkTreeModule,
      TranslatePipe,
      IconComponent,
      RouterModule,
      FormsModule,
      VirtualScrollComponent,
      SettingsToggleComponent,
      SkipToContentComponent
    ], styles: ["/* angular:styles/component:css;845e9c669826209e;/home/runner/work/backoffice/backoffice/src/app/ui/item-sidebar.component.ts */\n:host {\n  height: 100%;\n}\nscroll-item:nth-child(2n) > a {\n  background-color: var(--base-200);\n}\n.active {\n  background-color: var(--secondary) !important;\n  color: var(--secondary-content);\n}\n.group-tree {\n  background: transparent;\n}\n/*# sourceMappingURL=item-sidebar.component.css.map */\n"] }]
  }], () => [], { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], route: [{ type: Input, args: [{ isSignal: true, alias: "route", required: false }] }], filter_options: [{ type: Input, args: [{ isSignal: true, alias: "filter_options", required: false }] }], _input: [{ type: ViewChild, args: ["search_input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemSidebarComponent, { className: "ItemSidebarComponent", filePath: "src/app/ui/item-sidebar.component.ts", lineNumber: 392 });
})();
export {
  ItemSidebarComponent
};
//# debugId=c5e60dad-7d55-5891-a20f-d467b5626c10
//# sourceMappingURL=chunk-RTEL5T4J.js.map
