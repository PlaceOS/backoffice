import {h as h$1}from'./chunk-D2jXKcFK.js';import {_ as _$1}from'./chunk-8aMDDIAB.js';import {L as Lt$1,P,G,N as Nt$1}from'./chunk-D2x3k8LS.js';import {y,Y}from'./chunk-BxM6mvmp.js';import {h}from'./chunk-Bq7og7HK.js';import {as as o,w,d3 as L,cg as se$1,bD as H,a0 as aV,a as ft,c9 as Ea,ca as Ct,cb as wt,cc as j,cd as O,ce as he,bB as NV,aT as tI,h as hD,_,q as J,u as mr,b as Yt$1,m as mt,i as ia,$ as $t,cf as Jo,U,aE as Lg,H as Hs,X as Xg,R as RC,c as Jl,G as Gg,aO as qD,cl as UD,V as VD,t as tT,ae as uy,e as hb,A as cy,W as Wg,Z as WC,aQ as WD,k as HD,M as my,E as rd,j as rT,bu as sV,ch as iV,J as Jt$1,cy as Ao,ay as cV,d4 as ur,bN as yr,cp as iC,cq as sC,bE as iT,aF as iy,aG as lC,s,r as r$1,d5 as I,d6 as R,d7 as Nr,d8 as d,Y as Y$1,d9 as MV,a8 as ku,aa as Pu,ab as To,aD as r,K as KD,v as vy,O as Op,F as FC,o as Pp,ac as Dw,aP as BD,g as _y,ad as Tw,L as oT,n as rC,S as $g,ag as zC,cu as gD,cv as up,da as Er,db as ft$1,cE as dV,d2 as P$1,dc as St,bf as Mt,dd as F,de as Tr,df as Py,dg as Oe,dh as m,bv as FE,d0 as pV,l as dC,bw as qg,c7 as qC,di as gt,dj as pt,dk as qi,cC as hV,aI as Yg,c8 as bC,cX as ry,cY as cC,cZ as uC,cW as Zg,bO as gy,dl as zp,Q as GC,a$ as km}from'./main-LE72K5L5.js';var Lt=(n,i)=>i.id;function zt(n,i){n&1&&(Hs(0,"div",2),RC(1," Loading applications... "),Jl());}function Ft(n,i){n&1&&(Hs(0,"div",2),RC(1," No applications configured for this domain. "),Jl());}function Ut(n,i){if(n&1){let e=KD();Hs(0,"img",11),Xg("error",function(){Op(e);let o=rC().$implicit,h=rC(2);return Pp(h.loadNextIcon(o))}),Jl();}if(n&2){let e=rC().$implicit,t=rC(2);Wg("src",t.currentIcon(e),km)("alt",e.name);}}function Vt(n,i){if(n&1&&(Hs(0,"div",9),RC(1),Jl()),n&2){let e=rC().$implicit,t=rC(2);hb(),rd(" ",t.appInitial(e.name)," ");}}function Bt(n,i){if(n&1){let e=KD();Hs(0,"a",6),Xg("click",function(){Op(e);let o=rC(2);return Pp(o.close())}),Hs(1,"div",7),VD(2,Ut,1,2,"img",8)(3,Vt,2,1,"div",9),Jl(),Hs(4,"div",10),RC(5),Jl()();}if(n&2){let e=i.$implicit,t=rC(2);Wg("href",t.uri(e.redirect_uri),km),hb(2),HD(t.currentIcon(e)?2:3),hb(3),rd(" ",e.name," ");}}function Gt(n,i){if(n&1){let e=KD();Hs(0,"div",5)(1,"button",12),Xg("click",function(){Op(e);let o=rC(2);return Pp(o.previousPage())}),RC(2," Previous "),Jl(),Hs(3,"div",13),RC(4),Jl(),Hs(5,"button",12),Xg("click",function(){Op(e);let o=rC(2);return Pp(o.nextPage())}),RC(6," Next "),Jl()();}if(n&2){let e=rC(2);hb(),uy("opacity-40",e.page()===0),Wg("disabled",e.page()===0),hb(3),gy(" ",e.page()+1," / ",e.total_pages()," "),hb(),uy("opacity-40",e.page()>=e.total_pages()-1),Wg("disabled",e.page()>=e.total_pages()-1);}}function jt(n,i){if(n&1&&(Hs(0,"div",3),qD(1,Bt,6,3,"a",4,Lt),Jl(),VD(3,Gt,7,8,"div",5)),n&2){let e=rC();hb(),WD(e.visible_applications()),hb(2),HD(e.applications().length>e.page_size?3:-1);}}var le=9,se=class n{_tooltip=w(y,{optional:true});page_size=le;loading=ft(true);page=ft(0);applications=ft([]);total_pages=Jt$1(()=>Math.max(1,Math.ceil(this.applications().length/le)));visible_applications=Jt$1(()=>{let i=this.page()*le;return this.applications().slice(i,i+le)});async ngOnInit(){let i=Ea();if(!i?.id){this.loading.set(false);return}let t=((await NV({authority_id:i.id}).catch(()=>null))?.data||[]).filter(o=>this.isSupportedRedirectUri(o?.redirect_uri)).sort((o,h)=>(o.name||this.nameFromUri(o.redirect_uri)).localeCompare(h.name||this.nameFromUri(h.redirect_uri))).map(o=>this.mapApplication(o));this.applications.set(t),this.page.set(0),this.loading.set(false);}close=()=>this._tooltip?.close();currentIcon(i){return i.icon_urls[i.icon_index]||""}uri(i){return i.replace("oauth-resp.html","")}appInitial(i){return `${i||"?"}`.trim().charAt(0).toUpperCase()||"?"}loadNextIcon(i){this.applications.update(e=>e.map(t=>t.id===i.id?s(r$1({},t),{icon_index:Math.min(t.icon_index+1,t.icon_urls.length)}):t));}previousPage(){this.page.update(i=>Math.max(0,i-1));}nextPage(){this.page.update(i=>Math.min(this.total_pages()-1,i+1));}mapApplication(i){return {id:i.id,name:i.name||this.nameFromUri(i.redirect_uri),redirect_uri:i.redirect_uri,icon_urls:this.faviconUrls(i.redirect_uri),icon_index:0}}nameFromUri(i){try{return new URL(i,location.origin).hostname}catch{return "Application"}}isSupportedRedirectUri(i){if(!i)return  false;try{let e=new URL(i,location.origin).protocol;return e==="http:"||e==="https:"}catch{return  false}}faviconUrls(i){let e=this.redirectPath(i);return [...["svg","png","jpg","ico"].map(t=>`${e}assets/favicon.${t}`),`${e}favicon.ico`]}redirectPath(i){try{let e=new URL(i,location.origin),t=e.pathname||"/",o=t.split("/").filter(P=>!!P).at(-1),h=t.endsWith("/")?t:o?.includes(".")?t.slice(0,t.lastIndexOf("/")+1):`${t}/`;return `${e.origin}${h.startsWith("/")?"":"/"}${h}`}catch{return "/"}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=hD({type:n,selectors:[["application-picker-tooltip"]],decls:7,vars:1,consts:[[1,"border-base-300","bg-base-100","m-2","w-[24rem]","max-w-[calc(100vw-2rem)]","rounded-2xl","border","p-4","shadow-xl"],[1,"mb-2","px-2","pt-1","text-sm","font-semibold"],[1,"text-base-content/60","px-2","py-6","text-center","text-sm"],[1,"grid","grid-cols-3","gap-2"],["matRipple","",1,"hover:bg-base-200","flex","min-h-28","flex-col","items-center","justify-start","rounded-2xl","px-2","py-3","text-center",3,"href"],[1,"bg-base-200/50","border-base-200","mt-3","flex","items-center","justify-between","rounded-full","border","text-sm"],["matRipple","",1,"hover:bg-base-200","flex","min-h-28","flex-col","items-center","justify-start","rounded-2xl","px-2","py-3","text-center",3,"click","href"],[1,"bg-base-300/50","mb-3","flex","h-14","w-14","shrink-0","items-center","justify-center","overflow-hidden","rounded-xl"],[1,"h-full","w-full","object-contain","p-1",3,"src","alt"],[1,"text-base-content/60","text-lg","font-semibold","uppercase"],["app-name","",1,"text-sm","font-medium"],[1,"h-full","w-full","object-contain","p-1",3,"error","src","alt"],["matRipple","",1,"hover:bg-base-200","w-24","rounded-full","px-4","py-2",3,"click","disabled"],[1,"text-base-content/60"]],template:function(e,t){e&1&&(Hs(0,"div",0)(1,"div",1),RC(2,"Applications"),Jl(),Hs(3,"div"),VD(4,zt,2,0,"div",2)(5,Ft,2,0,"div",2)(6,jt,4,1),Jl()()),e&2&&(hb(4),HD(t.loading()?4:t.applications().length?6:5));},dependencies:[J,mr],styles:["[app-name][_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.25rem;max-height:2.5rem;word-break:break-word}"]})};var Nt=n=>({modules:n}),Dt=n=>({count:n});function qt(n,i){if(n&1&&(Hs(0,"div",3),tT(1,"translate"),Hs(2,"icon",4),RC(3,"bug_report"),Jl()(),Hs(4,"div",5),tT(5,"translate"),Hs(6,"icon",6),RC(7,"sdk"),Jl(),Hs(8,"div",7),RC(9),Jl()(),Hs(10,"div",5),tT(11,"translate"),Hs(12,"icon",6),RC(13,"business_messages"),Jl(),Hs(14,"div",7),RC(15),Jl()()),n&2){let e=rC(2);Wg("matTooltip",rT(1,5,"COMMON.DEBUG_ENABLED")),hb(4),Wg("matTooltip",iT(5,7,"COMMON.DEBUG_LISTENING_MSG",GC(15,Nt,e.debug_module_count()),e.debug_module_count())),hb(5),rd(" ",e.debug_module_count()," "),hb(),Wg("matTooltip",iT(11,11,"COMMON.DEBUG_MSG_COUNT_MSG",GC(17,Dt,e.debug_message_count()),e.debug_message_count())),hb(5),rd(" ",e.debug_message_count()," ");}}function Xt(n,i){if(n&1&&(Hs(0,"div",8),RC(1),tT(2,"translate"),Jl(),Hs(3,"p",9),RC(4),tT(5,"translate"),Gg(6,"br"),RC(7),tT(8,"translate"),Jl()),n&2){let e=rC(2);hb(),rd(" ",rT(2,3,"COMMON.DEBUG_ENABLED")," "),hb(3),rd(" ",iT(5,5,"COMMON.DEBUG_LISTENING_MSG",GC(13,Nt,e.debug_module_count()),e.debug_module_count())),hb(3),rd(" ",iT(8,9,"COMMON.DEBUG_MSG_COUNT_MSG",GC(15,Dt,e.debug_message_count()),e.debug_message_count())," ");}}function Qt(n,i){if(n&1){let e=KD();Hs(0,"button",10)(1,"icon"),RC(2,"more_horiz"),Jl()(),Hs(3,"mat-menu",null,0)(5,"button",11),Xg("click",function(){Op(e);let o=rC(2);return Pp(o.toggleDebugPosition())}),Hs(6,"icon",4),RC(7),Jl(),Hs(8,"div"),RC(9,"Toggle Position"),Jl()(),Hs(10,"button",11),Xg("click",function(){Op(e);let o=rC(2);return Pp(o.clearDebugMessages())}),Hs(11,"icon",4),RC(12,"clear_all"),Jl(),Hs(13,"div"),RC(14,"Clear Messages"),Jl()(),Hs(15,"button",11),Xg("click",function(){Op(e);let o=rC(2);return Pp(o.clearBindings())}),Hs(16,"icon",4),RC(17,"hearing_disabled"),Jl(),Hs(18,"div"),RC(19,"Unbind Modules"),Jl()(),Hs(20,"button",11),Xg("click",function(){Op(e);let o=rC(2);return Pp(o.openDebug())}),Hs(21,"icon",4),RC(22,"open_in_browser"),Jl(),Hs(23,"div"),RC(24,"Open Console"),Jl()()();}if(n&2){let e=dC(4),t=rC(2);Wg("matMenuTriggerFor",e),hb(7),my(t.debug_position()==="side"?"border_bottom":"border_right");}}function Wt(n,i){if(n&1){let e=KD();Hs(0,"div",2)(1,"button",12),Xg("click",function(){Op(e);let o=rC(2);return Pp(o.toggleDebugPosition())}),Hs(2,"icon",13),RC(3),Jl()(),Hs(4,"button",12),Xg("click",function(){Op(e);let o=rC(2);return Pp(o.clearDebugMessages())}),Hs(5,"icon",14),RC(6,"clear_all"),Jl()(),Hs(7,"button",12),Xg("click",function(){Op(e);let o=rC(2);return Pp(o.clearBindings())}),Hs(8,"icon",15),RC(9,"hearing_disabled"),Jl()(),Hs(10,"button",12),Xg("click",function(){Op(e);let o=rC(2);return Pp(o.openDebug())}),Hs(11,"icon",16),RC(12,"open_in_browser"),Jl()()();}if(n&2){let e=rC(2);hb(3),my(e.debug_position()==="side"?"border_bottom":"border_right");}}function Kt(n,i){if(n&1&&(Hs(0,"div",1),VD(1,qt,16,19)(2,Xt,9,17),VD(3,Qt,25,2)(4,Wt,13,1,"div",2),Jl()),n&2){let e=rC();hb(),HD(e.compact()?1:2),hb(2),HD(e.compact()?3:4);}}var de=class n{_debug=w(_$1);compact=sV(false);debug_position=this._debug.position;debug_enabled=this._debug.enabled;debug_module_count=this._debug.module_count;debug_message_count=this._debug.event_count;toggleDebugPosition(){this._debug.position.update(i=>i==="side"?"below":"side");}openDebug(){this._debug.is_shown.set(true);}clearDebugMessages(){this._debug.clearEvents();}clearBindings(){this._debug.unbindAll();}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=hD({type:n,selectors:[["debug-info"]],inputs:{compact:[1,"compact"]},decls:1,vars:1,consts:[["menu","matMenu"],[1,"border-base-300","m-2","flex","flex-col","justify-between","gap-2","rounded-xl","border","p-2"],["actions","",1,"flex","items-center","justify-center","gap-1"],["matTooltipPosition","right",1,"bg-info","text-info-content","flex","h-10","w-10","items-center","justify-center","rounded-sm",3,"matTooltip"],[1,"text-2xl"],["matTooltipPosition","right",1,"relative","flex","h-10","w-10","items-center","justify-center","rounded-sm",3,"matTooltip"],[1,"text-4xl","opacity-10"],[1,"absolute","inset-0","flex","items-center","justify-center"],[1,"mono","bg-info","text-info-content","rounded-xl","p-1","text-center","text-xs"],[1,"p-1","text-center","text-xs"],["icon","","default","","matRipple","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["icon","","default","","matRipple","",3,"click"],["matTooltip","Toggle Position"],["matTooltip","Clear Messages"],["matTooltip","Unbind Modules"],["matTooltip","Open Console"]],template:function(e,t){e&1&&VD(0,Kt,5,2,"div",1),e&2&&HD(t.debug_enabled()?0:-1);},dependencies:[_,J,mr,Yt$1,mt,Lt$1,P,G,Nt$1,U],encapsulation:2})};var Zt=["switch"],Yt=["*"];function Jt(n,i){n&1&&(Hs(0,"span",11),zp(),Hs(1,"svg",13),Gg(2,"path",14),Jl(),Hs(3,"svg",15),Gg(4,"path",16),Jl()());}var ei=new P$1("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:false,hideIcon:false,disabledInteractive:false})}),me=class{source;checked;constructor(i,e){this.source=i,this.checked=e;}},be=(()=>{class n{_elementRef=w(Ao);_focusMonitor=w(ft$1);_changeDetectorRef=w(dV);defaults=w(ei);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=false;_createChangeEvent(e){return new me(this,e)}_labelId;get buttonId(){return `${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus();}_noopAnimations=St();_focused=false;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=false;color;disabled=false;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck();}hideIcon;disabledInteractive;change=new Mt;toggleChange=new Mt;get inputId(){return `${this.id||this._uniqueId}-input`}constructor(){w(F).load(Tr);let e=w(new Py("tabindex"),{optional:true}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=w(Oe).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??false,this.disabledInteractive=t.disabledInteractive??false,this._labelId=this._uniqueId+"-label";}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=true,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=false,this._onTouched(),this._changeDetectorRef.markForCheck();});});}ngOnChanges(e){e.required&&this._validatorOnChange();}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef);}writeValue(e){this.checked=!!e;}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorOnChange=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck();}toggle(){this.checked=!this.checked,this._onChange(this.checked);}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked));}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new me(this,this.checked))));}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=hD({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,o){if(t&1&&ry(Zt,5),t&2){let h;cC(h=uC())&&(o._switchElement=h.first);}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,o){t&2&&(Yg("id",o.id),qg("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),bC(o.color?"mat-"+o.color:""),uy("mat-mdc-slide-toggle-focused",o._focused)("mat-mdc-slide-toggle-checked",o.checked)("_mat-animation-noopable",o._noopAnimations));},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",pV],color:"color",disabled:[2,"disabled","disabled",pV],disableRipple:[2,"disableRipple","disableRipple",pV],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:hV(e)],checked:[2,"checked","checked",pV],hideIcon:[2,"hideIcon","hideIcon",pV],disabledInteractive:[2,"disabledInteractive","disabledInteractive",pV]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[qC([{provide:gt,useExisting:qi(()=>n),multi:true},{provide:pt,useExisting:n,multi:true}]),FE],ngContentSelectors:Yt,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,o){if(t&1&&(iC(),Hs(0,"div",1)(1,"button",2,0),Xg("click",function(){return o._handleClick()}),Gg(3,"div",3)(4,"span",4),Hs(5,"span",5)(6,"span",6)(7,"span",7),Gg(8,"span",8),Jl(),Hs(9,"span",9),Gg(10,"span",10),Jl(),VD(11,Jt,5,0,"span",11),Jl()()(),Hs(12,"label",12),Xg("click",function(P){return P.stopPropagation()}),sC(13),Jl()()),t&2){let h=dC(2);Wg("labelPosition",o.labelPosition),hb(),uy("mdc-switch--selected",o.checked)("mdc-switch--unselected",!o.checked)("mdc-switch--checked",o.checked)("mdc-switch--disabled",o.disabled)("mat-mdc-slide-toggle-disabled-interactive",o.disabledInteractive),Wg("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("disabled",o.disabled&&!o.disabledInteractive),qg("id",o.buttonId)("name",o.name)("aria-label",o.ariaLabel)("aria-labelledby",o._getAriaLabelledBy())("aria-describedby",o.ariaDescribedby)("aria-required",o.required||null)("aria-checked",o.checked)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),hb(9),Wg("matRippleTrigger",h)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",true),hb(),HD(o.hideIcon?-1:11),hb(),Wg("for",o.buttonId),qg("id",o._labelId);}},dependencies:[mr,m],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return n})(),Pt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=gD({type:n});static \u0275inj=up({imports:[be,Er]})}return n})();var ni=()=>["/users","current","about"];function ai(n,i){if(n&1&&(Hs(0,"button",9)(1,"icon",3),RC(2,"language"),Jl(),Hs(3,"div",14),RC(4),tT(5,"translate"),Jl(),Hs(6,"div",15),RC(7),Jl()()),n&2){let e=rC(),t=dC(25);Wg("matMenuTriggerFor",t),hb(4),rd(" ",rT(5,3,"COMMON.LANGUAGE")," "),hb(3),rd(" ",e.active_lang.name," ");}}function oi(n,i){if(n&1){let e=KD();Hs(0,"button",16),Xg("click",function(){let o=Op(e).$implicit,h=rC();return Pp(h.setLanguage(o.id))}),Hs(1,"div",17)(2,"div"),RC(3),Jl(),Hs(4,"div"),RC(5),Jl()()();}if(n&2){let e=i.$implicit;hb(3),my(e.name),hb(2),my(e.flag);}}var pe=class n{_settings=w(L);_locale=w(I);github_icon=ft("");get dark_mode(){return this._settings.get("theme")==="dark"}set dark_mode(i){let e=i?"dark":"light";this._settings.setTheme(e),this.github_icon.set(e==="dark"?"assets/img/GitHub_dark.svg":"assets/img/GitHub_light.svg");}lang="en";languages=ft([]);get active_lang(){return this.languages().find(i=>i.id===this.lang)||{id:"en",name:"English"}}get github_link(){let i="Issue on page",e=R(d.hash,Nr(d.time,"dd MMM yyyy, h:mm a"));return `https://github.com/PlaceOS/backoffice/issues/new?title=${encodeURIComponent(i)}&body=${encodeURIComponent(e)}&labels=bug`}ngOnInit(){this.lang=this._locale.locale,this.languages.set([{id:"en",name:Y$1("COMMON.LANG_ENGLISH"),flag:"\u{1F1EC}\u{1F1E7}"},{id:"jp",name:Y$1("COMMON.LANG_JAPANESE"),flag:"\u{1F1EF}\u{1F1F5}"},{id:"fr",name:Y$1("COMMON.LANG_FRENCH"),flag:"\u{1F1EB}\u{1F1F7}"},{id:"es",name:Y$1("COMMON.LANG_SPANISH"),flag:"\u{1F1EA}\u{1F1F8}"},{id:"ar",name:Y$1("COMMON.LANG_ARABIC"),flag:""}]),this.github_icon.set(this._settings.get("theme")==="dark"?"assets/img/GitHub_dark.svg":"assets/img/GitHub_light.svg");}setLanguage(i){this._locale.setLocale(i),localStorage.setItem("BACKOFFICE.locale",i),this.languages.set([{id:"en",name:Y$1("COMMON.LANG_ENGLISH"),flag:"\u{1F1EC}\u{1F1E7}"},{id:"jp",name:Y$1("COMMON.LANG_JAPANESE"),flag:"\u{1F1EF}\u{1F1F5}"},{id:"fr",name:Y$1("COMMON.LANG_FRENCH"),flag:"\u{1F1EB}\u{1F1F7}"},{id:"es",name:Y$1("COMMON.LANG_SPANISH"),flag:"\u{1F1EA}\u{1F1F8}"},{id:"ar",name:Y$1("COMMON.LANG_ARABIC"),flag:""}]),setTimeout(()=>location.reload(),100);}logout(){MV();}showUploadHistory(){this._settings.post("show_upload_manager",true);}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=hD({type:n,selectors:[["user-menu-tooltip"]],decls:35,vars:27,consts:[["lang_menu","matMenu"],[1,"divide-base-200","border-base-300","bg-base-100","m-2","divide-y","rounded-sm","border","shadow-sm"],["matRipple","","type","button","profile","",1,"space-x-2",3,"routerLink"],[1,"text-2xl"],["dark-mode","",1,"flex","w-[16rem]","items-center","p-3"],[1,"w-1/2","flex-1"],[3,"ngModelChange","ngModel"],["matRipple","","type","button","logout","",1,"space-x-2",3,"click"],["matRipple","","type","button","uploads","",1,"space-x-2",3,"click"],["matRipple","","type","button",3,"matMenuTriggerFor"],["xPosition","after","yPosition","above"],["mat-menu-item","",1,"w-60"],["matRipple","","type","button","target","_blank","ref","noopener noreferer","report","",1,"gap-2",3,"href"],["alt","Github Icon",1,"m-1","flex","h-5","max-w-5","items-center","justify-center","overflow-hidden","text-xs",3,"src"],[1,"flex-1","text-left"],[1,"bg-base-200","max-w-24","truncate","rounded-sm","px-2","py-1","text-sm"],["mat-menu-item","",1,"w-60",3,"click"],[1,"flex","w-full","items-center","justify-between","space-x-4"]],template:function(e,t){if(e&1){let o=KD();Hs(0,"div",1)(1,"a",2)(2,"icon",3),RC(3,"person"),Jl(),RC(4),tT(5,"translate"),Jl(),Hs(6,"div",4)(7,"icon",3),RC(8,"dark_mode"),Jl(),Hs(9,"p",5),RC(10),tT(11,"translate"),Jl(),Hs(12,"mat-slide-toggle",6),vy("ngModelChange",function(P){return Op(o),FC(t.dark_mode,P)||(t.dark_mode=P),Pp(P)}),Jl(),Dw(),Jl(),Hs(13,"button",7),Xg("click",function(){return t.logout()}),Hs(14,"icon",3),RC(15,"logout"),Jl(),RC(16),tT(17,"translate"),Jl(),Hs(18,"button",8),Xg("click",function(){return t.showUploadHistory()}),Hs(19,"icon",3),RC(20,"schedule"),Jl(),RC(21),tT(22,"translate"),Jl(),VD(23,ai,8,5,"button",9),Hs(24,"mat-menu",10,0),qD(26,oi,6,2,"button",11,BD),Jl(),Hs(28,"a",12),tT(29,"safe"),Gg(30,"img",13),tT(31,"safe"),Hs(32,"div"),RC(33),tT(34,"translate"),Jl()()();}e&2&&(hb(),Wg("routerLink",WC(26,ni)),hb(3),rd(" ",rT(5,10,"COMMON.PROFILE")," "),hb(6),rd(" ",rT(11,12,"COMMON.DARK_MODE")," "),hb(2),_y("ngModel",t.dark_mode),Tw(),hb(4),rd(" ",rT(17,14,"COMMON.LOGOUT")," "),hb(5),rd(" ",rT(22,16,"COMMON.UPLOAD_HISTORY")," "),hb(2),HD(t.languages().length>1?23:-1),hb(3),WD(t.languages()),hb(2),Wg("href",oT(29,18,t.github_link,"url"),km),hb(2),Wg("src",oT(31,21,t.github_icon(),"resource"),km),hb(3),my(rT(34,24,"COMMON.REPORT_ISSUE")));},dependencies:[_,Lt$1,P,G,Nt$1,J,mr,Pt,be,ia,$t,ku,Pu,To,U,r],styles:["[type=button][_ngcontent-%COMP%]{display:flex;align-items:center;padding:.75rem;width:16rem}[type=button][_ngcontent-%COMP%]:hover{background-color:#0000001a}icon[_ngcontent-%COMP%]{margin-right:.5rem}"]})};var ri=()=>["/"],li=n=>[n];function si(n,i){if(n&1&&(Hs(0,"a",15),tT(1,"translate"),Hs(2,"div",17)(3,"icon",18),RC(4),Jl(),Hs(5,"p"),RC(6),tT(7,"translate"),Jl()()()),n&2){let e=rC(2).$implicit,t=rC();Wg("href",e.external(),km)("matTooltip",t.compact()?rT(1,12,e.name):""),hb(2),uy("sm:justify-center",t.compact()),hb(),uy("sm:text-2xl",t.compact())("sm:mx-auto",t.compact()),hb(),my(e.icon),hb(),uy("sm:hidden",t.compact()),hb(),rd(" ",rT(7,14,e.name)," ");}}function ci(n,i){if(n&1&&Gg(0,"span",21),n&2){let e=rC(4);uy("sm:left-1/2",e.compact())("sm:right-3",!e.compact())("sm:right-auto",e.compact())("sm:-translate-x-1/2",e.compact());}}function di(n,i){if(n&1&&(Hs(0,"a",16),tT(1,"translate"),Hs(2,"div",17)(3,"icon",19),RC(4),Jl(),Hs(5,"p"),RC(6),tT(7,"translate"),Jl(),VD(8,ci,1,8,"span",20),Jl()()),n&2){let e=rC(2).$implicit,t=rC();Wg("routerLink",GC(19,li,e.route))("matTooltip",t.compact()?rT(1,15,e.name):""),hb(2),uy("sm:justify-center",t.compact()),hb(),uy("sm:text-2xl",t.compact())("sm:mx-auto",t.compact())("sm:opacity-25",t.compact()&&t.isRouteLoading(e.route)),hb(),my(e.icon),hb(),uy("sm:hidden",t.compact()),hb(),rd(" ",rT(7,17,e.name)," "),hb(2),HD(t.isRouteLoading(e.route)?8:-1);}}function mi(n,i){if(n&1&&VD(0,si,8,16,"a",15)(1,di,9,21,"a",16),n&2){let e=rC().$implicit;HD(e.external?0:1);}}function pi(n,i){if(n&1&&VD(0,mi,2,1),n&2){let e=i.$implicit;HD(!e.show_on||e.show_on()?0:-1);}}function ui(n,i){if(n&1&&(Hs(0,"button",7)(1,"div",17)(2,"icon",18),RC(3,"apps"),Jl(),Hs(4,"p"),RC(5,"Applications"),Jl()()()),n&2){let e=rC();Wg("content",e.application_picker)("matTooltip",e.compact()?"Applications":""),hb(),uy("sm:justify-center",e.compact()),hb(),uy("sm:text-2xl",e.compact())("sm:mx-auto",e.compact()),hb(2),uy("sm:hidden",e.compact());}}var Rt=class n extends o{_tooltip=w(y,{optional:true});_settings=w(L);_users=w(se$1);_hotkey=w(h);_router=w(H);open=aV(true);compact=ft(false);loading_route=ft("");show_application_picker=ft(false);application_picker=se;user_controls=pe;links=[{name:"COMMON.SYSTEMS",route:"/systems",icon:"meeting_room"},{name:"COMMON.MODULES",route:"/modules",icon:"tablet"},{name:"COMMON.ZONES",route:"/zones",icon:"meeting_room"},{name:"COMMON.DRIVERS",route:"/drivers",icon:"construction"},{name:"COMMON.REPOS",route:"/repositories",icon:"inventory_2"},{name:"COMMON.TRIGGERS",route:"/triggers",icon:"timer"},{name:"COMMON.ALERTS",icon:"notifications_active",show_on:()=>!!this.alerts_url,external:()=>this.alerts_url},{name:"COMMON.METRICS",icon:"monitoring",show_on:()=>!!this.metrics_url,external:()=>this.metrics_url},{name:"COMMON.USERS",route:"/users",icon:"group",show_on:()=>this.is_support||this.is_admin},{name:"COMMON.GROUPS",route:"/groups",icon:"groups",show_on:()=>this.is_admin},{name:"COMMON.DOMAINS",route:"/domains",icon:"domain",show_on:()=>this.is_admin},{name:"COMMON.MANAGE",route:"/admin",icon:"settings",show_on:()=>this.is_admin}];get logo(){return this._settings.get("app.logo_light")}get user(){return this._users.current()}get is_admin(){return this._users.current().sys_admin}get is_support(){return this._users.current().support}get alerts_url(){return Ea()?.config?.backoffice?.alerts_url}get metrics_url(){return Ea()?.config?.backoffice?.metrics_url}close=()=>this._tooltip?.close();toggleCompactMode(){this.compact.update(i=>!i),localStorage.setItem("BACKOFFICE.SIDEBAR_COMPACT",`${this.compact()}`);}isRouteLoading(i){return this.loading_route()===i}async ngOnInit(){this.subscription("route_load",this._router.events.subscribe(t=>{t instanceof Ct&&this.loading_route.set(`/${t.route.path||""}`),t instanceof wt&&this.loading_route.set(""),(t instanceof j||t instanceof O||t instanceof he)&&this.loading_route.set("");})),this.subscription("up",this._hotkey.listen(["Control","Shift","ArrowUp"],()=>this.changeSelected(-1))),this.subscription("down",this._hotkey.listen(["Control","Shift","ArrowDown"],()=>this.changeSelected(1))),this.compact.set(localStorage.getItem("BACKOFFICE.SIDEBAR_COMPACT")==="true");let i=Ea();if(!i?.id)return;let e=await NV({authority_id:i.id}).catch(()=>null);this.show_application_picker.set(!!(e?.data||[]).find(t=>this.isSupportedRedirectUri(t?.redirect_uri)));}changeSelected(i=1){}isSupportedRedirectUri(i){if(!i)return  false;try{let e=new URL(i,location.origin).protocol;return e==="http:"||e==="https:"}catch{return  false}}static \u0275fac=(()=>{let i;return function(t){return (i||(i=tI(n)))(t||n)}})();static \u0275cmp=hD({type:n,selectors:[["sidebar-menu"]],inputs:{open:[1,"open"]},outputs:{open:"openChange"},features:[Lg],decls:27,vars:30,consts:[["sidebar-menu","",1,"bg-base-200","pointer-events-none","absolute","inset-0","z-40","hidden","h-full","flex-col","justify-between","sm:pointer-events-auto","sm:relative","sm:inset-auto","sm:z-10","sm:flex",3,"click"],[1,"flex","h-1/2","flex-1","flex-col","items-center","space-y-2"],[1,"font-heading","mt-4","ml-16","text-4xl","sm:mb-2","sm:ml-0",3,"routerLink"],[1,"font-heading","text-primary"],["src","assets/icon/mstile-310x310.png","alt","PlaceOS logo",1,"hidden","h-12","w-12"],[1,"w-full","flex-1","space-y-2","overflow-auto","pb-2"],["icon","","matRipple","",1,"absolute","top-1","left-1","sm:hidden",3,"click"],["btn","","link","","matRipple","","customTooltip","","matTooltipPosition","right","yPosition","bottom",1,"clear","hover:bg-base-100","mx-auto","mb-2","w-[calc(100%-1rem)]","text-left",3,"content","matTooltip"],[3,"compact"],["matRipple","","customTooltip","","user","","yPosition","bottom","xPosition","start",1,"border-base-300","flex","min-h-16","items-center","space-x-2","border-t","p-2","text-left",3,"content"],["matTooltipPosition","right",3,"user","matTooltip"],[1,"flex","w-1/2","flex-1","flex-col","leading-tight"],[1,"w-full","truncate"],[1,"w-full","truncate","text-xs","opacity-30"],["icon","","matRipple","",1,"border-base-200","bg-base-100","hover:bg-base-200","absolute","right-0","bottom-12","z-999","hidden","h-6","w-6","min-w-6","translate-x-1/2","rounded-full","border","shadow-sm","sm:flex",3,"click"],["btn","","link","","matRipple","","target","_blank","rel","noopener noreferrer","matTooltipPosition","right",1,"clear","hover:bg-base-100","mx-auto","w-[calc(100%-1rem)]","text-left",3,"href","matTooltip"],["btn","","link","","matRipple","","routerLinkActive","bg-secondary! text-secondary-content","matTooltipPosition","right",1,"clear","hover:bg-base-100","relative","mx-auto","w-[calc(100%-1rem)]","text-left",3,"routerLink","matTooltip"],[1,"flex","w-full","items-center","space-x-2"],[1,"text-xl"],[1,"text-xl","transition-opacity"],["role","status","aria-label","Loading page",1,"ml-auto","h-4","w-4","animate-spin","rounded-full","border-2","border-current/30","border-t-current","sm:absolute","sm:top-1/2","sm:ml-0","sm:-translate-y-1/2",3,"sm:left-1/2","sm:right-3","sm:right-auto","sm:-translate-x-1/2"],["role","status","aria-label","Loading page",1,"ml-auto","h-4","w-4","animate-spin","rounded-full","border-2","border-current/30","border-t-current","sm:absolute","sm:top-1/2","sm:ml-0","sm:-translate-y-1/2"]],template:function(e,t){e&1&&(Hs(0,"div",0),Xg("click",function(){return t.close()}),Hs(1,"div",1)(2,"a",2)(3,"div"),RC(4," Place"),Hs(5,"span",3),RC(6,"OS"),Jl()(),Gg(7,"img",4),Jl(),Hs(8,"div",5),qD(9,pi,1,1,null,null,UD),Hs(11,"button",6),Xg("click",function(){return t.open.set(false)}),Hs(12,"icon"),RC(13,"close"),Jl()()()(),VD(14,ui,6,10,"button",7),Gg(15,"debug-info",8),Hs(16,"button",9),Gg(17,"a-user-avatar",10),Hs(18,"div",11)(19,"div",12),RC(20),Jl(),Hs(21,"div",13),RC(22),tT(23,"translate"),Jl()()(),Hs(24,"button",14),Xg("click",function(){return t.toggleCompactMode()}),Hs(25,"icon"),RC(26),Jl()()()),e&2&&(uy("compact",t.compact())("sm:w-52",!t.compact())("!flex",t.open())("pointer-events-auto!",t.open()),hb(2),cy("width",t.compact()?"auto":"calc(100%-2rem)"),Wg("routerLink",WC(29,ri)),hb(),uy("sm:hidden",t.compact()),hb(4),uy("sm:block",t.compact()),hb(2),WD(t.links),hb(5),HD(t.show_application_picker()?14:-1),hb(),Wg("compact",t.compact()),hb(),Wg("content",t.user_controls),hb(),uy("sm:pl-2",t.compact()),Wg("user",t.user)("matTooltip",t.compact()?t.user?.name:""),hb(),uy("sm:hidden",t.compact()),hb(2),my(t.user?.name),hb(2),rd(" ",rT(23,27,t.user?.sys_admin?"COMMON.USER_ADMIN":t.user?.support?"COMMON.USER_SUPPORT":"COMMON.USER_BASIC")," "),hb(4),rd(" ",t.compact()?"chevron_right":"chevron_left"," "));},dependencies:[_,h$1,J,mr,Yt$1,mt,Y,ia,$t,Jo,de,U],styles:["[sidebar-menu][_ngcontent-%COMP%]{transition:width .2s}.active[_ngcontent-%COMP%]{background-color:var(--secondary);color:var(--secondary-content)}@media screen and (min-width:512px){.compact[_ngcontent-%COMP%]{width:4.5rem}}"]})};var gi=["scroll_container"],_i=["*"],hi=(n,i)=>({item:n,index:i});function bi(n,i){return n+this.offset_start()}function fi(n,i){n&1&&Zg(0);}function vi(n,i){if(n&1&&(Hs(0,"div",4),$g(1,fi,1,0,"ng-container",5),Jl()),n&2){let e=i.$implicit,t=i.$index,o=rC();cy("top",(o.offset_start()+t)*o.item_size()+"px"),hb(),Wg("ngTemplateOutlet",o.item_template())("ngTemplateOutletContext",zC(4,hi,e,o.offset_start()+t));}}var At=class n{items=sV([]);item_size=sV(0);item_template=sV(null);buffer=sV(2);scrolled=iV();range=ft(0);offset=ft(0);extra_height=ft(0);offset_start=Jt$1(()=>Math.max(this.offset()-this.buffer(),0));offset_end=Jt$1(()=>this.offset_start()+(this.range()+2*(this.buffer()||2)));scroll_area=Jt$1(()=>this.items().length*this.item_size()+this.extra_height());_el=w(Ao);_scroll_container_el=cV("scroll_container");_resize_observer;ngAfterViewInit(){this.updateContainer(),this._resize_observer=new ResizeObserver(()=>this.updateContainer()),this._resize_observer.observe(this._el.nativeElement);}ngOnDestroy(){this._resize_observer?.disconnect();}updateOffsets(){let i=this._scroll_container_el()?.nativeElement;if(!i)return;let e=i.scrollTop;this.offset.set(Math.floor(e/this.item_size())),this.scrolled.emit([this.offset(),this.offset()+this.range()]);}updateContainer(){let i=this._el?.nativeElement;if(!i)return;let e=i.getBoundingClientRect();this.range.set(Math.ceil(e.height/this.item_size()));}scrollToIndex(i){let e=this._scroll_container_el()?.nativeElement;e&&(e.scrollTop=i*this.item_size(),this.updateOffsets());}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=hD({type:n,selectors:[["virtual-scroll"]],viewQuery:function(e,t){e&1&&iy(t._scroll_container_el,gi,5),e&2&&lC();},inputs:{items:[1,"items"],item_size:[1,"item_size"],item_template:[1,"item_template"],buffer:[1,"buffer"]},outputs:{scrolled:"scrolled"},ngContentSelectors:_i,decls:7,vars:6,consts:[["scroll_container",""],[1,"relative","h-full","w-full","overflow-auto",3,"scroll"],["scroll-fill","",1,"w-full"],[1,"absolute","w-full",3,"top"],[1,"absolute","w-full"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,t){e&1&&(iC(),Hs(0,"div",1,0),Xg("scroll",function(){return t.updateOffsets()}),Gg(2,"div",2),qD(3,vi,2,7,"div",3,bi,true),tT(5,"slice"),sC(6),Jl()),e&2&&(hb(2),cy("height",t.scroll_area()+"px"),hb(),WD(iT(5,2,t.items(),t.offset_start(),t.offset_end())));},dependencies:[ur,yr],styles:["[_nghost-%COMP%]{width:100%;height:100%}"]})};
export{At as A,Rt as R};