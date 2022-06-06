"use strict";(self.webpackChunkbackoffice=self.webpackChunkbackoffice||[]).push([[432],{6179:(U_,f,n)=>{n.r(f),n.d(f,{AppModulesModule:()=>T_});var E=n(9808),a=n(4182),C=n(6741),u=n(655),S=n(2837),T=n(6123),B=n(1843),D=n(8537),_=n(9863),b=n(9101),y=n(1609);let Z=(()=>{class e extends B.K{constructor(t){super(),this._service=t,this.name="modules",this.show_options=this._service.show_options,this.tab_list=[]}get extensions(){return(0,D.fq)(this._service.active_item,this.name)}updateTabList(){this.tab_list=[{id:"about",name:"About",icon:{class:"backoffice-info-with-circle"}},{id:"systems",name:"Systems",count:this.system_count,icon:{class:"backoffice-documents"}},{id:"history",name:"Settings History",icon:{class:"backoffice-clock"}}].concat(this.extensions)}ngOnInit(){this.subscription("item",this._service.item.subscribe(t=>{this.loadValues(t),this.updateTabList()})),this.updateTabList()}loadValues(t){return(0,u.mG)(this,void 0,void 0,function*(){if(!t)return;const o={offset:0,limit:1,module_id:t.id};this.system_count=(yield(0,S.vIL)(o).toPromise()).total})}}return e.\u0275fac=function(t){return new(t||e)(_.Y36(T.L))},e.\u0275cmp=_.Xpm({type:e,selectors:[["app-modules"]],features:[_.qOj],decls:3,vars:1,consts:[[1,"flex-1","flex-col","sm:flex-row","flex","h-full","w-full","relative"],["heading","Modules","name","modules",1,"absolute","top-0","left-0","h-12","w-full","sm:h-full","sm:static"],["name","module","route","modules",1,"flex-1","relative","mt-12","sm:mt-0","w-full","sm:w-1/2",3,"tabs"]],template:function(t,o){1&t&&(_.TgZ(0,"div",0),_._UZ(1,"sidebar",1)(2,"item-display",2),_.qZA()),2&t&&(_.xp6(2),_.Q6J("tabs",o.tab_list))},directives:[b.k,y.s],styles:["sidebar[_ngcontent-%COMP%]{transition:height .3s}@media screen and (min-width: 640px){sidebar[_ngcontent-%COMP%]{width:20em!important}}"]}),e})();var U=n(591),x=n(1086),$=n(2198),K=n(13),O=n(7545),m=n(5154),r=n(4850),X=n(7221),G=n(2994),g=n(2016),J=n(7701),Y=n(8966);let p=(()=>{class e{constructor(t,o){this._state=t,this._dialog=o,this._loading=new U.X(!1),this.loading=this._loading.asObservable(),this.item=this._state.item.pipe((0,$.h)(i=>i instanceof S.SQz)),this.associated_settings=this._state.all_item.pipe((0,K.b)(300),(0,O.w)(i=>i&&i instanceof S.SQz?(0,S.eRm)(i.id):[])),this.driver=this.item.pipe((0,O.w)(i=>(0,S.L4d)(i.driver_id)),(0,m.d)(1)),this.system=this.item.pipe((0,O.w)(i=>i.system_id?(0,S.hMA)(i.system_id):(0,x.of)(null)),(0,m.d)(1)),this.system_list=this.item.pipe((0,O.w)(i=>(this._loading.next(!0),console.log("Loading Systems..."),(0,S.vIL)({module_id:i.id}))),(0,r.U)(i=>i.data),(0,X.K)(()=>[]),(0,G.b)(i=>this._loading.next(!1)),(0,m.d)(1))}get active_item(){return this._state.active_item}toggleModuleState(){return(0,u.mG)(this,void 0,void 0,function*(){const o=yield(this.active_item.running?S.iAP:S.Dqv)(this.active_item.id).pipe((0,r.U)(i=>null)).toPromise().catch(i=>i);if(o)return console.log("Error:",o),void("string"==typeof o&&o.length<64?(0,g.cB)(o):(0,g.cB)(`Failed to ${this.active_item.running?"stop":"start"} device '${this.active_item.id}'.\nView Error?`,"View",()=>this.viewDetails(o)));(0,g.t5)("Module successfully "+(this.active_item.running?"stopped":"started")),this.active_item.running=!this.active_item.running})}viewDetails(t){this._dialog.open(J.a,{data:{content:t}})}}return e.\u0275fac=function(t){return new(t||e)(_.LFG(T.L),_.LFG(Y.uw))},e.\u0275prov=_.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Q=n(7423),P=n(773),z=n(3436),L=n(490);function w(e,s){if(1&e&&(_.TgZ(0,"div",2)(1,"label"),_.SDv(2,14),_.qZA(),_.TgZ(3,"div",4),_._uU(4),_.qZA()()),2&e){const t=_.oxw();_.xp6(4),_.Oqu(t.item.notes)}}function q(e,s){if(1&e&&(_.TgZ(0,"div",2)(1,"label"),_.SDv(2,15),_.qZA(),_.TgZ(3,"div",4),_._uU(4),_.qZA()()),2&e){const t=_.oxw();_.xp6(4),_.Oqu(t.item.ip)}}function V(e,s){if(1&e&&(_.TgZ(0,"div",2)(1,"label"),_.SDv(2,16),_.qZA(),_.TgZ(3,"div",4),_._uU(4),_.qZA()()),2&e){const t=_.oxw();_.xp6(4),_.Oqu(t.item.port)}}function j(e,s){if(1&e&&(_.TgZ(0,"div",2)(1,"label"),_.SDv(2,17),_.qZA(),_.TgZ(3,"div",4),_._uU(4),_.ALo(5,"dateFrom"),_.qZA()()),2&e){const t=_.oxw();_.xp6(4),_.Oqu(_.lcZ(5,1,1e3*t.item.created_at))}}function W(e,s){if(1&e&&(_.TgZ(0,"div",2)(1,"label"),_.SDv(2,18),_.qZA(),_.TgZ(3,"div",4),_._uU(4),_.ALo(5,"dateFrom"),_.qZA()()),2&e){const t=_.oxw();_.xp6(4),_.Oqu(_.lcZ(5,1,1e3*t.item.updated_at))}}const H=function(e){return["/drivers",e]};function k(e,s){if(1&e&&(_.TgZ(0,"div",2)(1,"label"),_.SDv(2,19),_.qZA(),_.TgZ(3,"a",20),_._uU(4),_.ALo(5,"async"),_.qZA()()),2&e){const t=_.oxw();_.xp6(3),_.Q6J("routerLink",_.VKq(4,H,t.item.driver_id)),_.xp6(1),_.hij(" ",_.lcZ(5,2,t.driver).name||"<Unnamed>"," ")}}const __=function(e){return["/systems",e,"modules"]};function e_(e,s){if(1&e&&(_.TgZ(0,"div",2)(1,"label"),_.SDv(2,21),_.qZA(),_.TgZ(3,"a",20),_.ALo(4,"async"),_._uU(5),_.ALo(6,"async"),_.qZA()()),2&e){const t=_.oxw();_.xp6(3),_.Q6J("routerLink",_.VKq(6,__,_.lcZ(4,2,t.system).id)),_.xp6(2),_.hij(" ",_.lcZ(6,4,t.system).name," ")}}function t_(e,s){if(1&e&&(_.TgZ(0,"div",22),_.SDv(1,23),_.qZA()),2&e){const t=_.oxw();_.xp6(1),_.pQV(t.item.running),_.QtT(1)}}function o_(e,s){1&e&&_._UZ(0,"mat-spinner",24)}const n_=function(){return[]};function i_(e,s){if(1&e&&(_.TgZ(0,"section"),_._UZ(1,"a-settings-form",25),_.ALo(2,"async"),_.qZA()),2&e){const t=_.oxw();_.xp6(1),_.Q6J("id",t.item.id)("merge",!0)("settings",t.item.settings)("merge_settings",_.lcZ(2,4,t.other_settings)||_.DdM(6,n_))}}function s_(e,s){1&e&&(_.TgZ(0,"div",26),_._UZ(1,"mat-spinner",27),_.TgZ(2,"p"),_.SDv(3,28),_.qZA()())}let l_=(()=>{class e{constructor(t){this._service=t,this.driver=this._service.driver,this.system=this._service.system,this.other_settings=this._service.associated_settings}get item(){return this._service.active_item}toggleModuleState(){return(0,u.mG)(this,void 0,void 0,function*(){this.stopping=!0,yield this._service.toggleModuleState(),this.stopping=!1})}}return e.\u0275fac=function(t){return new(t||e)(_.Y36(p))},e.\u0275cmp=_.Xpm({type:e,selectors:[["module-about"]],decls:32,vars:20,consts:function(){let s,t,o,i,d,A,c,v,R,N,M,I,h;return s=$localize`:@moduleTLSLabel␟fc14542d8661d50a55ec617e759b8275266b4084␟6787048658913260060:TLS:`,t=$localize`:@moduleUDPLabel␟45a627302b2be9d4d92e8361c28128b8747a3a76␟9217682045572066115:UDP:`,o=$localize`:@@settingsLabel␟121cc5391cd2a5115bc2b3160379ee5b36cd7716␟4930506384627295710:Settings`,i=$localize`:@moduleNotesLabel␟3b193ba24bd715ed412f5419df3acb59090141d3␟8421971980013015956:Notes:`,d=$localize`:@moduleIPLabel␟8271bb466916303dc1516952bf50e7e6626f7b2c␟253752108238785328:IP:`,A=$localize`:@modulePortLabel␟a2ceedad860954f374fc1ac8bae057292b1cec2e␟6167294183925653141:Port:`,c=$localize`:@@moduleCreatedAtLabel␟a5ed099ffc9e96f6970df843289ade8a7d20ab9f␟1616250945945379783:Created:`,v=$localize`:@moduleUpdatedAtLabel␟f94240161f912dbd8758b858877cddeab80f36cb␟1116759395536210856:Updated:`,R=$localize`:@moduleUpdatedAtLabel␟797f76e214854e3930b89347440a035b92fb3adb␟1174891546565206449:Driver:`,N=$localize`:@moduleUpdatedAtLabel␟9680e97832208eb205d7d7e643c30265d8b4e9f5␟4615578067123890535:Logic for system:`,M=$localize`:␟2e434410a64453fd12259ac38cfcb4f7b4b26137␟2537520834646109979:{VAR_SELECT, select, true {Stop Module } false {Start Module }}`,M=_.Zx4(M,{VAR_SELECT:"\ufffd0\ufffd"}),I=$localize`:@@moduleStateToggle␟d09fa3d7f10a3f4ba1dbb8ede1ea6f993f0adc3b␟6594646568873405470: ${M}:ICU: `,h=$localize`:@@moduleDetailsLoading␟cb7cffb188a2b0bce758e40f67c29387dd6ccfcf␟3678638452756535871:Loading module settings...`,[[1,"space-y-2"],["class","flex items-center space-x-2",4,"ngIf"],[1,"flex","items-center","space-x-2"],s,[1,"value"],t,[1,"my-4"],["mat-button","",1,"w-32",3,"disabled","click"],["class","text",4,"ngIf"],["diameter","32",4,"ngIf"],[1,"font-medium","text-lg"],o,[4,"ngIf","ngIfElse"],["load_state",""],i,d,A,c,v,R,[1,"underline",3,"routerLink"],N,[1,"text"],I,["diameter","32"],[3,"id","merge","settings","merge_settings"],[1,"p-8","flex","flex-col","items-center","justify-center","m-auto"],["diameter","48",1,"mb-4"],h]},template:function(t,o){if(1&t&&(_.TgZ(0,"section",0),_.YNc(1,w,5,1,"div",1),_.YNc(2,q,5,1,"div",1),_.YNc(3,V,5,1,"div",1),_.TgZ(4,"div",2)(5,"label"),_.SDv(6,3),_.qZA(),_.TgZ(7,"div",4),_._uU(8),_.qZA()(),_.TgZ(9,"div",2)(10,"label"),_.SDv(11,5),_.qZA(),_.TgZ(12,"div",4),_._uU(13),_.qZA()(),_.YNc(14,j,6,3,"div",1),_.YNc(15,W,6,3,"div",1),_.YNc(16,k,6,6,"div",1),_.ALo(17,"async"),_.YNc(18,e_,7,8,"div",1),_.ALo(19,"async"),_.qZA(),_._UZ(20,"hr",6),_.TgZ(21,"section")(22,"button",7),_.NdJ("click",function(){return o.toggleModuleState()}),_.YNc(23,t_,2,1,"div",8),_.YNc(24,o_,1,0,"mat-spinner",9),_.qZA()(),_._UZ(25,"hr",6),_.TgZ(26,"header",10),_.SDv(27,11),_.qZA(),_.YNc(28,i_,3,7,"section",12),_.ALo(29,"async"),_.YNc(30,s_,4,0,"ng-template",null,13,_.W1O)),2&t){const i=_.MAs(31);_.xp6(1),_.Q6J("ngIf",o.item.notes),_.xp6(1),_.Q6J("ngIf",o.item.ip),_.xp6(1),_.Q6J("ngIf",o.item.port),_.xp6(5),_.Oqu(o.item.tls),_.xp6(5),_.Oqu(o.item.udp),_.xp6(1),_.Q6J("ngIf",o.item.created_at),_.xp6(1),_.Q6J("ngIf",o.item.updated_at),_.xp6(1),_.Q6J("ngIf",_.lcZ(17,14,o.driver)),_.xp6(2),_.Q6J("ngIf",_.lcZ(19,16,o.system)),_.xp6(4),_.Q6J("disabled",o.stopping),_.xp6(1),_.Q6J("ngIf",!o.stopping),_.xp6(1),_.Q6J("ngIf",o.stopping),_.xp6(4),_.Q6J("ngIf",o.item.settings&&_.lcZ(29,18,o.other_settings))("ngIfElse",i)}},directives:[E.O5,C.yS,Q.lW,P.Ou,z.v],pipes:[L.R,E.Ov],styles:["[_nghost-%COMP%]{padding:1rem;height:100%;width:100%}"]}),e})();var S_=n(3426),F=n(7322),d_=n(1259),E_=n(7531);const a_=function(e){return["/systems",e]};function O_(e,s){if(1&e&&(_.TgZ(0,"div",18)(1,"div",19)(2,"a",20),_._uU(3),_.qZA()(),_.TgZ(4,"div",12),_._uU(5),_.qZA(),_.TgZ(6,"div",14),_._uU(7),_.ALo(8,"dateFrom"),_.qZA()()),2&e){const t=s.$implicit;_.xp6(2),_.Q6J("routerLink",_.VKq(6,a_,t.id)),_.xp6(1),_.Oqu(t.name),_.xp6(2),_.hij(" ",t.installed_ui_devices||"0"," "),_.xp6(2),_.hij(" ",_.lcZ(8,4,1e3*t.created_at)," ")}}function A_(e,s){if(1&e&&(_.TgZ(0,"div",8)(1,"div",9)(2,"div",10),_.SDv(3,11),_.qZA(),_.TgZ(4,"div",12),_.SDv(5,13),_.qZA(),_.TgZ(6,"div",14),_.SDv(7,15),_.qZA()(),_.TgZ(8,"div",16),_.YNc(9,O_,9,8,"div",17),_.ALo(10,"async"),_.qZA()()),2&e){const t=_.oxw(2);_.xp6(9),_.Q6J("ngForOf",_.lcZ(10,1,t.system_list))}}function c_(e,s){if(1&e&&(_.TgZ(0,"section"),_.YNc(1,A_,11,3,"div",7),_.ALo(2,"async"),_.qZA()),2&e){const t=_.oxw(),o=_.MAs(9);let i;_.xp6(1),_.Q6J("ngIf",null==(i=_.lcZ(2,2,t.system_list))?null:i.length)("ngIfElse",o)}}function M_(e,s){1&e&&(_.TgZ(0,"div",21),_._UZ(1,"mat-spinner",22),_.TgZ(2,"p"),_._uU(3,"Loading systems..."),_.qZA()()),2&e&&(_.xp6(1),_.Q6J("diameter",48))}function C_(e,s){1&e&&(_.TgZ(0,"div",21)(1,"p"),_._uU(2,"No systems with module"),_.qZA()())}let u_=(()=>{class e{constructor(t){this._service=t,this.filter$=new U.X(""),this.loading=this._service.loading,this.system_list=(0,S_.aj)([this.filter$,this._service.system_list]).pipe((0,r.U)(o=>{const[i,d]=o,A=i.toLowerCase();return i?d.filter(c=>c.name.toLowerCase().includes(A)):d}))}}return e.\u0275fac=function(t){return new(t||e)(_.Y36(p))},e.\u0275cmp=_.Xpm({type:e,selectors:[["module-systems"]],decls:10,vars:5,consts:function(){let s,t,o;return s=$localize`:@@nameLabel␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`,t=$localize`:@@systemLabel␟6c24d3e08bc16576fbd5580dc255a31c4b08c366␟8919524640139321287:No. Modules`,o=$localize`:@@createdLabel␟1b051734b0ee9021991c91b3ed4e81c244322462␟4207916966377787111:Created`,[[1,"flex","items-center","mb-4"],["appearance","outline",1,"h-12","flex-1"],["matPrefix","","className","backoffice-magnifying-glass text-xl mr-2"],["matInput","","placeholder","Filter systems...",1,"rounded-none",3,"ngModel","ngModelChange"],[4,"ngIf","ngIfElse"],["load_state",""],["empty_state",""],["role","table","class","overflow-x-auto",4,"ngIf","ngIfElse"],["role","table",1,"overflow-x-auto"],["table-head",""],["flex","",1,"flex-1","p-2"],s,[1,"w-48","p-2"],t,[1,"w-36","p-2"],o,["table-body","",1,"overflow-y-auto"],["table-row","",4,"ngFor","ngForOf"],["table-row",""],["flex","",1,"flex-1","p-2","underline"],[3,"routerLink"],[1,"flex","flex-col","items-center","p-8","mx-auto"],[1,"mb-4",3,"diameter"]]},template:function(t,o){if(1&t&&(_.TgZ(0,"section",0)(1,"mat-form-field",1),_._UZ(2,"app-icon",2),_.TgZ(3,"input",3),_.NdJ("ngModelChange",function(d){return o.filter$.next(d)}),_.qZA()()(),_.YNc(4,c_,3,4,"section",4),_.ALo(5,"async"),_.YNc(6,M_,4,1,"ng-template",null,5,_.W1O),_.YNc(8,C_,3,0,"ng-template",null,6,_.W1O)),2&t){const i=_.MAs(7);_.xp6(3),_.Q6J("ngModel",""),_.xp6(1),_.Q6J("ngIf",!_.lcZ(5,3,o.loading))("ngIfElse",i)}},directives:[F.KE,d_.o,F.qo,E_.Nt,a.Fj,a.JJ,a.On,E.O5,E.sg,C.yS,P.Ou],pipes:[E.Ov,L.R],styles:["[_nghost-%COMP%]{padding:1rem;height:100%;width:100%}"]}),e})();var m_=n(9960),r_=n(5558);const g_=[{path:":id",component:Z,children:[{path:"about",component:l_},{path:"systems",component:u_},{path:"extend/:id",component:m_.z},{path:"history",component:r_.D},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}];var f_=n(9522);let T_=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=_.oAB({type:e}),e.\u0275inj=_.cJS({imports:[[E.ez,a.u5,C.Bz.forChild(g_),f_.X]]}),e})()}}]);