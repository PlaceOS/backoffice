"use strict";(self.webpackChunkbackoffice=self.webpackChunkbackoffice||[]).push([[628],{3628:(Fe,R,r)=>{r.r(R),r.d(R,{AppTriggersModule:()=>Re});var m=r(9808),p=r(4182),F=r(6741),E=r(4409),T=r(655),g=r(2837),B=r(8537),v=r(1843),I=r(6123),e=r(9863),P=r(8966),$=r(9101),L=r(1609);let K=(()=>{class i extends v.K{constructor(t,_){super(),this._service=t,this._dialog=_,this.name="triggers",this.show_options=this._service.show_options,this.tab_list=[]}get extensions(){return(0,B.fq)(this._service.active_item,this.name)}updateTabList(){this.tab_list=[{id:"about",name:"About",icon:{class:"backoffice-info-with-circle"}},{id:"instances",name:"Instances",count:this.instance_count,icon:{class:"backoffice-documents"}}].concat(this.extensions)}ngOnInit(){this.subscription("item",this._service.item.subscribe(t=>{this.loadValues(t)})),this.updateTabList()}loadValues(t){return(0,T.mG)(this,void 0,void 0,function*(){!t||(this.instance_count=(yield(0,g.o$$)(t.id).toPromise()).length,this.updateTabList())})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(I.L),e.Y36(P.uw))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-triggers"]],features:[e.qOj],decls:3,vars:1,consts:[[1,"flex-1","flex-col","sm:flex-row","flex","h-full","w-full","relative"],["heading","Triggers","name","triggers",1,"absolute","top-0","left-0","h-12","w-full","sm:h-full","sm:static"],["name","trigger","route","triggers",1,"flex-1","relative","mt-12","sm:mt-0","w-full","sm:w-1/2",3,"tabs"]],template:function(t,_){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"sidebar",1)(2,"item-display",2),e.qZA()),2&t&&(e.xp6(2),e.Q6J("tabs",_.tab_list))},directives:[$.k,L.s],styles:["sidebar[_ngcontent-%COMP%]{transition:height .3s}@media screen and (min-width: 640px){sidebar[_ngcontent-%COMP%]{width:20em!important}}"]}),i})();var X=r(4850),J=r(1086),w=r(7545),k=r(5154),M=r(7224),S=r(2395),A=r(2016),q=r(6087),Q=r(5743);let b=(()=>{class i{constructor(t,_){this._service=t,this._dialog=_,this.item=this._service.item,this.instances=this.item.pipe((0,w.w)(n=>n instanceof g.cgz?(0,g.o$$)(n.id):(0,J.of)([])),(0,k.d)(1))}get active_item(){return this._service.active_item}editCondition(t=null,_){return(0,T.mG)(this,void 0,void 0,function*(){if(!_)return;const n=this._dialog.open(Q.P,{width:"auto",height:"auto",data:{trigger:this.active_item,condition:t?JSON.parse(JSON.stringify(t)):void 0,system:_}}),o=yield Promise.race([n.componentInstance.event.pipe((0,M.P)(c=>"done"===c.reason)).toPromise(),n.afterClosed().toPromise()]);!(null==o?void 0:o.reason)||this._service.replaceItem(o.metadata.trigger)})}editAction(t=null,_){return(0,T.mG)(this,void 0,void 0,function*(){if(!_)return;const n=this._dialog.open(q.L,{data:{trigger:this.active_item,action:t,system:_}}),o=yield Promise.race([n.componentInstance.event.pipe((0,M.P)(c=>"done"===c.reason)).toPromise(),n.afterClosed().toPromise()]);!(null==o?void 0:o.reason)||this._service.replaceItem(o.metadata.trigger)})}reorderAction(t,_,n){return(0,T.mG)(this,void 0,void 0,function*(){const o=yield(0,S._5)({title:`Reoreder trigger ${t} action`,content:"Are you sure you want remove this trigger condition?<br>All systems using this trigger will be updated <strong>immediately</strong>.",icon:{type:"icon",class:"backoffice-trash"}},this._dialog);if(!o)return;const c=[..."function"===t?this.active_item.actions.functions:this.active_item.actions.mailers];(0,E.bA)(c,_,n);const a={functions:"function"===t?c:this.active_item.actions.functions,mailers:"function"===t?this.active_item.actions.mailers:c};o.loading("Re-ordering triggger actions...");const d=yield(0,g.dqJ)(this.active_item.id,Object.assign(Object.assign({},this.active_item.toJSON()),{actions:a})).toPromise().catch(C=>C);if(!(d instanceof g.cgz))return(0,A.cB)(`Error re-ordered trigger ${t} action. Error: ${JSON.stringify(d.response||d.message||d)}`);this._service.replaceItem(d),(0,A.t5)(`Successfully re-ordered trigger ${t} action.`)})}removeCondition(t){return(0,T.mG)(this,void 0,void 0,function*(){const _=yield(0,S._5)({title:"Remove trigger condition",content:"Are you sure you want remove this trigger condition?<br>All systems using this trigger will be updated <strong>immediately</strong>.",icon:{type:"icon",class:"backoffice-trash"}},this._dialog);if(!(null==_?void 0:_.reason))return;_.loading("Removing trigger condition...");const n=this.active_item,o={comparisons:[...n.conditions.comparisons],time_dependents:[...n.conditions.time_dependents]},c=(t.type?n.conditions.time_dependents:n.conditions.comparisons).findIndex(d=>JSON.stringify(d)===JSON.stringify(t));o.time_dependents.splice(c,1),(t.type?o.time_dependents:o.comparisons).splice(c,1);const a=yield(0,g.dqJ)(n.id,Object.assign(Object.assign({},n.toJSON()),{conditions:o})).toPromise().catch(d=>d);if(_.close(),!(a instanceof g.cgz))return(0,A.cB)(`Error removing trigger condition. Error: ${JSON.stringify(a.response||a.message||a)}`);this._service.replaceItem(a),(0,A.t5)("Successfully removed trigger condition.")})}removeAction(t){return(0,T.mG)(this,void 0,void 0,function*(){const _=yield(0,S._5)({title:"Remove trigger action",content:"Are you sure you want remove this trigger action?<br>All systems using this trigger will be updated <strong>immediately</strong>.",icon:{type:"icon",class:"backoffice-trash"}},this._dialog);if(!(null==_?void 0:_.reason))return;_.loading("Removing trigger action...");const n=this.active_item,o={functions:[...n.actions.functions],mailers:[...n.actions.mailers]},c=(t.emails?n.actions.mailers:n.actions.functions).findIndex(d=>JSON.stringify(d)===JSON.stringify(t));(t.emails?o.mailers:o.functions).splice(c,1);const a=yield(0,g.dqJ)(n.id,Object.assign(Object.assign({},n.toJSON()),{actions:o})).toPromise().catch(d=>d);if(_.close(),!(a instanceof g.cgz))return(0,A.cB)(`Error removing trigger action. Error: ${JSON.stringify(a.response||a.message||a)}`);this._service.replaceItem(a),(0,A.t5)("Successfully removed trigger action.")})}removeTriggerFromSystem(t){return(0,T.mG)(this,void 0,void 0,function*(){const _=yield(0,S._5)({title:"Remove trigger from system",content:`Are you sure you want remove this trigger from ${t.name}?<br>The system will be updated <strong>immediately</strong>.`,icon:{type:"icon",class:"backoffice-trash"}},this._dialog);if(!(null==_?void 0:_.reason))return;_.loading("Removing trigger from system...");const n=yield(0,g.LfU)(t.id,this.active_item.id).toPromise().catch(o=>o);if(_.close(),n)return(0,A.cB)(`Error removing trigger from system. Error: ${n.responseText||n.message||n}`);(0,A.t5)("Successfully removed trigger from system.")})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(I.L),e.LFG(P.uw))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var N=r(7238),z=r(58),h=r(7423),G=r(1259),U=r(490),Y=r(7287);function H(i,s){if(1&i&&(e.TgZ(0,"div",3)(1,"label"),e.SDv(2,17),e.qZA(),e.TgZ(3,"div",18),e._uU(4),e.ALo(5,"dateFrom"),e.qZA()()),2&i){const t=e.oxw();e.xp6(4),e.Oqu(e.lcZ(5,1,1e3*t.item.created_at))}}function j(i,s){if(1&i&&(e.TgZ(0,"div",3)(1,"label"),e.SDv(2,19),e.qZA(),e.TgZ(3,"div",18),e._uU(4),e.ALo(5,"dateFrom"),e.qZA()()),2&i){const t=e.oxw();e.xp6(4),e.Oqu(e.lcZ(5,1,1e3*t.item.updated_at))}}function V(i,s){1&i&&(e.TgZ(0,"div",24),e.tHW(1,25),e._UZ(2,"div",26),e.N_p(),e.qZA())}const f=function(){return{class:"backoffice-edit"}},O=function(){return{class:"backoffice-trash"}};function W(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",27),e._UZ(1,"div",28),e.TgZ(2,"div",26),e._uU(3),e.ALo(4,"json"),e.ALo(5,"json"),e.qZA(),e.TgZ(6,"div",29)(7,"button",8),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw(2).editCondition(o)}),e._UZ(8,"app-icon",30),e.qZA(),e.TgZ(9,"button",31),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw(2).removeCondition(o)}),e._UZ(10,"app-icon",30),e.qZA()()()}if(2&i){const t=s.$implicit,_=e.oxw(2);e.xp6(3),e.lnq(" ",e.lcZ(4,6,t.left)," ",t.operator," ",e.lcZ(5,8,t.right)," "),e.xp6(4),e.Q6J("disabled",!_.template_system),e.xp6(1),e.Q6J("icon",e.DdM(10,f)),e.xp6(2),e.Q6J("icon",e.DdM(11,O))}}function ee(i,s){1&i&&(e.TgZ(0,"div",24),e.tHW(1,32),e._UZ(2,"div",26),e.N_p(),e.qZA())}function te(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",27),e._UZ(1,"div",28),e.TgZ(2,"div",26),e._uU(3),e.qZA(),e.TgZ(4,"div",29)(5,"button",8),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw(2).editCondition(o)}),e._UZ(6,"app-icon",33),e.qZA(),e.TgZ(7,"button",31),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw(2).removeCondition(o)}),e._UZ(8,"app-icon",34),e.qZA()()()}if(2&i){const t=s.$implicit,_=e.oxw(2);e.xp6(3),e.AsE(" ","at"===t.type?"At time":"CRON"," ","at"===t.type?t.time:t.cron," "),e.xp6(2),e.Q6J("disabled",!_.template_system)}}function _e(i,s){if(1&i&&(e.TgZ(0,"section",20),e.YNc(1,V,3,0,"div",21),e.TgZ(2,"div",22),e.YNc(3,W,11,12,"div",23),e.qZA(),e.YNc(4,ee,3,0,"div",21),e.TgZ(5,"div",22),e.YNc(6,te,9,3,"div",23),e.qZA()()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.comparisons.length),e.xp6(2),e.Q6J("ngForOf",t.comparisons),e.xp6(1),e.Q6J("ngIf",t.time_dependents.length),e.xp6(2),e.Q6J("ngForOf",t.time_dependents)}}function ie(i,s){1&i&&(e.TgZ(0,"div",24),e.tHW(1,37),e._UZ(2,"div",26),e.N_p(),e.qZA())}function ne(i,s){1&i&&e._UZ(0,"div",41)}const x=function(){return{class:"backoffice-select-arrows"}};function oe(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",38)(1,"div",39),e._UZ(2,"app-icon",30),e.qZA(),e.TgZ(3,"div",26),e._uU(4),e.ALo(5,"json"),e.qZA(),e.TgZ(6,"div",29)(7,"button",8),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw(2).editAction(o)}),e._UZ(8,"app-icon",30),e.qZA(),e.TgZ(9,"button",31),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw(2).removeAction(o)}),e._UZ(10,"app-icon",30),e.qZA()(),e.YNc(11,ne,1,0,"div",40),e.qZA()}if(2&i){const t=s.$implicit,_=e.oxw(2);e.xp6(2),e.Q6J("icon",e.DdM(9,x)),e.xp6(2),e.lnq(" ",t.mod,", ",t.method,"(",e.lcZ(5,7,t.args),") "),e.xp6(3),e.Q6J("disabled",!_.template_system),e.xp6(1),e.Q6J("icon",e.DdM(10,f)),e.xp6(2),e.Q6J("icon",e.DdM(11,O))}}function se(i,s){1&i&&(e.TgZ(0,"div",24),e.tHW(1,42),e._UZ(2,"div",26),e.N_p(),e.qZA())}function re(i,s){1&i&&e._UZ(0,"div",41)}function ce(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",38)(1,"div",39),e._UZ(2,"app-icon",30),e.qZA(),e.TgZ(3,"div",26)(4,"span",43),e.SDv(5,44),e.ALo(6,"formatList"),e.qZA(),e._uU(7),e.qZA(),e.TgZ(8,"div",29)(9,"button",8),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw(2).editAction(o)}),e._UZ(10,"app-icon",30),e.qZA(),e.TgZ(11,"button",31),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw(2).removeAction(o)}),e._UZ(12,"app-icon",30),e.qZA()(),e.YNc(13,re,1,0,"div",40),e.qZA()}if(2&i){const t=s.$implicit,_=e.oxw(2);e.xp6(2),e.Q6J("icon",e.DdM(10,x)),e.xp6(2),e.Q6J("matTooltip",e.lcZ(6,8,t.emails)),e.xp6(2),e.pQV(t.emails.length)(t.emails.length),e.QtT(5),e.xp6(1),e.hij("\xa0 | Body Length: ",t.content.length," "),e.xp6(2),e.Q6J("disabled",!_.template_system),e.xp6(1),e.Q6J("icon",e.DdM(11,f)),e.xp6(2),e.Q6J("icon",e.DdM(12,O))}}function ae(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"section",20),e.YNc(1,ie,3,0,"div",21),e.TgZ(2,"div",35),e.NdJ("cdkDropListDropped",function(n){return e.CHM(t),e.oxw().confirmReorder("function",n)}),e.YNc(3,oe,12,12,"div",36),e.qZA(),e.YNc(4,se,3,0,"div",21),e.TgZ(5,"div",35),e.NdJ("cdkDropListDropped",function(n){return e.CHM(t),e.oxw().confirmReorder("mailer",n)}),e.YNc(6,ce,14,13,"div",36),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.functions.length),e.xp6(2),e.Q6J("ngForOf",t.functions),e.xp6(1),e.Q6J("ngIf",t.mailers.length),e.xp6(2),e.Q6J("ngForOf",t.mailers)}}function de(i,s){1&i&&(e.TgZ(0,"div",45),e.SDv(1,46),e.qZA())}function le(i,s){1&i&&(e.TgZ(0,"div",45),e.SDv(1,47),e.qZA())}const Ae=function(i){return["/zones",i]},me=function(i){return["/systems",i]};function Te(i,s){if(1&i&&(e.TgZ(0,"a",19),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit;e.Q6J("routerLink",t.zone_id?e.VKq(3,Ae,t.zone_id):e.VKq(5,me,t.control_system_id))("matTooltip",t.zone_id||t.control_system_id),e.xp6(1),e.hij(" ",t.name||t.zone_id||t.control_system_id," ")}}function Ee(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",11)(1,"div",12),e._UZ(2,"div",13),e.qZA(),e.TgZ(3,"div",14),e.YNc(4,Te,2,7,"a",15),e.qZA(),e.TgZ(5,"div",16),e._uU(6),e.ALo(7,"dateFrom"),e.qZA(),e.TgZ(8,"div",12)(9,"button",17),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw(2).deleteTrigger(o)}),e._UZ(10,"app-icon",18),e.qZA()()()}if(2&i){const t=s.$implicit;e.xp6(2),e.ekj("active",t.bookable),e.xp6(2),e.Q6J("ngIf",t.id),e.xp6(2),e.hij(" ",e.lcZ(7,4,1e3*+t.created_at)," ")}}function Se(i,s){if(1&i&&(e.TgZ(0,"div",2)(1,"div",3),e._UZ(2,"td",4),e.TgZ(3,"td",5),e.SDv(4,6),e.qZA(),e.TgZ(5,"td",7),e.SDv(6,8),e.qZA(),e._UZ(7,"td",4),e.qZA(),e.TgZ(8,"div",9),e.YNc(9,Ee,11,6,"div",10),e.ALo(10,"async"),e.qZA()()),2&i){const t=e.oxw();e.xp6(9),e.Q6J("ngForOf",e.lcZ(10,1,t.instances))}}function Ce(i,s){1&i&&(e.TgZ(0,"div",20)(1,"div",21),e.SDv(2,22),e.qZA()())}const fe=[{path:":id",component:K,children:[{path:"about",component:(()=>{class i extends v.K{constructor(t){super(),this._service=t,this.comparisons=[],this.time_dependents=[],this.functions=[],this.mailers=[],this.query_fn=_=>(0,g.vIL)({q:_}).pipe((0,X.U)(n=>n.data)),this.editCondition=_=>this._service.editCondition(_,this.template_system),this.removeCondition=_=>this._service.removeCondition(_),this.editAction=_=>this._service.editAction(_,this.template_system),this.removeAction=_=>this._service.removeAction(_)}get item(){return this._service.active_item}ngOnInit(){this.subscription("item",this._service.item.subscribe(t=>{this.item&&this.item.conditions&&(this.comparisons=this.item.conditions.comparisons||[],this.time_dependents=this.item.conditions.time_dependents||[],this.functions=this.item.actions.functions||[],this.mailers=this.item.actions.mailers||[])}))}confirmReorder(t,_){_&&_.previousIndex!==_.currentIndex&&this._service.reorderAction(t,_.previousIndex,_.currentIndex)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(b))},i.\u0275cmp=e.Xpm({type:i,selectors:[["trigger-about"]],features:[e.qOj],decls:24,vars:10,consts:function(){let s,t,_,n,o,c,a,d,C,u,y,Z,D;return s=$localize`:@@triggerTemplateSystemLabel␟f137c1d09ed9de301a81d208b8cdad80a968dcaf␟6860745490563598830:Template System: `,t=$localize`:@@triggerConditionsHeader␟1020647667eed59388dbc8a6094558415ad60d7d␟1021838865383496895: Conditions `,_=$localize`:@@triggerActionsHeader␟208b27e7a9b133922050b947e10f18db10b61114␟6653730762255659549: Actions `,n=$localize`:@@triggerCreatedAtLabel␟a5ed099ffc9e96f6970df843289ade8a7d20ab9f␟1616250945945379783:Created:`,o=$localize`:@triggerUpdatedAtLabel␟f94240161f912dbd8758b858877cddeab80f36cb␟1116759395536210856:Updated:`,c=$localize`:@@triggerComparisonLabel␟2c50e7b3646c263fc578eebbc9d6088cc3afb6a9␟3927510240684371304:${"\ufffd#2\ufffd"}:START_TAG_DIV:Variable Comparison Condtions${"\ufffd/#2\ufffd"}:CLOSE_TAG_DIV:`,a=$localize`:@@triggerTimeLabel␟9fc71327ed24f47d8e496dae7e04e96b20509d93␟997506514207464791:${"\ufffd#2\ufffd"}:START_TAG_DIV:Time Dependent Conditions${"\ufffd/#2\ufffd"}:CLOSE_TAG_DIV:`,d=$localize`:@@triggerFunctionsLabel␟86ae51bf8b293757b07a57dc39d9c3d0ad92f6fa␟6665573509830119346:${"\ufffd#2\ufffd"}:START_TAG_DIV:Function Call Actions${"\ufffd/#2\ufffd"}:CLOSE_TAG_DIV:`,C=$localize`:@@triggerEmailsLabel␟c4c4274d639d6589ecedd093580919ca1b680d51␟611546964449236535:${"\ufffd#2\ufffd"}:START_TAG_DIV:Email Actions${"\ufffd/#2\ufffd"}:CLOSE_TAG_DIV:`,u=$localize`:␟6e542484e5a5b97451d8db2f7dfdbb6ae9882409␟3981906223455182500:{VAR_PLURAL, plural, =1 {Address } other {Addresses }}`,u=e.Zx4(u,{VAR_PLURAL:"\ufffd1\ufffd"}),y=$localize`:@@emailCountDisplay␟0999296882eee5cef69cbe222cf6f242c97a20f5␟468872276403073781:${"\ufffd0\ufffd"}:INTERPOLATION: ${u}:ICU:`,Z=$localize`:@@triggerConditionsEmpty␟2ceae343187bb2de41817089be3056066fd4c8a4␟1442769940044870194: No condtions for trigger `,D=$localize`:@@triggerActionsEmpty␟2bb8a715685fabfcbc42e7d2bbab46768d101c53␟4672676563300001774: No actions for trigger `,[[1,"space-y-2"],["class","flex items-center space-x-2",4,"ngIf"],[1,"my-4"],[1,"flex","items-center","space-x-2"],["for","driver","matTooltip","System to use for available status variables and function calls",1,"whitespace-nowrap"],s,["name","system",1,"h-12",3,"query_fn","ngModel","ngModelChange"],[1,"flex","items-center","my-4"],["mat-icon-button","",3,"disabled","click"],["className","backoffice-plus"],[1,"font-medium","text-lg"],t,["role","table",4,"ngIf","ngIfElse"],[1,"flex","items-center","space-x-2","my-4"],_,["no_conditions",""],["no_actions",""],n,[1,"value"],o,["role","table"],["table-head","",4,"ngIf"],["table-body",""],["table-row","",4,"ngFor","ngForOf"],["table-head",""],c,[1,"flex-1","p-2"],["table-row",""],[1,"w-12"],[1,"w-24","flex","items-center","justify-center"],[3,"icon"],["mat-icon-button","",3,"click"],a,["className","backoffice-edit"],["className","backoffice-trash"],["table-body","","cdkDropList","",3,"cdkDropListDropped"],["table-row","","cdkDrag","",4,"ngFor","ngForOf"],d,["table-row","","cdkDrag",""],["cdkDragHandle","",1,"w-12","flex","items-center","justify-center"],["class","p-4 border-4 border-dashed border-black bg-gray-300",4,"cdkDragPlaceholder"],[1,"p-4","border-4","border-dashed","border-black","bg-gray-300"],C,[3,"matTooltip"],y,[1,"flex","flex-col","items-center","p-8"],Z,D]},template:function(t,_){if(1&t&&(e.TgZ(0,"section",0),e.YNc(1,H,6,3,"div",1),e.YNc(2,j,6,3,"div",1),e.qZA(),e._UZ(3,"hr",2),e.TgZ(4,"div",3)(5,"label",4),e.SDv(6,5),e.qZA(),e.TgZ(7,"item-search-field",6),e.NdJ("ngModelChange",function(o){return _.template_system=o}),e.qZA()(),e.TgZ(8,"header",7)(9,"button",8),e.NdJ("click",function(){return _.editCondition()}),e._UZ(10,"app-icon",9),e.qZA(),e.TgZ(11,"div",10),e.SDv(12,11),e.qZA()(),e.YNc(13,_e,7,4,"section",12),e.TgZ(14,"header",13)(15,"button",8),e.NdJ("click",function(){return _.editAction()}),e._UZ(16,"app-icon",9),e.qZA(),e.TgZ(17,"div",10),e.SDv(18,14),e.qZA()(),e.YNc(19,ae,7,4,"section",12),e.YNc(20,de,2,0,"ng-template",null,15,e.W1O),e.YNc(22,le,2,0,"ng-template",null,16,e.W1O)),2&t){const n=e.MAs(21),o=e.MAs(23);e.xp6(1),e.Q6J("ngIf",_.item.created_at),e.xp6(1),e.Q6J("ngIf",_.item.updated_at),e.xp6(5),e.Q6J("query_fn",_.query_fn)("ngModel",_.template_system),e.xp6(2),e.Q6J("disabled",!_.template_system),e.xp6(4),e.Q6J("ngIf",_.comparisons.length||_.time_dependents.length)("ngIfElse",n),e.xp6(2),e.Q6J("disabled",!_.template_system),e.xp6(4),e.Q6J("ngIf",_.functions.length||_.mailers.length)("ngIfElse",o)}},directives:[m.O5,N.gM,z.y,p.JJ,p.On,h.lW,G.o,m.sg,E.Wj,E.Zt,E.Bh,E.Hk],pipes:[U.R,m.Ts,Y.M],styles:["[_nghost-%COMP%]{padding:1rem;height:100%;width:100%}"]}),i})()},{path:"instances",component:(()=>{class i{constructor(t){this._service=t,this.instances=this._service.instances,this.connected={},this.deleteTrigger=_=>this._service.removeTriggerFromSystem(_)}get item(){return this._service.active_item}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(b))},i.\u0275cmp=e.Xpm({type:i,selectors:[["trigger-systems"]],decls:4,vars:4,consts:function(){let s,t,_;return s=$localize`:@@systemTableName␟a00b3fab0247b5f24e425efaeb163f6e0a46bf41␟8903333566889559902: Parent ID `,t=$localize`:@@systemTableAdded␟2eb7d7c2b3e22d1a719fb20ddf67d87c565f4c7a␟4724324591383487398: Added `,_=$localize`:@@systemTableEmpty␟0c246c3a5d499a8fa40ffd072ae9bd7ff1c2d5ca␟4487301581823190563: No instances of trigger `,[["role","table",4,"ngIf","ngIfElse"],["empty_state",""],["role","table"],["table-head",""],[1,"w-12","h-10"],[1,"flex-1","h-10","flex","items-center"],s,[1,"w-32","h-10","flex","items-center"],t,["table-body",""],["table-row","",4,"ngFor","ngForOf"],["table-row",""],[1,"w-12","flex","items-center","justify-center"],[1,"h-2","w-2","rounded-full","bg-black"],[1,"flex-1","p-2"],["class","underline",3,"routerLink","matTooltip",4,"ngIf"],[1,"w-32","p-2"],["mat-icon-button","",3,"click"],["className","backoffice-trash"],[1,"underline",3,"routerLink","matTooltip"],[1,"flex","flex-col","items-center","p-8"],[1,"text"],_]},template:function(t,_){if(1&t&&(e.YNc(0,Se,11,3,"div",0),e.ALo(1,"async"),e.YNc(2,Ce,3,0,"ng-template",null,1,e.W1O)),2&t){const n=e.MAs(3);let o;e.Q6J("ngIf",null==(o=e.lcZ(1,2,_.instances))?null:o.length)("ngIfElse",n)}},directives:[m.O5,m.sg,F.yS,N.gM,h.lW,G.o],pipes:[m.Ov,U.R],styles:["[_nghost-%COMP%]{padding:1rem;height:100%;width:100%}.active[_ngcontent-%COMP%]{background-color:var(--success)!important}"]}),i})()},{path:"extend/:id",component:r(9960).z},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}];var Oe=r(9522);let Re=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[m.ez,p.u5,F.Bz.forChild(fe),Oe.X,E._t]]}),i})()}}]);