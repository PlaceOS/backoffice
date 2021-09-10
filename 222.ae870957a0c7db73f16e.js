(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([[222],{9222:(e,t,i)=>{"use strict";i.r(t),i.d(t,{AppDriversModule:()=>ae});var o=i(1511),s=i(3695),n=i(6898),r=i(4762),c=i(5802),l=i(5712),a=i(8194),d=i(5697),m=i(1572),u=i(7096),f=i(6478);let p=(()=>{class e extends a.K{constructor(e){super(),this._service=e,this.name="drivers",this.show_options=this._service.show_options,this.tab_list=[]}get extensions(){return(0,d.fq)(this._service.active_item,this.name)}updateTabList(){this.tab_list=[{id:"about",name:"About",icon:{class:"backoffice-info-with-circle"}},{id:"modules",name:"Modules",count:this.device_count,icon:{class:"backoffice-tablet"}},{id:"history",name:"Settings History",icon:{class:"backoffice-clock"}}].concat(this.extensions)}ngOnInit(){this.subscription("item",this._service.item.subscribe(e=>{this.loadValues(e),this.updateTabList()})),this.updateTabList()}loadValues(e){return(0,r.mG)(this,void 0,void 0,function*(){if(!e)return;const t={offset:0,limit:1,driver_id:e.id};this.device_count=(yield(0,c.Ne_)(t).toPromise()).total})}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(l.L))},e.\u0275cmp=m.Xpm({type:e,selectors:[["app-drivers"]],features:[m.qOj],decls:3,vars:1,consts:[[1,"flex-1","flex-col","sm:flex-row","flex","h-full","w-full","relative"],["heading","Drivers","name","drivers",1,"absolute","top-0","left-0","h-12","w-full","sm:h-full","sm:static"],["name","driver","route","drivers",1,"flex-1","relative","mt-12","sm:mt-0","w-full","sm:w-1/2",3,"tabs"]],template:function(e,t){1&e&&(m.TgZ(0,"div",0),m._UZ(1,"sidebar",1),m._UZ(2,"item-display",2),m.qZA()),2&e&&(m.xp6(2),m.Q6J("tabs",t.tab_list))},directives:[u.k,f.s],styles:["sidebar[_ngcontent-%COMP%]{transition:height .3s}@media screen and (min-width:640px){sidebar[_ngcontent-%COMP%]{width:20em!important}}"]}),e})();var g=i(8512),v=i(3835),Z=i(4689),h=i(7727),_=i(5012),b=i(2628),x=i(4019),A=i(9996),q=i(8303),T=i(4103),y=i(8739),w=i(5646),L=i(4608);let N=(()=>{class e{constructor(e,t){this._state=e,this._dialog=t,this._loading=new g.X(!1),this._last_error=new g.X(null),this.item=this._state.item,this.loading=this._loading.asObservable(),this.last_error=this._last_error.asObservable(),this.is_compiled=this.item.pipe((0,v.h)(e=>!!e&&e instanceof c.CbG),(0,Z.w)(e=>(0,c.J_X)(e.id)),(0,h.K)(e=>(0,r.mG)(this,void 0,void 0,function*(){const t=yield null==e?void 0:e.json();if(this._last_error.next((null==t?void 0:t.compilation_output)||e),console.log("Driver Error:",t),!(null==t?void 0:t.compilation_output))throw e})),(0,_.a)((0,b.g)(1e3)),(0,x.b)(e=>e?this._last_error.next(null):"")),this.modules=this.item.pipe((0,Z.w)(e=>(0,r.mG)(this,void 0,void 0,function*(){this._loading.next(!0);const t=yield(0,c.Ne_)({driver_id:e.id}).toPromise();return this._loading.next(!1),t})),(0,A.U)(e=>e.data),(0,q.d)()),this.item.subscribe(()=>this._last_error.next(null))}get active_item(){return this._state.active_item}viewError(){const e=this._last_error.getValue();e&&this._dialog.open(w.a,{data:{title:"Driver Compilation Error",content:e}})}recompileDriver(){return(0,r.mG)(this,void 0,void 0,function*(){const e=yield(0,T._5)({title:"Recompile Driver",content:"<p>Are you sure you want recompile this driver?</p><p>New driver code will be loaded and device settings will be updated.</p>",icon:{type:"icon",class:"backoffice-cycle"}},this._dialog);if(!e||!e.reason)return e.close();e.loading("Recompiling driver...");const t=yield(0,c.qEr)(this._state.active_item.id).toPromise().catch(e=>null);if(e.close(),!t)return(0,y.cB)("Failed to recompiled driver.");(0,y.t5)("Successfully recompiled driver.")})}removeModule(e){return(0,r.mG)(this,void 0,void 0,function*(){const t=yield(0,T._5)({title:"Remove module?",content:`Remove ${e.driver_id}?<br>All associated data be deleted immediatedly.`,icon:{type:"icon",class:"backoffice-trash"}},this._dialog);if(!t||!t.reason)return;const i=yield(0,c.zed)(this.active_item.id,e.id).toPromise().catch(t=>{(0,y.cB)(`Error removing module ${e.id}. Error: ${t.statusText||t.message||t}`)});t.close(),i&&(this._state.replaceItem(i),(0,y.t5)("Successfully removed module."))})}}return e.\u0275fac=function(t){return new(t||e)(m.LFG(l.L),m.LFG(L.uw))},e.\u0275prov=m.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var U=i(5980),D=i(7806),O=i(9441),k=i(6529);function C(e,t){if(1&e&&(m.TgZ(0,"div",2),m.TgZ(1,"label"),m.SDv(2,21),m.qZA(),m.TgZ(3,"div",4),m._uU(4),m.qZA(),m.qZA()),2&e){const e=m.oxw();m.xp6(4),m.Oqu(e.item.default_uri)}}function $(e,t){if(1&e&&(m.TgZ(0,"div",2),m.TgZ(1,"label"),m.SDv(2,22),m.qZA(),m.TgZ(3,"div",4),m._uU(4),m.qZA(),m.qZA()),2&e){const e=m.oxw();m.xp6(4),m.Oqu(e.item.default_port)}}function I(e,t){1&e&&m._UZ(0,"mat-spinner",23)}function J(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"button",14),m.NdJ("click",function(){return m.CHM(e),m.oxw().viewErrors()}),m._uU(1," View Errors "),m.qZA()}}function M(e,t){if(1&e&&(m.TgZ(0,"section"),m._UZ(1,"a-settings-form",24),m.qZA()),2&e){const e=m.oxw();m.xp6(1),m.Q6J("merge",!0)("id",e.item.id)("settings",e.item.settings)}}function S(e,t){1&e&&(m.TgZ(0,"div",25),m._UZ(1,"mat-spinner",26),m.TgZ(2,"p"),m.SDv(3,27),m.qZA(),m.qZA())}const Q=function(e){return["/repositories",e,"about"]};let E=(()=>{class e{constructor(e){this._service=e,this.compiled=this._service.is_compiled,this.compilation_error=this._service.last_error,this.recompileDriver=()=>this._service.recompileDriver(),this.viewErrors=()=>this._service.viewError()}get item(){return this._service.active_item||{}}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(N))},e.\u0275cmp=m.Xpm({type:e,selectors:[["driver-about"]],decls:55,vars:26,consts:function(){let e,t,i,o,s,n,r,c,l,a,d,m;return e=$localize`:@@driverDetailsCompiled␟cf381ca16eaabe3374d51e9f94f2218500c4fa4e␟9153697548218950089:Compiled:`,t=$localize`:@@driverDetailsCommit␟9550d280606a1dc85aa6687e6375c8c3edfa14ac␟2338640606551983669:Repository:`,i=$localize`:@@driverDetailsCommit␟fd8aae50a9e4449f1ca02dd094975918d9a5667b␟1255418805683509654:Commit:`,o=$localize`:@@driverDetailsFileName␟38b21a77c169dc1d573d1959b82ee0d1bc2382a4␟3153886573188541985:File Name:`,s=$localize`:@@driverDetailsModuleName␟30503cc4139d9b80b7ee428e70c83f93018643c3␟2852585380255004131:Module Name:`,n=$localize`:@@driverCreatedAtLabel␟a5ed099ffc9e96f6970df843289ade8a7d20ab9f␟1616250945945379783:Created:`,r=$localize`:@@driverUpdatedAtLabel␟f94240161f912dbd8758b858877cddeab80f36cb␟1116759395536210856:Updated:`,c=$localize`:@@driverReloadAction␟9e4193ff8bc8eb566c2a631f96b9c93ac4d22a4e␟5398060262188177679: Recompile Driver `,l=$localize`:@@settingsLabel␟5ba97a3f90a79c4d7720b941ae416c8c84337e38␟180274732945114229: Settings `,a=$localize`:@@driverDefaultURILabel␟aaf77b7baecf340df6c6e20f4016289f440c390e␟2755927892619874934:Default URI:`,d=$localize`:@@driverDefaultPortLabel␟708739a9f194ca4078bfdeed2db588d855c042b8␟8341926293707687932:Default Port Number:`,m=$localize`:@@driverLoadingLabel␟07c312791623a62194aaf1b64cf77ac60427ba34␟1421066576333999335:Loading driver settings...`,[[1,"mb-4","space-y-2"],["class","flex items-center space-x-2",4,"ngIf"],[1,"flex","items-center","space-x-2"],e,[1,"value"],["diameter","24",4,"ngIf"],["mat-button","",3,"click",4,"ngIf"],t,[1,"underline",3,"routerLink"],i,o,s,n,r,["mat-button","",3,"click"],c,[1,"my-4"],[1,"font-medium","text-lg"],l,[4,"ngIf","ngIfElse"],["load_state",""],a,d,["diameter","24"],[3,"merge","id","settings"],[1,"flex","flex-col","items-center","justify-center"],["diameter","48",1,"mb-4"],m]},template:function(e,t){if(1&e&&(m.TgZ(0,"section",0),m.YNc(1,C,5,1,"div",1),m.YNc(2,$,5,1,"div",1),m.TgZ(3,"div",2),m.TgZ(4,"label"),m.SDv(5,3),m.qZA(),m.TgZ(6,"div",4),m._uU(7),m.ALo(8,"async"),m.qZA(),m.YNc(9,I,1,0,"mat-spinner",5),m.ALo(10,"async"),m.YNc(11,J,2,0,"button",6),m.ALo(12,"async"),m.qZA(),m.TgZ(13,"div",2),m.TgZ(14,"label"),m.SDv(15,7),m.qZA(),m.TgZ(16,"div",4),m.TgZ(17,"a",8),m._uU(18),m.qZA(),m.qZA(),m.qZA(),m.TgZ(19,"div",2),m.TgZ(20,"label"),m.SDv(21,9),m.qZA(),m.TgZ(22,"div",4),m._uU(23),m.qZA(),m.qZA(),m.TgZ(24,"div",2),m.TgZ(25,"label"),m.SDv(26,10),m.qZA(),m.TgZ(27,"div",4),m._uU(28),m.qZA(),m.qZA(),m.TgZ(29,"div",2),m.TgZ(30,"label"),m.SDv(31,11),m.qZA(),m.TgZ(32,"div",4),m._uU(33),m.qZA(),m.qZA(),m.TgZ(34,"div",2),m.TgZ(35,"label"),m.SDv(36,12),m.qZA(),m.TgZ(37,"div",4),m._uU(38),m.ALo(39,"dateFrom"),m.qZA(),m.qZA(),m.TgZ(40,"div",2),m.TgZ(41,"label"),m.SDv(42,13),m.qZA(),m.TgZ(43,"div",4),m._uU(44),m.ALo(45,"dateFrom"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(46,"section"),m.TgZ(47,"button",14),m.NdJ("click",function(){return t.recompileDriver()}),m.SDv(48,15),m.qZA(),m.qZA(),m._UZ(49,"hr",16),m.TgZ(50,"header",17),m.SDv(51,18),m.qZA(),m.YNc(52,M,2,3,"section",19),m.YNc(53,S,4,0,"ng-template",null,20,m.W1O)),2&e){const e=m.MAs(54);m.xp6(1),m.Q6J("ngIf",t.item.default_uri),m.xp6(1),m.Q6J("ngIf",t.item.default_port),m.xp6(5),m.hij(" ",m.lcZ(8,14,t.compiled)?"true":"false"," "),m.xp6(2),m.Q6J("ngIf",!m.lcZ(10,16,t.compiled)),m.xp6(2),m.Q6J("ngIf",m.lcZ(12,18,t.compilation_error)),m.xp6(6),m.Q6J("routerLink",m.VKq(24,Q,t.item.repository_id)),m.xp6(1),m.hij(" ",t.item.repository_id,""),m.xp6(5),m.Oqu(t.item.commit),m.xp6(5),m.Oqu(t.item.file_name),m.xp6(5),m.Oqu(null==t.item?null:t.item.module_name),m.xp6(5),m.Oqu(m.lcZ(39,20,1e3*t.item.created_at)),m.xp6(6),m.Oqu(m.lcZ(45,22,1e3*t.item.updated_at)),m.xp6(8),m.Q6J("ngIf",t.item.settings)("ngIfElse",e)}},directives:[o.O5,n.yS,U.lW,D.$g,O.v],pipes:[o.Ov,k.R],styles:["[_nghost-%COMP%]{padding:1rem;height:100%;width:100%}"]}),e})();var F=i(3080),z=i(6283),Y=i(3609),j=i(6756),P=i(6828),R=i(8055),K=i(5204);function V(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"i",30),m.NdJ("modelChange",function(t){return m.CHM(e),m.oxw().$implicit.connected=t}),m.qZA()}if(2&e){const e=m.oxw().$implicit;m.Q6J("model",e.connected)("sys",e.system.id)("mod",e)}}function G(e,t){1&e&&(m.TgZ(0,"div",31),m._UZ(1,"mat-spinner",32),m.TgZ(2,"span"),m._uU(3,"Loading systems..."),m.qZA(),m.qZA()),2&e&&(m.xp6(1),m.Q6J("diameter",32))}const X=function(e){return["/systems",e]};function H(e,t){if(1&e&&(m.TgZ(0,"a",33),m.TgZ(1,"div",34),m.TgZ(2,"div",35),m._uU(3),m.qZA(),m.TgZ(4,"div",36),m._uU(5),m.qZA(),m.qZA(),m.qZA()),2&e){const e=t.$implicit;m.Q6J("routerLink",m.VKq(3,X,e.id)),m.xp6(3),m.hij(" ",e.display_name||e.name," "),m.xp6(2),m.hij(" ",e.id," ")}}const W=function(e){return["/modules",e]},B=function(){return[]};function ee(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"div",15),m.TgZ(1,"div",16),m.YNc(2,V,1,3,"i",17),m._UZ(3,"div",18),m.qZA(),m.TgZ(4,"div",19),m.tHW(5,20),m._UZ(6,"a",21),m.N_p(),m.qZA(),m.TgZ(7,"div",12),m.TgZ(8,"button",22),m.NdJ("click",function(){const t=m.CHM(e).$implicit;return m.oxw(2).loadSystems(t)}),m._UZ(9,"app-icon",23),m.qZA(),m.TgZ(10,"mat-menu",null,24),m.TgZ(12,"div",25),m._uU(13),m.qZA(),m.YNc(14,G,4,1,"div",26),m.YNc(15,H,6,5,"a",27),m.qZA(),m.TgZ(16,"button",28),m.NdJ("click",function(){const t=m.CHM(e).$implicit;return m.oxw(2).removeModule(t)}),m._UZ(17,"app-icon",29),m.qZA(),m.qZA(),m.qZA()}if(2&e){const e=t.$implicit,i=m.MAs(11),o=m.oxw(2);m.xp6(2),m.Q6J("ngIf",e.system),m.xp6(1),m.ekj("bg-error",e.running&&!e.connected)("bg-success",e.running&&e.connected),m.xp6(3),m.Q6J("routerLink",m.VKq(11,W,e.id)),m.pQV(e.custom_name||e.name),m.QtT(5),m.xp6(2),m.Q6J("matMenuTriggerFor",i),m.xp6(5),m.hij(" ",null==o.systems[e.id]?null:o.systems[e.id].length," System(s) "),m.xp6(1),m.Q6J("ngIf",o.loading_systems),m.xp6(1),m.Q6J("ngForOf",o.systems[e.id]||m.DdM(13,B))}}function te(e,t){if(1&e&&(m.TgZ(0,"div",7),m.TgZ(1,"div",8),m.TgZ(2,"div",9),m._uU(3,"State"),m.qZA(),m.TgZ(4,"div",10),m.SDv(5,11),m.qZA(),m._UZ(6,"div",12),m.qZA(),m.TgZ(7,"div",13),m.YNc(8,ee,18,14,"div",14),m.ALo(9,"async"),m.qZA(),m.qZA()),2&e){const e=m.oxw();m.xp6(8),m.Q6J("ngForOf",m.lcZ(9,1,e.modules))}}function ie(e,t){1&e&&(m.TgZ(0,"div",37),m._UZ(1,"mat-spinner",38),m.TgZ(2,"p"),m._uU(3,"Loading modules..."),m.qZA(),m.qZA()),2&e&&(m.xp6(1),m.Q6J("diameter",48))}function oe(e,t){1&e&&(m.TgZ(0,"div",37),m.TgZ(1,"p"),m._uU(2,"No modules with driver"),m.qZA(),m.qZA())}let se=(()=>{class e extends a.K{constructor(e){super(),this._service=e,this.loading_systems=!1,this.filter$=new g.X(""),this.loading=this._service.loading,this.item=this._service.item,this.systems={},this.modules=(0,F.aj)([this.filter$,this._service.modules]).pipe((0,A.U)(e=>{const[t,i]=e,o=t.toLowerCase();return t?i.filter(e=>e.name.toLowerCase().includes(o)||e.custom_name.toLowerCase().includes(o)):i})),this.removeModule=e=>this._service.removeModule(e)}loadSystems(e){return(0,r.mG)(this,void 0,void 0,function*(){this.loading_systems=!0;const t=yield(0,c.vIL)({module_id:e.id}).pipe((0,A.U)(({data:e})=>e)).toPromise();this.systems[e.id]=t||[],this.loading_systems=!1})}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(N))},e.\u0275cmp=m.Xpm({type:e,selectors:[["driver-devices"]],features:[m.qOj],decls:11,vars:5,consts:function(){let e,t;return e=$localize`:@@nameLabel␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`,t=$localize`:@@nameLabel␟bd6c739af47a911fc716b91fef6e9be600cd414a␟5610024539333668683:${"\ufffd#6\ufffd"}:START_LINK: ${"\ufffd0\ufffd"}:INTERPOLATION: ${"\ufffd/#6\ufffd"}:CLOSE_LINK:`,[[1,"flex","items-center","mb-4"],["appearance","outline",1,"h-12","flex-1"],["matPrefix","","className","backoffice-magnifying-glass text-xl mr-2"],["matInput","","placeholder","Filter triggers...",1,"rounded-none",3,"ngModel","ngModelChange"],["role","table","class","overflow-x-auto",4,"ngIf","ngIfElse"],["load_state",""],["empty_state",""],["role","table",1,"overflow-x-auto"],["table-head",""],[1,"w-12","p-2"],["flex","",1,"flex-1","p-2"],e,[1,"w-24","p-2"],["table-body","",1,"overflow-y-auto"],["table-row","",4,"ngFor","ngForOf"],["table-row",""],[1,"w-12","p-2","flex","items-center","justify-center"],["binding","","bind","connected",3,"model","sys","mod","modelChange",4,"ngIf"],[1,"h-2","w-2","rounded-full","bg-black"],["flex","",1,"flex-1","p-2","underline"],t,[3,"routerLink"],["mat-icon-button","","matTooltip","View Systems",3,"matMenuTriggerFor","click"],["className","backoffice-eye"],["menu","matMenu"],[1,"flex","items-center","justify-center","px-2","pb-2","opacity-70","border-b","border-gray-200","text-sm"],["class","flex items-center space-x-2 p-2 text-sm",4,"ngIf"],["mat-menu-item","","class","leading-tight",3,"routerLink",4,"ngFor","ngForOf"],["mat-icon-button","",3,"click"],["className","backoffice-trash"],["binding","","bind","connected",3,"model","sys","mod","modelChange"],[1,"flex","items-center","space-x-2","p-2","text-sm"],[3,"diameter"],["mat-menu-item","",1,"leading-tight",3,"routerLink"],[1,"flex","flex-col","justify-center","px-2","h-full"],[1,"text-base"],[1,"text-xs","opacity-60"],[1,"flex","flex-col","items-center","p-8","mx-auto"],[1,"mb-4",3,"diameter"]]},template:function(e,t){if(1&e&&(m.TgZ(0,"section",0),m.TgZ(1,"mat-form-field",1),m._UZ(2,"app-icon",2),m.TgZ(3,"input",3),m.NdJ("ngModelChange",function(e){return t.filter$.next(e)}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(4,"section"),m.YNc(5,te,10,3,"div",4),m.ALo(6,"async"),m.qZA(),m.YNc(7,ie,4,1,"ng-template",null,5,m.W1O),m.YNc(9,oe,3,0,"ng-template",null,6,m.W1O)),2&e){const e=m.MAs(10);let i;m.xp6(3),m.Q6J("ngModel",""),m.xp6(2),m.Q6J("ngIf",null==(i=m.lcZ(6,3,t.modules))?null:i.length)("ngIfElse",e)}},directives:[z.KE,Y.o,z.qo,j.Nt,s.Fj,s.JJ,s.On,o.O5,o.sg,n.yS,U.lW,P.gM,R.p6,R.VK,K.D,D.$g,R.OP],pipes:[o.Ov],styles:["[_nghost-%COMP%]{padding:1rem;height:100%;width:100%}[role=table][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;min-width:28rem}"]}),e})();var ne=i(3511),re=i(9858);const ce=[{path:":id",component:p,children:[{path:"about",component:E},{path:"modules",component:se},{path:"extend/:id",component:ne.z},{path:"history",component:re.D},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}];var le=i(7561);let ae=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[o.ez,s.u5,n.Bz.forChild(ce),le.X]]}),e})()}}]);