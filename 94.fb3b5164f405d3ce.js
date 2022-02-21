"use strict";(self.webpackChunkbackoffice=self.webpackChunkbackoffice||[]).push([[94],{2094:(f_,C,a)=>{a.r(C),a.d(C,{AppUsersModule:()=>u_});var r=a(6019),c=a(9010),R=a(3907),p=a(2378),O=a(1292),v=a(3083),_=a(6079),h=a(2016),P=a(2874);let F=(()=>{class t extends O.K{constructor(e){super(),this._service=e,this.name="users",this.show_options=this._service.show_options,this.tab_list=[]}get extensions(){return(0,v.fq)(this._service.active_item,this.name)}updateTabList(e){this.tab_list=[{id:"about",name:"About",icon:{class:"backoffice-info-with-circle"}},{id:"metadata",name:"Metadata",count:null==e?void 0:e.metadata,icon:{class:"backoffice-gist"}},{id:"history",name:"History",icon:{class:"backoffice-list"}}].concat(this.extensions)}ngOnInit(){this.subscription("item",this._service.item.subscribe(()=>this.updateTabList())),this.updateTabList()}}return t.\u0275fac=function(e){return new(e||t)(_.Y36(p.L))},t.\u0275cmp=_.Xpm({type:t,selectors:[["app-users"]],features:[_.qOj],decls:3,vars:1,consts:[[1,"flex-1","flex-col","sm:flex-row","flex","h-full","w-full","relative"],["heading","Users","name","users",1,"absolute","top-0","left-0","h-12","w-full","sm:h-full","sm:static"],["name","user","route","users",1,"flex-1","relative","mt-12","sm:mt-0","w-full","sm:w-1/2",3,"tabs"]],template:function(e,n){1&e&&(_.TgZ(0,"div",0),_._UZ(1,"sidebar",1),_._UZ(2,"item-display",2),_.qZA()),2&e&&(_.xp6(2),_.Q6J("tabs",n.tab_list))},directives:[h.k,P.s],styles:["sidebar[_ngcontent-%COMP%]{transition:height .3s}@media screen and (min-width: 640px){sidebar[_ngcontent-%COMP%]{width:20em!important}}"]}),t})();var u=a(8621),N=a(6835);function I(t,o){if(1&t&&(_.TgZ(0,"div",12),_.TgZ(1,"label"),_.SDv(2,13),_.qZA(),_.TgZ(3,"div",14),_.TgZ(4,"a",15),_._uU(5),_.qZA(),_.qZA(),_.qZA()),2&t){const e=_.oxw();_.xp6(4),_.Q6J("href","mailto:"+(null==e.item?null:e.item.email),_.LSH),_.xp6(1),_.Oqu(null==e.item?null:e.item.email)}}function b(t,o){if(1&t&&(_.TgZ(0,"div",12),_.TgZ(1,"label"),_.SDv(2,16),_.qZA(),_.TgZ(3,"div",14),_._uU(4),_.ALo(5,"dateFrom"),_.qZA(),_.qZA()),2&t){const e=_.oxw();_.xp6(4),_.hij(" ",_.lcZ(5,1,1e3*(null==e.item?null:e.item.created_at))," ")}}function Z(t,o){if(1&t&&(_.TgZ(0,"div",12),_.TgZ(1,"label"),_.SDv(2,17),_.qZA(),_.TgZ(3,"div",14),_._uU(4),_.ALo(5,"dateFrom"),_.qZA(),_.qZA()),2&t){const e=_.oxw();_.xp6(4),_.hij(" ",_.lcZ(5,1,1e3*(null==e.item?null:e.item.updated_at))," ")}}function x(t,o){if(1&t&&(_.TgZ(0,"div",12),_.TgZ(1,"label"),_.SDv(2,18),_.qZA(),_.TgZ(3,"div",19),_._uU(4),_.qZA(),_.qZA()),2&t){const e=_.oxw();_.xp6(4),_.hij(" ",null==e.item?null:e.item.authority_id," ")}}function B(t,o){if(1&t&&(_.TgZ(0,"mat-chip"),_._uU(1),_.qZA()),2&t){const e=o.$implicit;_.xp6(1),_.Oqu(e)}}function y(t,o){if(1&t&&(_.TgZ(0,"div",14),_.TgZ(1,"mat-chip-list",23),_.YNc(2,B,2,1,"mat-chip",24),_.qZA(),_.qZA()),2&t){const e=_.oxw(2);_.xp6(2),_.Q6J("ngForOf",e.item.groups)}}function $(t,o){if(1&t&&(_.TgZ(0,"div",12),_.TgZ(1,"label",20),_.SDv(2,21),_.qZA(),_.YNc(3,y,3,1,"div",22),_.qZA()),2&t){const e=_.oxw(),n=_.MAs(24);_.xp6(3),_.Q6J("ngIf",null==e.item.groups?null:e.item.groups.length)("ngIfElse",n)}}function L(t,o){1&t&&(_.TgZ(0,"div",14),_._uU(1,"No Access Groups"),_.qZA())}let X=(()=>{class t{constructor(e){this._service=e}get item(){return this._service.active_item}}return t.\u0275fac=function(e){return new(e||t)(_.Y36(p.L))},t.\u0275cmp=_.Xpm({type:t,selectors:[["user-about"]],decls:25,vars:7,consts:function(){let o,e,n,i,s,d,l,A;return o=$localize`:@@techSupportRole␟031b6f40313933f6363bf8501916fb1167661df3␟7524309407036744400: User Role `,e=$localize`:@@techSupportRole␟2c67d427fc4370f7ebbc262e58af19c48a3cef5b␟3160540339920565657: Tech Support `,n=$localize`:@@systemAdminRole␟41029fd65510d474588802219fa1a77f3764381e␟8405084038860811251: System Admin `,i=$localize`:@@userCreatedAtLabel␟91b96d7228b6e05c238fa4e39abfc17ad51a6eef␟6631334172623029500:Email:`,s=$localize`:@@userCreatedAtLabel␟a5ed099ffc9e96f6970df843289ade8a7d20ab9f␟1616250945945379783:Created:`,d=$localize`:@userUpdatedAtLabel␟f94240161f912dbd8758b858877cddeab80f36cb␟1116759395536210856:Updated:`,l=$localize`:@userUpdatedAtLabel␟ce59f677986b7ffb7d9aecd079f5d117c5d4021b␟1873791838056734854:Authority ID:`,A=$localize`:@@userGroupsLabel␟de3e25c09f9ea2b26ac8502f589ec8cdeaa2ada0␟1800028427787031247:User Groups:`,[[1,"mb-4","space-y-2"],["class","flex items-center space-x-2",4,"ngIf"],["role","table"],["table-head",""],[1,"w-40","p-2"],o,[1,"flex-1","p-2"],["table-body",""],["table-row",""],e,n,["empty_group_state",""],[1,"flex","items-center","space-x-2"],i,[1,"value"],[3,"href"],s,d,l,[1,"value","mono"],["for","groups",1,"my-1"],A,["class","value",4,"ngIf","ngIfElse"],["name","groups"],[4,"ngFor","ngForOf"]]},template:function(e,n){1&e&&(_.TgZ(0,"section",0),_.YNc(1,I,6,2,"div",1),_.YNc(2,b,6,3,"div",1),_.YNc(3,Z,6,3,"div",1),_.YNc(4,x,5,1,"div",1),_.YNc(5,$,4,2,"div",1),_.qZA(),_.TgZ(6,"section"),_.TgZ(7,"div",2),_.TgZ(8,"div",3),_.TgZ(9,"div",4),_.SDv(10,5),_.qZA(),_._UZ(11,"div",6),_.qZA(),_.TgZ(12,"div",7),_.TgZ(13,"div",8),_.TgZ(14,"div",4),_.SDv(15,9),_.qZA(),_.TgZ(16,"div",6),_._uU(17),_.qZA(),_.qZA(),_.TgZ(18,"div",8),_.TgZ(19,"div",4),_.SDv(20,10),_.qZA(),_.TgZ(21,"div",6),_._uU(22),_.qZA(),_.qZA(),_.qZA(),_.qZA(),_.qZA(),_.YNc(23,L,2,0,"ng-template",null,11,_.W1O)),2&e&&(_.xp6(1),_.Q6J("ngIf",null==n.item?null:n.item.created_at),_.xp6(1),_.Q6J("ngIf",null==n.item?null:n.item.created_at),_.xp6(1),_.Q6J("ngIf",null==n.item?null:n.item.updated_at),_.xp6(1),_.Q6J("ngIf",null==n.item?null:n.item.authority_id),_.xp6(1),_.Q6J("ngIf",null==n.item?null:n.item.groups),_.xp6(12),_.hij(" ",!0===(null==n.item?null:n.item.support)," "),_.xp6(5),_.hij(" ",!0===(null==n.item?null:n.item.sys_admin)," "))},directives:[r.O5,u.qn,r.sg,u.HS],pipes:[N.R],styles:["[_nghost-%COMP%]{padding:1rem;width:100%;height:100%}"]}),t})();function K(t,o){if(1&t&&(_.TgZ(0,"div",10),_.TgZ(1,"div",4),_._uU(2),_.ALo(3,"date"),_.qZA(),_.TgZ(4,"div",4),_._uU(5),_.ALo(6,"date"),_.qZA(),_.TgZ(7,"div",4),_.TgZ(8,"div"),_._uU(9),_.qZA(),_.TgZ(10,"div"),_._uU(11,"View"),_.qZA(),_.qZA(),_.qZA()),2&t){const e=o.$implicit;_.xp6(2),_.hij(" ",_.xi3(3,3,e.start,"MMM d, y, h:mm a")," "),_.xp6(3),_.hij(" ",_.xi3(6,6,e.end,"MMM d, y, h:mm a")," "),_.xp6(4),_.Oqu(e.systems.length)}}function D(t,o){if(1&t&&(_.TgZ(0,"div",2),_.TgZ(1,"div",3),_.TgZ(2,"div",4),_.SDv(3,5),_.qZA(),_.TgZ(4,"div",4),_.SDv(5,6),_.qZA(),_.TgZ(6,"div",4),_.SDv(7,7),_.qZA(),_.qZA(),_.TgZ(8,"div",8),_.YNc(9,K,12,9,"div",9),_.qZA(),_.qZA()),2&t){const e=_.oxw();_.xp6(9),_.Q6J("ngForOf",e.logs)}}function G(t,o){1&t&&(_.TgZ(0,"div",11),_.SDv(1,12),_.qZA())}let w=(()=>{class t extends O.K{constructor(e){super(),this._service=e,this.logs=[]}get item(){return this._service.active_item}ngOnInit(){this.subscription("item",this._service.item.subscribe(e=>{this.loadUserLogs()}))}loadUserLogs(e=0){}}return t.\u0275fac=function(e){return new(e||t)(_.Y36(p.L))},t.\u0275cmp=_.Xpm({type:t,selectors:[["user-history"]],features:[_.qOj],decls:3,vars:2,consts:function(){let o,e,n,i;return o=$localize`:@@logEventStart␟8d06853e46a6d74951ff1cf9617f069c91fd50c5␟2130731909238927129:Session Start`,e=$localize`:@@logEventEnd␟e5cdb48c00597060251112914bcac2582f564c38␟4243735233618363847:Ended`,n=$localize`:@@logEventAction␟5b0d0e1718f55dc2d351402810b8cd61b139400f␟7550650761322890930: Systems Accessed `,i=$localize`:@@logTableEmpty␟721160b85c58426d8f14dc1d83290969edb6585c␟1736905540793055600: No logs found `,[["role","table",4,"ngIf","ngIfElse"],["empty_state",""],["role","table"],["table-head",""],[1,"w-1/3"],o,e,n,["table-body",""],["table-row","",4,"ngFor","ngForOf"],["table-row",""],[1,"p-8","text-center"],i]},template:function(e,n){if(1&e&&(_.YNc(0,D,10,1,"div",0),_.YNc(1,G,2,0,"ng-template",null,1,_.W1O)),2&e){const i=_.MAs(2);_.Q6J("ngIf",null==n.logs?null:n.logs.length)("ngIfElse",i)}},directives:[r.O5,r.sg],pipes:[r.uU],styles:["[_nghost-%COMP%]{padding:1rem;height:100%;width:100%}"]}),t})();var J=a(5605),S=a(6605),Y=a(3427),q=a(4307),f=a(395),E=a(3829),Q=a(6195),j=a(4762),T=a(4099),z=a(2372),H=a(2411),W=a(5686),U=a(9204),V=a(8053),k=a(2047),__=a(4102),M=a(2229);let e_=(()=>{class t{constructor(e,n){this._service=e,this._dialog=n,this._loading=new T.X(!1),this._change=new T.X(!1),this.loading=this._loading.asObservable(),this.item=this._service.item,this.counts=(0,z.aj)([this._service.all_item,this._change]).pipe((0,W.b)(300),(0,U.w)(i=>(0,j.mG)(this,void 0,void 0,function*(){const[s]=i;if(!(s instanceof S.TT8))return{};this._loading.next(!0);const d=yield Promise.all([(0,S.Eio)(s.id).pipe((0,V.U)(A=>A.length)).toPromise().catch(A=>0)]),[l]=d;return this._loading.next(!1),{metadata:l}}))),this.metadata=this.item.pipe((0,U.w)(i=>i instanceof S.gGR?(0,S.Eio)(i.id):(0,H.of)([])),(0,k.K)(i=>[]),(0,__.d)(1)),setTimeout(()=>this._change.next(!this._change.getValue()),1e3)}get active_item(){return this._service.active_item}}return t.\u0275fac=function(e){return new(e||t)(_.LFG(p.L),_.LFG(M.uw))},t.\u0275prov=_.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var t_=a(86),g=a(3050),n_=a(7444),o_=a(9499),i_=a(3013),a_=a(7964);function s_(t,o){if(1&t){const e=_.EpF();_.TgZ(0,"button",19),_.NdJ("click",function(i){return i.stopPropagation()})("click",function(){_.CHM(e);const i=_.oxw(3).$implicit;return _.oxw(3).saveMetadata(i)}),_.SDv(1,20),_.qZA()}}function c_(t,o){if(1&t&&(_.ynx(0),_.YNc(1,s_,2,0,"button",18),_.BQk()),2&t){const e=_.oxw(2).$implicit,n=_.oxw(3),i=_.MAs(4);_.xp6(1),_.Q6J("ngIf",!n.loading[e.name])("ngIfElse",i)}}const l_=function(){return{class:"backoffice-trash"}};function d_(t,o){if(1&t){const e=_.EpF();_.TgZ(0,"div",21),_.TgZ(1,"button",22),_.NdJ("click",function(){_.CHM(e);const i=_.oxw(2).$implicit;return _.oxw(3).deleteMetadata(i.name)}),_._UZ(2,"app-icon",14),_.qZA(),_.qZA()}2&t&&(_.xp6(2),_.Q6J("icon",_.DdM(1,l_)))}const r_=function(){return{class:"backoffice-edit"}};function S_(t,o){if(1&t){const e=_.EpF();_.TgZ(0,"mat-expansion-panel",10),_.TgZ(1,"mat-expansion-panel-header"),_.TgZ(2,"mat-panel-title"),_.TgZ(3,"div",11),_._uU(4),_.qZA(),_.YNc(5,c_,2,2,"ng-container",12),_.TgZ(6,"button",13),_.NdJ("click",function(i){_.CHM(e);const s=_.oxw().$implicit;return _.oxw(3).editMetadataDetails(s),i.stopPropagation()}),_._UZ(7,"app-icon",14),_.qZA(),_.YNc(8,d_,3,2,"div",15),_.qZA(),_.qZA(),_.TgZ(9,"div",16),_._UZ(10,"settings-form-field",17),_.qZA(),_.qZA()}if(2&t){const e=_.oxw().$implicit,n=_.oxw(3);_.ekj("no-padding",!0),_.Q6J("formGroup",n.form_map[e.name]),_.xp6(4),_.hij(" ",n.form_map[e.name].controls.name.value," "),_.xp6(1),_.Q6J("ngIf",n.edited[e.name]),_.xp6(2),_.Q6J("icon",_.DdM(9,r_)),_.xp6(1),_.Q6J("ngIf",!e.new),_.xp6(2),_.Q6J("schema",n.schema_map[e.name])("readonly",!1)}}function m_(t,o){if(1&t&&(_.ynx(0),_.YNc(1,S_,11,10,"mat-expansion-panel",9),_.BQk()),2&t){const e=o.$implicit,n=_.oxw(3);_.xp6(1),_.Q6J("ngIf",n.form_map[e.name])}}function E_(t,o){if(1&t&&(_.TgZ(0,"div",7),_.TgZ(1,"mat-accordion"),_.YNc(2,m_,2,1,"ng-container",8),_.qZA(),_.qZA()),2&t){const e=_.oxw(2);_.xp6(2),_.Q6J("ngForOf",e.metadata)}}function A_(t,o){if(1&t){const e=_.EpF();_.TgZ(0,"div",3),_.TgZ(1,"button",4),_.NdJ("click",function(){return _.CHM(e),_.oxw().newMetadata()}),_.SDv(2,5),_.qZA(),_.YNc(3,E_,3,1,"div",6),_.qZA()}if(2&t){const e=_.oxw(),n=_.MAs(2);_.xp6(3),_.Q6J("ngIf",null==e.metadata?null:e.metadata.length)("ngIfElse",n)}}function p_(t,o){1&t&&(_.TgZ(0,"div",23),_.SDv(1,24),_.qZA())}function g_(t,o){1&t&&_._UZ(0,"mat-spinner",25)}const O_=[{path:":id",component:F,children:[{path:"about",component:X},{path:"metadata",component:(()=>{class t extends O.K{constructor(e,n,i){super(),this._dialog=e,this._service=n,this._schemas=i,this.form_map={},this.edited={},this.loading={},this.schema_map={}}get item(){return this._service.active_item}validateName(e){return n=>e.indexOf(n.value)>=0?{name:!0}:null}ngOnInit(){this.subscription("metadata",this._service.metadata.subscribe(e=>{this.metadata=e,this.generateForms()}))}newMetadata(){this.metadata.push({name:`new_field_${Math.floor(999999999*Math.random())}`,description:"",new:!0,details:{}}),this.generateForms()}editMetadataDetails(e){this._dialog.open(q.v,{maxWidth:"95vw",data:{form:this.form_map[e.name]}})}deleteMetadata(e){const n=this._dialog.open(f.z,Object.assign(Object.assign({},f.t),{data:{title:"Kill process",content:`\n                    <p>Are you sure you want delete the metadata property "${e}"?</p>\n                `,icon:{type:"icon",class:"backoffice-trash"}}}));this.subscription("confirm",n.componentInstance.event.subscribe(i=>{"done"===i.reason&&(0,S._p1)(this.item.id,{name:e}).subscribe(()=>{(0,E.t5)(`Successfully removed "${e}" metadata.`),this.metadata=this.metadata.filter(s=>s.name!==e),this.generateForms()},s=>(0,E.cB)(`Error removing old "${e}" metadata. Error: ${s.response||s.message||s}`)),n.close()}))}saveMetadata(e){const n=this.form_map[e.name];if(n.markAllAsTouched(),!n.valid)return(0,E.cB)(`JSON for property "${n.controls.name.value}" is invalid`);const i=n.value;this.loading[e.name]=!0,(0,S.Ymr)(this.item.id,Object.assign(Object.assign({},i),{details:JSON.parse(i.details)})).subscribe(s=>{this.loading[e.name]=!1;const d=this.metadata.findIndex(l=>l.name===e.name);this.edited[e.name]=!1,e.name!==s.name&&(0,S._p1)(this.item.id,e).toPromise().catch(l=>(0,E.cB)(`Error removing old "${e.name}" metadata. Error: ${JSON.stringify(l.response||l.message||l)}`)),d>=0&&this.metadata.splice(d,1,Object.assign(Object.assign({},s),{new:!1})),(0,E.t5)(`Saved "${i.name}" metadata.`),this.generateForms()},s=>{this.loading[e.name]=!1,(0,E.cB)(`Error saving "${i.name}" metadata. Error: ${JSON.stringify(s.response||s.message||s)}`)})}generateForms(){delete this.form_map,this.form_map={},this.metadata.forEach(e=>{const n="string"==typeof e.details?JSON.parse(e.details):e.details;this.form_map[e.name]=new c.cw({name:new c.NI(e.name,[c.kI.required,this.validateName(this.metadata.filter(i=>i.name!==e.name).map(i=>i.name))]),description:new c.NI(e.description),editors:new c.NI(e.editors),details:new c.NI(JSON.stringify(n||{},void 0,4),[c.kI.required,Y.NS]),schema:new c.NI(e.schema)}),this.subscription(`${e.name}_changes`,this.form_map[e.name].valueChanges.subscribe(()=>this.edited[e.name]=!0)),this.subscription(`${e.name}_schema`,this.form_map[e.name].controls.schema.valueChanges.subscribe(i=>{let s=this._schemas.getSchema(i);if(!s)try{s=JSON.parse(i)}catch(d){s={}}this.schema_map[e.name]=s}))})}}return t.\u0275fac=function(e){return new(e||t)(_.Y36(M.uw),_.Y36(e_),_.Y36(Q.O))},t.\u0275cmp=_.Xpm({type:t,selectors:[["user-metadata"]],features:[_.qOj],decls:5,vars:1,consts:function(){let o,e,n;return o=$localize`:@@addMetadataAction␟21539c364f82b6b766d912c3734a014cb30f27a9␟6503325999299484981: Add new Metadata Field `,e=$localize`:@@saveAction␟baa3a276f05a6226cb663918714882c53b84da34␟25086637338905953: Save `,n=$localize`:@@userMetadataEmpty␟3b713db48de98501f8d533c049da179eaceef7e1␟1254780188914338824: No user metadata found `,[["class","p-4",4,"ngIf"],["empty_state",""],["load_state",""],[1,"p-4"],["mat-button","",3,"click"],o,["class","mt-4",4,"ngIf","ngIfElse"],[1,"mt-4"],[4,"ngFor","ngForOf"],[3,"no-padding","formGroup",4,"ngIf"],[3,"formGroup"],["edit","",1,"flex-1"],[4,"ngIf"],["mat-icon-button","","matTooltip","Edit Metadata Settings",3,"click"],[3,"icon"],["class","contents",4,"ngIf"],[1,"settings"],["formControlName","details","lang","json",3,"schema","readonly"],["mat-button","","save","",3,"click",4,"ngIf","ngIfElse"],["mat-button","","save","",3,"click"],e,[1,"contents"],["mat-icon-button","","matTooltip","Remove Metadata",3,"click"],[1,"p-8","text-center"],n,["diameter","32"]]},template:function(e,n){1&e&&(_.YNc(0,A_,4,2,"div",0),_.YNc(1,p_,2,0,"ng-template",null,1,_.W1O),_.YNc(3,g_,1,0,"ng-template",null,2,_.W1O)),2&e&&_.Q6J("ngIf",n.item)},directives:[r.O5,t_.lW,g.pp,r.sg,g.ib,c.JL,c.sg,g.yz,g.yK,n_.gM,o_.o,i_.x,c.JJ,c.u,a_.$g],styles:["[edit][_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{opacity:0;transition:opacity .2s}[edit][_ngcontent-%COMP%]:hover   app-icon[_ngcontent-%COMP%]{opacity:1}mat-panel-title[_ngcontent-%COMP%]{display:flex;align-items:center;height:1.2em;overflow:visible}mat-panel-title[_ngcontent-%COMP%]   [save][_ngcontent-%COMP%]{font-size:.8em;background:none;border:none;text-decoration:underline;color:inherit}mat-form-field[_ngcontent-%COMP%]{height:3em}.settings[_ngcontent-%COMP%]{width:100%}.contents[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;flex:1;min-width:2em}.contents[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-decoration:none}"]}),t})()},{path:"history",component:w},{path:"extend/:id",component:J.z},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}];var C_=a(1226);let u_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=_.oAB({type:t}),t.\u0275inj=_.cJS({imports:[[r.ez,c.u5,c.UX,R.Bz.forChild(O_),C_.X]]}),t})()}}]);