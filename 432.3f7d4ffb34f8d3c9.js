"use strict";(self.webpackChunkbackoffice=self.webpackChunkbackoffice||[]).push([[432],{6179:($e,C,l)=>{l.r(C),l.d(C,{AppModulesModule:()=>De});var c=l(6895),u=l(4719),m=l(6581),M=l(5861),a=l(2837),E=l(591),O=l(1086),F=l(2198),R=l(13),r=l(7545),g=l(5154),A=l(4850),B=l(7221),J=l(2994),v=l(6123),S=l(2016),K=l(7701),e=l(6353),Q=l(5412);let P=(()=>{class t{constructor(o,i){this._state=o,this._dialog=i,this._loading=new E.X(!1),this.loading=this._loading.asObservable(),this.item=this._state.item.pipe((0,F.h)(n=>n instanceof a.SQz)),this.associated_settings=this._state.active_item$.pipe((0,R.b)(300),(0,r.w)(n=>n&&n instanceof a.SQz?(0,a.eRm)(n.id):[])),this.driver=this.item.pipe((0,r.w)(n=>(0,a.L4d)(n.driver_id)),(0,g.d)(1)),this.system=this.item.pipe((0,r.w)(n=>n.system_id?(0,a.hMA)(n.system_id):(0,O.of)(null)),(0,g.d)(1)),this.edge=this.item.pipe((0,r.w)(n=>n.edge_id?(0,a.Jhn)(n.edge_id):(0,O.of)(null)),(0,g.d)(1)),this.system_list=this.item.pipe((0,r.w)(n=>(this._loading.next(!0),console.log("Loading Systems..."),(0,a.vIL)({module_id:n.id}))),(0,A.U)(n=>n.data),(0,B.K)(()=>[]),(0,J.b)(n=>this._loading.next(!1)),(0,g.d)(1))}get active_item(){return this._state.active_item}toggleModuleState(){var o=this;return(0,M.Z)(function*(){const n=yield(o.active_item.running?a.iAP:a.Dqv)(o.active_item.id).pipe((0,A.U)(d=>null)).toPromise().catch(d=>d);if(n)return console.log("Error:",n),void("string"==typeof n&&n.length<64?(0,S.cB)(n):(0,S.cB)(`Failed to ${o.active_item.running?"stop":"start"} device '${o.active_item.id}'.\nView Error?`,"View",()=>o.viewDetails(n)));(0,S.t5)("Module successfully "+(o.active_item.running?"stopped":"started")),o.active_item.running=!o.active_item.running})()}viewDetails(o){this._dialog.open(K.a,{data:{content:o}})}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(v.L),e.LFG(Q.uw))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var T=l(5341),X=l(3436),L=l(4859),b=l(1572),N=l(266),h=l(3499);function G(t,s){if(1&t&&(e.TgZ(0,"div",13)(1,"label"),e.SDv(2,14),e.qZA(),e.TgZ(3,"div",15),e._uU(4),e.qZA()()),2&t){const o=e.oxw();e.xp6(4),e.Oqu(o.item.notes)}}function Y(t,s){if(1&t&&(e.TgZ(0,"div",13)(1,"label"),e.SDv(2,16),e.qZA(),e.TgZ(3,"div",15),e._uU(4),e.qZA()()),2&t){const o=e.oxw();e.xp6(4),e.Oqu(o.item.ip)}}function w(t,s){if(1&t&&(e.TgZ(0,"div",13)(1,"label"),e.SDv(2,17),e.qZA(),e.TgZ(3,"div",15),e._uU(4),e.qZA()()),2&t){const o=e.oxw();e.xp6(4),e.Oqu(o.item.port)}}function z(t,s){1&t&&(e.TgZ(0,"code",20),e._uU(1,"TLS"),e.qZA())}function q(t,s){1&t&&(e.TgZ(0,"code",20),e._uU(1,"UDP"),e.qZA())}function j(t,s){if(1&t&&(e.TgZ(0,"div",13)(1,"label"),e.SDv(2,18),e.qZA(),e.YNc(3,z,2,0,"code",19),e.YNc(4,q,2,0,"code",19),e.qZA()),2&t){const o=e.oxw();e.xp6(3),e.Q6J("ngIf",o.item.tls),e.xp6(1),e.Q6J("ngIf",o.item.udp)}}function V(t,s){if(1&t&&(e.TgZ(0,"div",13)(1,"label"),e.SDv(2,21),e.qZA(),e.TgZ(3,"div",15),e._uU(4),e.ALo(5,"dateFrom"),e.qZA()()),2&t){const o=e.oxw();e.xp6(4),e.hij(" ",e.lcZ(5,1,1e3*o.item.created_at)," ")}}function W(t,s){if(1&t&&(e.TgZ(0,"div",13)(1,"label"),e.SDv(2,22),e.qZA(),e.TgZ(3,"div",15),e._uU(4),e.ALo(5,"dateFrom"),e.qZA()()),2&t){const o=e.oxw();e.xp6(4),e.hij(" ",e.lcZ(5,1,1e3*o.item.updated_at)," ")}}const k=function(t){return["/drivers",t]};function H(t,s){if(1&t&&(e.TgZ(0,"div",13)(1,"label"),e.SDv(2,23),e.qZA(),e.TgZ(3,"a",24),e._uU(4),e.ALo(5,"async"),e.qZA()()),2&t){const o=e.oxw();e.xp6(3),e.Q6J("routerLink",e.VKq(4,k,o.item.driver_id)),e.xp6(1),e.hij(" ",e.lcZ(5,2,o.driver).name||"<Unnamed>"," ")}}const ee=function(t){return["/systems",t,"modules"]};function te(t,s){if(1&t&&(e.TgZ(0,"div",13)(1,"label"),e.SDv(2,25),e.qZA(),e.TgZ(3,"a",24),e.ALo(4,"async"),e._uU(5),e.ALo(6,"async"),e.qZA()()),2&t){const o=e.oxw();e.xp6(3),e.Q6J("routerLink",e.VKq(6,ee,e.lcZ(4,2,o.system).id)),e.xp6(2),e.hij(" ",e.lcZ(6,4,o.system).name," ")}}function oe(t,s){if(1&t&&(e._UZ(0,"app-icon",29),e.ALo(1,"async")),2&t){const o=e.oxw(2);e.Q6J("matTooltip",e.lcZ(1,1,o.edge).description)}}const ne=function(t){return["/admin","edge",t]};function ie(t,s){if(1&t&&(e.TgZ(0,"div",13)(1,"label"),e.SDv(2,26),e.qZA(),e.TgZ(3,"a",27),e.ALo(4,"async"),e._uU(5),e.ALo(6,"async"),e.qZA(),e.YNc(7,oe,2,3,"app-icon",28),e.ALo(8,"async"),e.qZA()),2&t){const o=e.oxw();e.xp6(3),e.Q6J("routerLink",e.VKq(9,ne,e.lcZ(4,3,o.edge).id)),e.xp6(2),e.hij(" ",e.lcZ(6,5,o.edge).name," "),e.xp6(2),e.Q6J("ngIf",e.lcZ(8,7,o.edge).description)}}function se(t,s){1&t&&(e.TgZ(0,"div",30),e.SDv(1,31),e.qZA())}function le(t,s){1&t&&e._UZ(0,"mat-spinner",32)}function de(t,s){1&t&&(e.TgZ(0,"div",30),e.SDv(1,33),e.qZA())}function _e(t,s){1&t&&e._UZ(0,"mat-spinner",32)}const ae=function(){return[]};function ce(t,s){if(1&t&&(e.TgZ(0,"section"),e._UZ(1,"a-settings-form",34),e.ALo(2,"async"),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("id",o.item.id)("merge",!0)("settings",o.item.settings)("merge_settings",e.lcZ(2,4,o.other_settings)||e.DdM(6,ae))}}function re(t,s){1&t&&(e.TgZ(0,"div",35),e._UZ(1,"mat-spinner",36),e.TgZ(2,"p"),e.SDv(3,37),e.qZA()())}let ue=(()=>{class t{constructor(o){this._service=o,this.driver=this._service.driver,this.system=this._service.system,this.edge=this._service.edge,this.other_settings=this._service.associated_settings}get item(){return this._service.active_item}toggleModuleState(){var o=this;return(0,M.Z)(function*(){o.stopping=!0,yield o._service.toggleModuleState(),o.stopping=!1})()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(P))},t.\u0275cmp=e.Xpm({type:t,selectors:[["module-about"]],decls:30,vars:25,consts:function(){let s,o,i,n,d,f,p,Z,x,y,I,D,$;return s=$localize`:@@settingsLabel␟5ba97a3f90a79c4d7720b941ae416c8c84337e38␟180274732945114229: Settings `,o=$localize`:@moduleNotesLabel␟3b193ba24bd715ed412f5419df3acb59090141d3␟8421971980013015956:Notes:`,i=$localize`:@moduleIPLabel␟8271bb466916303dc1516952bf50e7e6626f7b2c␟253752108238785328:IP:`,n=$localize`:@modulePortLabel␟a2ceedad860954f374fc1ac8bae057292b1cec2e␟6167294183925653141:Port:`,d=$localize`:@moduleTLSLabel␟2a29507802055ca7586062ecd0486e58728951ae␟6065664962291805568:Protocol:`,f=$localize`:@@moduleCreatedAtLabel␟a5ed099ffc9e96f6970df843289ade8a7d20ab9f␟1616250945945379783:Created:`,p=$localize`:@moduleUpdatedAtLabel␟f94240161f912dbd8758b858877cddeab80f36cb␟1116759395536210856:Updated:`,Z=$localize`:@moduleUpdatedAtLabel␟797f76e214854e3930b89347440a035b92fb3adb␟1174891546565206449:Driver:`,x=$localize`:@moduleUpdatedAtLabel␟aaeaff696111bf2df60b2d2df331ca5c1d7dc4e2␟6879447585908883888:System:`,y=$localize`:@moduleUpdatedAtLabel␟525d5d95cec8023f0a7731221cbb54c8d0bef974␟2879840756579543656:Edge:`,I=$localize`:@@moduleStartStateToggle␟63edb7870dab5d1f8ae331fd7c34b8bf1173e98b␟6794353257757367522: Start Module `,D=$localize`:@@moduleStopStateToggle␟d0bb337e9772ba341dc5451a405a03af69654df8␟9034986550821411231: Stop Module `,$=$localize`:@@moduleDetailsLoading␟cb7cffb188a2b0bce758e40f67c29387dd6ccfcf␟3678638452756535871:Loading module settings...`,[[1,"space-x-2","flex"],[1,"rounded","p-2","border","border-gray-200","dark:border-neutral-500","space-y-2","w-1/3","flex-1"],["class","flex items-center space-x-2",4,"ngIf"],[1,"rounded","p-2","border","border-gray-200","dark:border-neutral-500","space-y-2","w-1/3","flex-1","flex","flex-col"],[1,"w-full","text-center"],["mat-button","",1,"w-full",3,"disabled","click"],["class","text",4,"ngIf"],["diameter","32",4,"ngIf"],[1,"my-4"],[1,"font-medium","text-lg"],s,[4,"ngIf","ngIfElse"],["load_state",""],[1,"flex","items-center","space-x-2"],o,[1,"value"],i,n,d,["class","bg-success text-white",4,"ngIf"],[1,"bg-success","text-white"],f,p,Z,[1,"underline",3,"routerLink"],x,y,[1,"underline","flex-1",3,"routerLink"],["className","backoffice-info","class","border border-gray-200 dark:border-neutral-500 rounded-full",3,"matTooltip",4,"ngIf"],["className","backoffice-info",1,"border","border-gray-200","dark:border-neutral-500","rounded-full",3,"matTooltip"],[1,"text"],I,["diameter","32"],D,[3,"id","merge","settings","merge_settings"],[1,"p-8","flex","flex-col","items-center","justify-center","m-auto"],["diameter","48",1,"mb-4"],$]},template:function(o,i){if(1&o&&(e.TgZ(0,"section",0)(1,"div",1),e.YNc(2,G,5,1,"div",2),e.YNc(3,Y,5,1,"div",2),e.YNc(4,w,5,1,"div",2),e.YNc(5,j,5,2,"div",2),e.YNc(6,V,6,3,"div",2),e.YNc(7,W,6,3,"div",2),e.YNc(8,H,6,6,"div",2),e.ALo(9,"async"),e.YNc(10,te,7,8,"div",2),e.ALo(11,"async"),e.YNc(12,ie,9,11,"div",2),e.ALo(13,"async"),e.qZA(),e.TgZ(14,"div",3)(15,"h3",4),e._uU(16,"Module Controls"),e.qZA(),e.TgZ(17,"button",5),e.NdJ("click",function(){return i.toggleModuleState()}),e.YNc(18,se,2,0,"div",6),e.YNc(19,le,1,0,"mat-spinner",7),e.qZA(),e.TgZ(20,"button",5),e.NdJ("click",function(){return i.toggleModuleState()}),e.YNc(21,de,2,0,"div",6),e.YNc(22,_e,1,0,"mat-spinner",7),e.qZA()()(),e._UZ(23,"hr",8),e.TgZ(24,"header",9),e.SDv(25,10),e.qZA(),e.YNc(26,ce,3,7,"section",11),e.ALo(27,"async"),e.YNc(28,re,4,0,"ng-template",null,12,e.W1O)),2&o){const n=e.MAs(29);e.xp6(2),e.Q6J("ngIf",i.item.notes),e.xp6(1),e.Q6J("ngIf",i.item.ip),e.xp6(1),e.Q6J("ngIf",i.item.port>1),e.xp6(1),e.Q6J("ngIf",i.item.tls||i.item.udp),e.xp6(1),e.Q6J("ngIf",i.item.created_at),e.xp6(1),e.Q6J("ngIf",i.item.updated_at),e.xp6(1),e.Q6J("ngIf",e.lcZ(9,17,i.driver)),e.xp6(2),e.Q6J("ngIf",e.lcZ(11,19,i.system)),e.xp6(2),e.Q6J("ngIf",e.lcZ(13,21,i.edge)),e.xp6(5),e.Q6J("disabled",i.item.running||i.stopping),e.xp6(1),e.Q6J("ngIf",!i.stopping),e.xp6(1),e.Q6J("ngIf",i.stopping),e.xp6(1),e.Q6J("disabled",!i.item.running||i.stopping),e.xp6(1),e.Q6J("ngIf",!i.stopping),e.xp6(1),e.Q6J("ngIf",i.stopping),e.xp6(4),e.Q6J("ngIf",i.item.settings&&e.lcZ(27,23,i.other_settings))("ngIfElse",n)}},dependencies:[c.O5,m.yS,T.o,X.v,L.lW,b.Ou,N.gM,c.Ov,h.R],styles:["[_nghost-%COMP%]{height:100%;width:100%}label[_ngcontent-%COMP%]{width:4rem}"]}),t})();var me=l(3426),U=l(9549),ge=l(4144);const fe=function(t){return["/systems",t]};function pe(t,s){if(1&t&&(e.TgZ(0,"div",18)(1,"div",19)(2,"a",20),e._uU(3),e.qZA()(),e.TgZ(4,"div",12),e._uU(5),e.qZA(),e.TgZ(6,"div",14),e._uU(7),e.ALo(8,"dateFrom"),e.qZA()()),2&t){const o=s.$implicit;e.xp6(2),e.Q6J("routerLink",e.VKq(6,fe,o.id)),e.xp6(1),e.Oqu(o.name),e.xp6(2),e.hij(" ",o.installed_ui_devices||"0"," "),e.xp6(2),e.hij(" ",e.lcZ(8,4,1e3*o.created_at)," ")}}function Me(t,s){if(1&t&&(e.TgZ(0,"div",8)(1,"div",9)(2,"div",10),e.SDv(3,11),e.qZA(),e.TgZ(4,"div",12),e.SDv(5,13),e.qZA(),e.TgZ(6,"div",14),e.SDv(7,15),e.qZA()(),e.TgZ(8,"div",16),e.YNc(9,pe,9,8,"div",17),e.ALo(10,"async"),e.qZA()()),2&t){const o=e.oxw(2);e.xp6(9),e.Q6J("ngForOf",e.lcZ(10,1,o.system_list))}}function Ae(t,s){if(1&t&&(e.TgZ(0,"section"),e.YNc(1,Me,11,3,"div",7),e.ALo(2,"async"),e.qZA()),2&t){const o=e.oxw(),i=e.MAs(9);let n;e.xp6(1),e.Q6J("ngIf",null==(n=e.lcZ(2,2,o.system_list))?null:n.length)("ngIfElse",i)}}function Se(t,s){1&t&&(e.TgZ(0,"div",21),e._UZ(1,"mat-spinner",22),e.TgZ(2,"p"),e._uU(3,"Loading systems..."),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("diameter",48))}function Te(t,s){1&t&&(e.TgZ(0,"div",21)(1,"p"),e._uU(2,"No systems with module"),e.qZA()())}let Ce=(()=>{class t{constructor(o){this._service=o,this.filter$=new E.X(""),this.loading=this._service.loading,this.system_list=(0,me.aj)([this.filter$,this._service.system_list]).pipe((0,A.U)(i=>{const[n,d]=i,f=n.toLowerCase();return n?d.filter(p=>p.name.toLowerCase().includes(f)):d}))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(P))},t.\u0275cmp=e.Xpm({type:t,selectors:[["module-systems"]],decls:10,vars:5,consts:function(){let s,o,i;return s=$localize`:@@nameLabel␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`,o=$localize`:@@systemLabel␟6c24d3e08bc16576fbd5580dc255a31c4b08c366␟8919524640139321287:No. Modules`,i=$localize`:@@createdLabel␟1b051734b0ee9021991c91b3ed4e81c244322462␟4207916966377787111:Created`,[[1,"flex","items-center","mb-4"],["appearance","outline",1,"h-12","flex-1"],["matPrefix","","className","backoffice-magnifying-glass text-xl mr-2"],["matInput","","placeholder","Filter systems...",1,"rounded-none",3,"ngModel","ngModelChange"],[4,"ngIf","ngIfElse"],["load_state",""],["empty_state",""],["role","table","class","overflow-x-auto",4,"ngIf","ngIfElse"],["role","table",1,"overflow-x-auto"],["table-head",""],["flex","",1,"flex-1","p-2"],s,[1,"w-48","p-2"],o,[1,"w-36","p-2"],i,["table-body","",1,"overflow-y-auto"],["table-row","",4,"ngFor","ngForOf"],["table-row",""],["flex","",1,"flex-1","p-2","underline"],[3,"routerLink"],[1,"flex","flex-col","items-center","p-8","mx-auto"],[1,"mb-4",3,"diameter"]]},template:function(o,i){if(1&o&&(e.TgZ(0,"section",0)(1,"mat-form-field",1),e._UZ(2,"app-icon",2),e.TgZ(3,"input",3),e.NdJ("ngModelChange",function(d){return i.filter$.next(d)}),e.qZA()()(),e.YNc(4,Ae,3,4,"section",4),e.ALo(5,"async"),e.YNc(6,Se,4,1,"ng-template",null,5,e.W1O),e.YNc(8,Te,3,0,"ng-template",null,6,e.W1O)),2&o){const n=e.MAs(7);e.xp6(3),e.Q6J("ngModel",""),e.xp6(1),e.Q6J("ngIf",!e.lcZ(5,3,i.loading))("ngIfElse",n)}},dependencies:[c.sg,c.O5,u.Fj,u.JJ,u.On,m.yS,T.o,U.KE,U.qo,ge.Nt,b.Ou,c.Ov,h.R],styles:["[_nghost-%COMP%]{height:100%;width:100%}"]}),t})();var Ee=l(9960),Oe=l(5558),ve=l(8537),Pe=l(1843),Le=l(4834),be=l(3409),Ne=l(3182),he=l(1535),Ue=l(1551),Ze=l(3238);function xe(t,s){if(1&t){const o=e.EpF();e.ynx(0),e._UZ(1,"item-details",11)(2,"item-tablist",12),e.TgZ(3,"div",13,14),e.NdJ("scroll",function(){e.CHM(o);const n=e.MAs(4),d=e.oxw();return e.KtG(d.scroll=n.scrollTop)}),e._UZ(5,"router-outlet"),e.qZA(),e.BQk()}if(2&t){const o=e.oxw();e.xp6(1),e.Q6J("can_edit",!0)("item",o.item),e.xp6(1),e.Q6J("base",o.name)("tabs",o.tab_list)("scrolled",o.scroll>0)}}const ye=[{path:":id",component:(()=>{class t extends Pe.K{constructor(o){super(),this._service=o,this.open_menu=!1,this.name="modules",this.tab_list=[],this.newItem=()=>this._service.create()}get item(){return this._service.active_item}get extensions(){return(0,ve.fq)(this._service.active_item,this.name)}updateTabList(){this.tab_list=[{id:"about",name:"About",icon:{class:"backoffice-info-with-circle"}},{id:"systems",name:"Systems",count:this.system_count,icon:{class:"backoffice-documents"}},{id:"history",name:"Settings History",icon:{class:"backoffice-clock"}}].concat(this.extensions)}ngOnInit(){this.subscription("item",this._service.item.subscribe(o=>{this.loadValues(o),this.updateTabList()})),this.updateTabList()}loadValues(o){var i=this;return(0,M.Z)(function*(){if(!o)return;const n={offset:0,limit:1,module_id:o.id};i.system_count=(yield(0,a.vIL)(n).toPromise()).total})()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(v.L))},t.\u0275cmp=e.Xpm({type:t,selectors:[["new-modules-view"]],features:[e.qOj],decls:11,vars:5,consts:[[1,"absolute","inset-0","flex","items-center","divide-y","sm:divide-y-0","sm:divide-x","divide-gray-300","dark:divide-neutral-600","bg-white","dark:bg-neutral-700"],[1,"sm:h-full",3,"open","openChange"],["title","Modules",1,"hidden","sm:block",3,"route"],[1,"flex-1","w-1/2","h-full","relative","flex","flex-col","z-0"],["title","Modules",1,"z-20","sm:hidden",3,"route"],["mat-icon-button","",1,"sm:hidden","mr-2",3,"click"],["className","backoffice-menu"],[1,"flex","flex-col","flex-1","h-1/2"],[4,"ngIf"],["matTooltip","New module","matTooltipPosition","right","matRipple","",1,"absolute","bottom-2","left-2","sm:-left-9","w-12","h-12","flex","items-center","justify-center","bg-primary","dark:bg-pink","rounded-lg","shadow","z-30","text-white",3,"click"],[1,"text-3xl",3,"className"],["type","Module",3,"can_edit","item"],[1,"z-10",3,"base","tabs","scrolled"],[1,"flex-1","h-1/2","w-full","overflow-auto","p-4","z-0","relative",3,"scroll"],["el",""]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"sidebar-menu",1),e.NdJ("openChange",function(d){return i.open_menu=d}),e.qZA(),e._UZ(2,"item-sidebar",2),e.TgZ(3,"div",3)(4,"item-selection",4)(5,"button",5),e.NdJ("click",function(){return i.open_menu=!0}),e._UZ(6,"app-icon",6),e.qZA()(),e.TgZ(7,"div",7),e.YNc(8,xe,6,5,"ng-container",8),e.qZA(),e.TgZ(9,"button",9),e.NdJ("click",function(){return i.newItem()}),e._UZ(10,"app-icon",10),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("open",i.open_menu),e.xp6(1),e.Q6J("route",i.name),e.xp6(2),e.Q6J("route",i.name),e.xp6(4),e.Q6J("ngIf",null==i.item?null:i.item.id),e.xp6(2),e.Q6J("className","backoffice-plus"))},dependencies:[c.O5,m.lC,T.o,Le.$,be.V,Ne.K,he.r,Ue.l,L.lW,N.gM,Ze.wG]}),t})(),children:[{path:"about",component:ue},{path:"systems",component:Ce},{path:"extend/:id",component:Ee.z},{path:"history",component:Oe.D},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}];var Ie=l(4524);let De=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,u.u5,m.Bz.forChild(ye),Ie.X]}),t})()}}]);