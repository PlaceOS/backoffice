"use strict";(self.webpackChunkbackoffice=self.webpackChunkbackoffice||[]).push([[497],{2497:(Y,A,s)=>{s.r(A),s.d(A,{AppUsersModule:()=>G});var i=s(6362),d=s(1876),p=s(9504),a=s(6123),r=s(1843),U=s(8537),_=s(6723),m=s(9101),R=s(1609);let g=(()=>{class t extends r.K{constructor(e){super(),this._service=e,this.name="users",this.show_options=this._service.show_options,this.tab_list=[]}get extensions(){return(0,U.fq)(this._service.active_item,this.name)}updateTabList(e){this.tab_list=[{id:"about",name:"About",icon:{class:"backoffice-info-with-circle"}},{id:"metadata",name:"Metadata",count:null==e?void 0:e.metadata,icon:{class:"backoffice-gist"}},{id:"history",name:"History",icon:{class:"backoffice-list"}}].concat(this.extensions)}ngOnInit(){this.subscription("item",this._service.item.subscribe(()=>this.updateTabList())),this.updateTabList()}}return t.\u0275fac=function(e){return new(e||t)(_.Y36(a.L))},t.\u0275cmp=_.Xpm({type:t,selectors:[["app-users"]],features:[_.qOj],decls:3,vars:1,consts:[[1,"flex-1","flex-col","sm:flex-row","flex","h-full","w-full","relative"],["heading","Users","name","users",1,"absolute","top-0","left-0","h-12","w-full","sm:h-full","sm:static"],["name","user","route","users",1,"flex-1","relative","mt-12","sm:mt-0","w-full","sm:w-1/2",3,"tabs"]],template:function(e,o){1&e&&(_.TgZ(0,"div",0),_._UZ(1,"sidebar",1)(2,"item-display",2),_.qZA()),2&e&&(_.xp6(2),_.Q6J("tabs",o.tab_list))},directives:[m.k,R.s],styles:["sidebar[_ngcontent-%COMP%]{transition:height .3s}@media screen and (min-width: 640px){sidebar[_ngcontent-%COMP%]{width:20em!important}}\n/*# sourceMappingURL=users.component.ts-angular-inline--53.css.map*/"]}),t})();var c=s(1196),f=s(239);function T(t,n){if(1&t&&(_.TgZ(0,"div",12)(1,"label"),_.SDv(2,13),_.qZA(),_.TgZ(3,"div",14)(4,"a",15),_._uU(5),_.qZA()()()),2&t){const e=_.oxw();_.xp6(4),_.Q6J("href","mailto:"+(null==e.item?null:e.item.email),_.LSH),_.xp6(1),_.Oqu(null==e.item?null:e.item.email)}}function M(t,n){if(1&t&&(_.TgZ(0,"div",12)(1,"label"),_.SDv(2,16),_.qZA(),_.TgZ(3,"div",14),_._uU(4),_.ALo(5,"dateFrom"),_.qZA()()),2&t){const e=_.oxw();_.xp6(4),_.hij(" ",_.lcZ(5,1,1e3*(null==e.item?null:e.item.created_at))," ")}}function P(t,n){if(1&t&&(_.TgZ(0,"div",12)(1,"label"),_.SDv(2,17),_.qZA(),_.TgZ(3,"div",14),_._uU(4),_.ALo(5,"dateFrom"),_.qZA()()),2&t){const e=_.oxw();_.xp6(4),_.hij(" ",_.lcZ(5,1,1e3*(null==e.item?null:e.item.updated_at))," ")}}function F(t,n){if(1&t&&(_.TgZ(0,"div",12)(1,"label"),_.SDv(2,18),_.qZA(),_.TgZ(3,"div",19),_._uU(4),_.qZA()()),2&t){const e=_.oxw();_.xp6(4),_.hij(" ",null==e.item?null:e.item.authority_id," ")}}function v(t,n){if(1&t&&(_.TgZ(0,"mat-chip"),_._uU(1),_.qZA()),2&t){const e=n.$implicit;_.xp6(1),_.Oqu(e)}}function N(t,n){if(1&t&&(_.TgZ(0,"div",14)(1,"mat-chip-list",23),_.YNc(2,v,2,1,"mat-chip",24),_.qZA()()),2&t){const e=_.oxw(2);_.xp6(2),_.Q6J("ngForOf",e.item.groups)}}function I(t,n){if(1&t&&(_.TgZ(0,"div",12)(1,"label",20),_.SDv(2,21),_.qZA(),_.YNc(3,N,3,1,"div",22),_.qZA()),2&t){const e=_.oxw(),o=_.MAs(24);_.xp6(3),_.Q6J("ngIf",null==e.item.groups?null:e.item.groups.length)("ngIfElse",o)}}function h(t,n){1&t&&(_.TgZ(0,"div",14),_._uU(1,"No Access Groups"),_.qZA())}let B=(()=>{class t{constructor(e){this._service=e}get item(){return this._service.active_item}}return t.\u0275fac=function(e){return new(e||t)(_.Y36(a.L))},t.\u0275cmp=_.Xpm({type:t,selectors:[["user-about"]],decls:25,vars:7,consts:function(){let n,e,o,S,E,O,C,u;return n=$localize`:@@techSupportRole␟031b6f40313933f6363bf8501916fb1167661df3␟7524309407036744400: User Role `,e=$localize`:@@techSupportRole␟2c67d427fc4370f7ebbc262e58af19c48a3cef5b␟3160540339920565657: Tech Support `,o=$localize`:@@systemAdminRole␟41029fd65510d474588802219fa1a77f3764381e␟8405084038860811251: System Admin `,S=$localize`:@@userCreatedAtLabel␟91b96d7228b6e05c238fa4e39abfc17ad51a6eef␟6631334172623029500:Email:`,E=$localize`:@@userCreatedAtLabel␟a5ed099ffc9e96f6970df843289ade8a7d20ab9f␟1616250945945379783:Created:`,O=$localize`:@userUpdatedAtLabel␟f94240161f912dbd8758b858877cddeab80f36cb␟1116759395536210856:Updated:`,C=$localize`:@userUpdatedAtLabel␟ce59f677986b7ffb7d9aecd079f5d117c5d4021b␟1873791838056734854:Authority ID:`,u=$localize`:@@userGroupsLabel␟de3e25c09f9ea2b26ac8502f589ec8cdeaa2ada0␟1800028427787031247:User Groups:`,[[1,"mb-4","space-y-2"],["class","flex items-center space-x-2",4,"ngIf"],["role","table"],["table-head",""],[1,"w-40","p-2"],n,[1,"flex-1","p-2"],["table-body",""],["table-row",""],e,o,["empty_group_state",""],[1,"flex","items-center","space-x-2"],S,[1,"value"],[3,"href"],E,O,C,[1,"value","mono"],["for","groups",1,"my-1"],u,["class","value",4,"ngIf","ngIfElse"],["name","groups"],[4,"ngFor","ngForOf"]]},template:function(e,o){1&e&&(_.TgZ(0,"section",0),_.YNc(1,T,6,2,"div",1),_.YNc(2,M,6,3,"div",1),_.YNc(3,P,6,3,"div",1),_.YNc(4,F,5,1,"div",1),_.YNc(5,I,4,2,"div",1),_.qZA(),_.TgZ(6,"section")(7,"div",2)(8,"div",3)(9,"div",4),_.SDv(10,5),_.qZA(),_._UZ(11,"div",6),_.qZA(),_.TgZ(12,"div",7)(13,"div",8)(14,"div",4),_.SDv(15,9),_.qZA(),_.TgZ(16,"div",6),_._uU(17),_.qZA()(),_.TgZ(18,"div",8)(19,"div",4),_.SDv(20,10),_.qZA(),_.TgZ(21,"div",6),_._uU(22),_.qZA()()()()(),_.YNc(23,h,2,0,"ng-template",null,11,_.W1O)),2&e&&(_.xp6(1),_.Q6J("ngIf",null==o.item?null:o.item.created_at),_.xp6(1),_.Q6J("ngIf",null==o.item?null:o.item.created_at),_.xp6(1),_.Q6J("ngIf",null==o.item?null:o.item.updated_at),_.xp6(1),_.Q6J("ngIf",null==o.item?null:o.item.authority_id),_.xp6(1),_.Q6J("ngIf",null==o.item?null:o.item.groups),_.xp6(12),_.hij(" ",!0===(null==o.item?null:o.item.support)," "),_.xp6(5),_.hij(" ",!0===(null==o.item?null:o.item.sys_admin)," "))},directives:[i.O5,c.qn,i.sg,c.HS],pipes:[f.R],styles:["[_nghost-%COMP%]{padding:1rem;width:100%;height:100%}\n/*# sourceMappingURL=user-about.component.ts-angular-inline--54.css.map*/"]}),t})();function b(t,n){if(1&t&&(_.TgZ(0,"div",10)(1,"div",4),_._uU(2),_.ALo(3,"date"),_.qZA(),_.TgZ(4,"div",4),_._uU(5),_.ALo(6,"date"),_.qZA(),_.TgZ(7,"div",4)(8,"div"),_._uU(9),_.qZA(),_.TgZ(10,"div"),_._uU(11,"View"),_.qZA()()()),2&t){const e=n.$implicit;_.xp6(2),_.hij(" ",_.xi3(3,3,e.start,"MMM d, y, h:mm a")," "),_.xp6(3),_.hij(" ",_.xi3(6,6,e.end,"MMM d, y, h:mm a")," "),_.xp6(4),_.Oqu(e.systems.length)}}function L(t,n){if(1&t&&(_.TgZ(0,"div",2)(1,"div",3)(2,"div",4),_.SDv(3,5),_.qZA(),_.TgZ(4,"div",4),_.SDv(5,6),_.qZA(),_.TgZ(6,"div",4),_.SDv(7,7),_.qZA()(),_.TgZ(8,"div",8),_.YNc(9,b,12,9,"div",9),_.qZA()()),2&t){const e=_.oxw();_.xp6(9),_.Q6J("ngForOf",e.logs)}}function y(t,n){1&t&&(_.TgZ(0,"div",11),_.SDv(1,12),_.qZA())}let Z=(()=>{class t extends r.K{constructor(e){super(),this._service=e,this.logs=[]}get item(){return this._service.active_item}ngOnInit(){this.subscription("item",this._service.item.subscribe(e=>{this.loadUserLogs()}))}loadUserLogs(e=0){}}return t.\u0275fac=function(e){return new(e||t)(_.Y36(a.L))},t.\u0275cmp=_.Xpm({type:t,selectors:[["user-history"]],features:[_.qOj],decls:3,vars:2,consts:function(){let n,e,o,S;return n=$localize`:@@logEventStart␟8d06853e46a6d74951ff1cf9617f069c91fd50c5␟2130731909238927129:Session Start`,e=$localize`:@@logEventEnd␟e5cdb48c00597060251112914bcac2582f564c38␟4243735233618363847:Ended`,o=$localize`:@@logEventAction␟5b0d0e1718f55dc2d351402810b8cd61b139400f␟7550650761322890930: Systems Accessed `,S=$localize`:@@logTableEmpty␟721160b85c58426d8f14dc1d83290969edb6585c␟1736905540793055600: No logs found `,[["role","table",4,"ngIf","ngIfElse"],["empty_state",""],["role","table"],["table-head",""],[1,"w-1/3"],n,e,o,["table-body",""],["table-row","",4,"ngFor","ngForOf"],["table-row",""],[1,"p-8","text-center"],S]},template:function(e,o){if(1&e&&(_.YNc(0,L,10,1,"div",0),_.YNc(1,y,2,0,"ng-template",null,1,_.W1O)),2&e){const S=_.MAs(2);_.Q6J("ngIf",null==o.logs?null:o.logs.length)("ngIfElse",S)}},directives:[i.O5,i.sg],pipes:[i.uU],styles:["[_nghost-%COMP%]{padding:1rem;height:100%;width:100%}\n/*# sourceMappingURL=user-history.component.ts-angular-inline--55.css.map*/"]}),t})();var $=s(9960),X=s(7639);function x(t,n){if(1&t&&(_.TgZ(0,"div",1),_._UZ(1,"metadata-display",2),_.qZA()),2&t){const e=_.oxw();_.xp6(1),_.Q6J("item",e.item)}}const K=[{path:":id",component:g,children:[{path:"about",component:B},{path:"metadata",component:(()=>{class t{constructor(e){this._service=e}get item(){return this._service.active_item}}return t.\u0275fac=function(e){return new(e||t)(_.Y36(a.L))},t.\u0275cmp=_.Xpm({type:t,selectors:[["user-metadata"]],decls:1,vars:1,consts:[["class","p-4",4,"ngIf"],[1,"p-4"],[3,"item"]],template:function(e,o){1&e&&_.YNc(0,x,2,1,"div",0),2&e&&_.Q6J("ngIf",o.item)},directives:[i.O5,X.J],styles:[""]}),t})()},{path:"history",component:Z},{path:"extend/:id",component:$.z},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}];var D=s(9522);let G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=_.oAB({type:t}),t.\u0275inj=_.cJS({imports:[[i.ez,d.u5,d.UX,p.Bz.forChild(K),D.X]]}),t})()}}]);
//# sourceMappingURL=497.3e063d26c73cf106.js.map