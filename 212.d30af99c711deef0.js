"use strict";(self.webpackChunkbackoffice=self.webpackChunkbackoffice||[]).push([[212],{1212:(Oe,b,c)=>{c.r(b),c.d(b,{AppDomainsModule:()=>he});var d=c(6575),p=c(987),I=c(9794),v=c(3759),f=c(9928),A=c(1670),l=c(5530),D=c(462),g=c(8159),C=c(5046),N=c(6520),u=c(7422),P=c(8175),S=c(680),x=c(7627),y=c(3540),w=c(4629),L=c(9134),e=c(163),U=c(6861);let h=(()=>{class i{get active_item(){return this._state.active_item}constructor(t,n){this._state=t,this._dialog=n,this._loading=new D.X(!1),this._changed=new D.X(0),this.item=this._state.item,this.loading=this._loading.asObservable(),this.users=(0,g.aj)([this._changed,this.item]).pipe((0,C.h)(([o,a])=>a instanceof l.OeX),(0,N.w)(([o,a])=>(0,l.E4d)({authority_id:a.id})),(0,u.U)(o=>o.data),(0,P.K)(o=>[]),(0,S.d)(1)),this.auth_sources=(0,g.aj)([this._changed,this.item]).pipe((0,C.h)(([o,a])=>a instanceof l.OeX),(0,N.w)(([o,a])=>{const s={authority_id:a.id};return(0,g.aj)([(0,l.x72)(s).pipe((0,u.U)(_=>_.data)),(0,l.mkA)(s).pipe((0,u.U)(_=>_.data)),(0,l.U33)(s).pipe((0,u.U)(_=>_.data))])}),(0,u.U)(o=>{let a=[];return o.forEach(s=>a=a.concat(s)),a}),(0,P.K)(o=>[]),(0,S.d)(1)),this.applications=(0,g.aj)([this._changed,this.item]).pipe((0,C.h)(([o,a])=>a instanceof l.OeX),(0,N.w)(([o,a])=>(0,l.s0z)({authority_id:a.id})),(0,u.U)(o=>o.data),(0,P.K)(o=>[]),(0,S.d)(1)),this.counts=(0,g.aj)([this._changed,this.item]).pipe((0,C.h)(([o,a])=>a instanceof l.OeX),(0,N.w)(function(){var o=(0,A.Z)(function*([a,s]){const _={authority_id:s?.id},O=yield Promise.all([(0,l.s0z)(_).pipe((0,u.U)(T=>T.total)).toPromise(),(0,g.aj)([(0,l.x72)(_),(0,l.mkA)(_),(0,l.U33)(_)]).pipe((0,u.U)(([T,Ne,Se])=>T.total+Ne.total+Se.total)).toPromise(),(0,l.E4d)(_).pipe((0,u.U)(T=>T.total)).toPromise()]),[m,Te,Ce]=O;return{applications:m,auth_sources:Te||0,users:Ce}});return function(a){return o.apply(this,arguments)}}()),(0,S.d)(1))}update(t){var n=this;return(0,A.Z)(function*(){const o=yield(0,l.gKz)(t.id,t).toPromise();n._state.replaceItem(o)})()}editApplication(t){var n=this;return(0,A.Z)(function*(){t=t||new l.BEM({owner_id:n.active_item.id});const o=n._dialog.open(L.K,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{item:t,name:"Application",save:s=>(delete s.client_id,s.id?(0,l.liQ)(s.id,s):(0,l.E9B)(s))}});(yield Promise.race([o.componentInstance.event.pipe((0,x.P)(s=>"done"===s.reason)).toPromise(),o.afterClosed().toPromise()]))&&n._changed.next((new Date).valueOf())})()}deleteApplication(t){var n=this;return(0,A.Z)(function*(){const o=yield(0,v._5)({title:"Delete application",content:`<p>Are you sure you want delete the application ${t.name}?</p><p>Configuration will be <strong>immediately</strong> updated</p>`,icon:{type:"icon",class:"backoffice-trash"}},n._dialog);if(!o)return;o.loading("Deleting domain application...");const a=yield(0,l.YnK)(t.id).toPromise().catch(s=>s);if(o.close(),a)return(0,f.cB)(`Error removing domain application. Error: ${a.responseText||a.message||a}`);(0,f.t5)("Successfully removed domain application."),n._changed.next((new Date).valueOf())})()}editAuthSource(t){var n=this;return(0,A.Z)(function*(){const o=n._dialog.open(w._,{height:"auto",width:"auto",maxHeight:"calc(100vh - 2em)",maxWidth:"calc(100vw - 2em)",data:{auth_source:t,domain:n.active_item}});(yield Promise.race([o.componentInstance.event.pipe((0,x.P)(s=>"done"===s.reason)).toPromise(),o.afterClosed().toPromise()]))&&n._changed.next((new Date).valueOf())})()}deleteAuthSource(t){var n=this;return(0,A.Z)(function*(){const o=yield(0,v._5)({title:"Delete auth source",content:"<p>Are you sure you want delete this auth source?</p><p>Deleting this will remove this auth source <strong>immediately</strong></p>",icon:{type:"icon",class:"backoffice-trash"}},n._dialog);if(!o)return;o.loading("Deleting domain auth source...");const s=yield(t instanceof l.v27?l.MF5:t instanceof l.fcV?l.Hg4:l.hFt)(t.id).toPromise().catch(_=>_);if(o.close(),s)return(0,f.cB)(`Error removing domain auth source. Error: ${s.responseText||s.message||s}`);(0,f.t5)("Successfully removed domain auth source."),n._changed.next((new Date).valueOf())})()}static#e=this.\u0275fac=function(n){return new(n||i)(e.LFG(y.L),e.LFG(U.uw))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var M=c(5997),E=c(702);const J=()=>({class:"backoffice-edit"}),G=()=>({class:"backoffice-trash"});function K(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",18)(1,"div",19),e._uU(2),e.qZA(),e.TgZ(3,"div",20)(4,"a",21),e._uU(5),e.qZA()(),e.TgZ(6,"div",22),e._uU(7),e.qZA(),e.TgZ(8,"div",23),e.NdJ("click",function(){const a=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.show_secret[a.id]?s.copySecret(a):s.show_secret[a.id]=!0)}),e._uU(9),e.qZA(),e.TgZ(10,"div",13),e._uU(11),e.qZA(),e.TgZ(12,"div",24)(13,"button",25),e.NdJ("click",function(){const a=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.editApplication(a))}),e._UZ(14,"app-icon",26),e.qZA(),e.TgZ(15,"button",25),e.NdJ("click",function(){const a=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.deleteApplication(a))}),e._UZ(16,"app-icon",26),e.qZA()()()}if(2&i){const t=r.$implicit,n=e.oxw(2);e.xp6(1),e.Q6J("matTooltip",t.id),e.xp6(1),e.hij(" ",t.name," "),e.xp6(2),e.Q6J("href",t.redirect_uri,e.LSH),e.xp6(1),e.Oqu(t.redirect_uri),e.xp6(2),e.Oqu(t.uid),e.xp6(2),e.hij(" ",n.show_secret[t.id]?t.secret:"Show"," "),e.xp6(2),e.Oqu(t.scopes),e.xp6(3),e.Q6J("icon",e.DdM(9,J)),e.xp6(2),e.Q6J("icon",e.DdM(10,G))}}function X(i,r){if(1&i&&(e.TgZ(0,"div",4)(1,"div",5)(2,"div",6),e.SDv(3,7),e.qZA(),e.TgZ(4,"div",8),e.SDv(5,9),e.qZA(),e.TgZ(6,"div",10),e.SDv(7,11),e.qZA(),e.TgZ(8,"div",10),e.SDv(9,12),e.qZA(),e.TgZ(10,"div",13),e.SDv(11,14),e.qZA(),e._UZ(12,"div",15),e.qZA(),e.TgZ(13,"div",16),e.YNc(14,K,17,11,"div",17),e.ALo(15,"async"),e.qZA()()),2&i){const t=e.oxw();e.xp6(14),e.Q6J("ngForOf",e.lcZ(15,1,t.applications))}}function B(i,r){1&i&&(e.TgZ(0,"div",27)(1,"p"),e.SDv(2,28),e.qZA()())}let Q=(()=>{class i{get item(){return this._service.active_item}constructor(t){this._service=t,this.applications=this._service.applications,this.show_secret={},this.newApplication=()=>this._service.editApplication(),this.editApplication=n=>this._service.editApplication(n),this.deleteApplication=n=>this._service.deleteApplication(n)}copySecret(t){this.show_secret[t.id]=!1,(0,v.vQ)(t.secret),(0,f.QD)("Copied client secret to clipboard")}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(h))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["domain-applications"]],decls:6,vars:4,consts:()=>{let t,n,o,a,s,_,O;return t=$localize`:@@newAction␟e52e813986371a88c59323af3c9d8da38478f965␟5246705805960054024: New Application `,n=$localize`:@@applicationTableName␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`,o=$localize`:@@applicationTableRedirect␟456ce20b69c958dc40f0dab49846d5897ccd8ec6␟5024629742833911975: Redirect `,a=$localize`:@@applicationTableClientId␟840511dcea70155a8d6bf4fed9cfb8be99c3e993␟8346708718262149469: Client ID `,s=$localize`:@@applicationTableClientSecret␟11beb5aa46777f84924269d2993663207259f23b␟3825659513733533123: Secret `,_=$localize`:@@applicationTableScope␟1481b8488e10dbc437accce89d2ae35a0106e8ba␟5590086849807274701:Scope`,O=$localize`:@@applicationTableEmpty␟923cb1a5e46a6e5ba971e0cd2fa58c53e4ad4f26␟342003372328863922:No applications found`,[["btn","",1,"w-full","sm:w-40","mb-4",3,"click"],t,["role","table","class","overflow-x-auto",4,"ngIf","ngIfElse"],["empty_state",""],["role","table",1,"overflow-x-auto"],["table-head",""],[1,"w-40","p-2"],n,[1,"flex-1","p-2"],o,[1,"w-48","p-2"],a,s,[1,"w-24","p-2"],_,[1,"w-24"],["table-body",""],["table-row","",4,"ngFor","ngForOf"],["table-row",""],[1,"w-40","p-2",3,"matTooltip"],[1,"flex-1","p-2","underline","overflow-hidden"],[1,"truncate",3,"href"],[1,"w-48","p-2","truncate","text-xs"],[1,"w-48","p-2","truncate","underline","text-center","text-xs",3,"click"],[1,"w-24","flex","items-center","justify-center"],["btn","","icon","",3,"click"],[3,"icon"],["empty-state",""],O]},template:function(n,o){if(1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.newApplication()}),e.SDv(1,1),e.qZA(),e.YNc(2,X,16,3,"div",2),e.ALo(3,"async"),e.YNc(4,B,3,0,"ng-template",null,3,e.W1O)),2&n){const a=e.MAs(5);let s;e.xp6(2),e.Q6J("ngIf",null==(s=e.lcZ(3,2,o.applications))?null:s.length)("ngIfElse",a)}},dependencies:[d.sg,d.O5,M.o,E.gM,d.Ov],styles:["[_nghost-%COMP%]{height:100%;width:100%}[role=table][_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{min-width:56rem}\n\n/*# sourceMappingURL=domain-applications.component.ts-angular-inline--39.css.map*/"]})}return i})();const z=()=>({class:"backoffice-edit"}),j=()=>({class:"backoffice-trash"});function H(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",15)(1,"div",16),e._uU(2),e.qZA(),e.TgZ(3,"div",8),e._uU(4),e.qZA(),e.TgZ(5,"div",17),e._uU(6),e.qZA(),e.TgZ(7,"div",18)(8,"button",19),e.NdJ("click",function(){const a=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.editAuthSource(a))}),e._UZ(9,"app-icon",20),e.qZA(),e.TgZ(10,"button",19),e.NdJ("click",function(){const a=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.deleteAuthSource(a))}),e._UZ(11,"app-icon",20),e.qZA()()()}if(2&i){const t=r.$implicit;e.xp6(2),e.hij(" ",t.id," "),e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.Oqu(t.type),e.xp6(3),e.Q6J("icon",e.DdM(5,z)),e.xp6(2),e.Q6J("icon",e.DdM(6,j))}}function q(i,r){if(1&i&&(e.TgZ(0,"div",4)(1,"div",5)(2,"div",6),e.SDv(3,7),e.qZA(),e.TgZ(4,"div",8),e.SDv(5,9),e.qZA(),e.TgZ(6,"div",10),e.SDv(7,11),e.qZA(),e._UZ(8,"div",12),e.qZA(),e.TgZ(9,"div",13),e.YNc(10,H,12,7,"div",14),e.ALo(11,"async"),e.qZA()()),2&i){const t=e.oxw();e.xp6(10),e.Q6J("ngForOf",e.lcZ(11,1,t.auth_sources))}}function Y(i,r){1&i&&(e.TgZ(0,"div",21)(1,"p"),e.SDv(2,22),e.qZA()())}let k=(()=>{class i{get item(){return this._service.active_item}constructor(t){this._service=t,this.auth_sources=this._service.auth_sources,this.source_types={},this.newAuthSource=()=>this._service.editAuthSource(),this.editAuthSource=n=>this._service.editAuthSource(n),this.deleteAuthSource=n=>this._service.deleteAuthSource(n)}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(h))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["domain-authentication"]],decls:6,vars:4,consts:()=>{let t,n,o,a,s;return t=$localize`:@@newAction␟6611b36989ce0ac0e6437348efd57a5a96c4ffdf␟7679670316876315524: New Auth Source `,n=$localize`:@@authTableID␟45cc8ca94b5a50842a9a8ef804a5ab089a38ae5c␟8040881171107393560:ID`,o=$localize`:@@authTableName␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`,a=$localize`:@@authTableType␟f61c6867295f3b53d23557021f2f4e0aa1d0b8fc␟8650499415827640724:Type`,s=$localize`:@@authTableEmpty␟506dd45c68934158515169b689d4f77c5befe8f0␟6274894139040079425:No authentication sources found`,[["btn","",1,"w-full","sm:w-40","mb-4",3,"click"],t,["role","table","class","min-w-[36rem]",4,"ngIf","ngIfElse"],["empty_state",""],["role","table",1,"min-w-[36rem]"],["table-head",""],[1,"w-48","p-2"],n,[1,"flex-1","p-2"],o,[1,"w-32","p-2"],a,[1,"w-24","p-2"],["table-body",""],["table-row","",4,"ngFor","ngForOf"],["table-row",""],[1,"w-48","p-2","mono","text-xs"],[1,"w-32","p-2","uppercase"],[1,"w-24","flex","items-center","justify-center"],["btn","","icon","",3,"click"],[3,"icon"],["empty-state",""],s]},template:function(n,o){if(1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.newAuthSource()}),e.SDv(1,1),e.qZA(),e.YNc(2,q,12,3,"div",2),e.ALo(3,"async"),e.YNc(4,Y,3,0,"ng-template",null,3,e.W1O)),2&n){const a=e.MAs(5);let s;e.xp6(2),e.Q6J("ngIf",null==(s=e.lcZ(3,2,o.auth_sources))?null:s.length)("ngIfElse",a)}},dependencies:[d.sg,d.O5,M.o,d.Ov],styles:["[_nghost-%COMP%]{height:100%;width:100%}\n\n/*# sourceMappingURL=domain-authentication.component.ts-angular-inline--40.css.map*/"]})}return i})();const W=i=>["/users",i];function V(i,r){if(1&i&&(e.TgZ(0,"div",12)(1,"div",13)(2,"a",14),e._uU(3),e.qZA()(),e.TgZ(4,"div",15)(5,"a",16),e._uU(6),e.qZA()(),e.TgZ(7,"div",8)(8,"code"),e._uU(9),e.qZA()()()),2&i){const t=r.$implicit;e.xp6(2),e.Q6J("routerLink",e.VKq(8,W,t.id))("matTooltip",t.id),e.xp6(1),e.hij(" ",t.name," "),e.xp6(2),e.Q6J("href","mailto:"+t.email,e.LSH),e.xp6(1),e.Oqu(t.email),e.xp6(2),e.ekj("text-opacity-20",!t.sys_admin&&!t.support),e.xp6(1),e.hij(" ",t.sys_admin?"Admin":t.support?"Support":"None"," ")}}function ee(i,r){if(1&i&&(e.TgZ(0,"div",2)(1,"div",3)(2,"div",4),e.SDv(3,5),e.qZA(),e.TgZ(4,"div",6),e.SDv(5,7),e.qZA(),e.TgZ(6,"div",8),e.SDv(7,9),e.qZA()(),e.TgZ(8,"div",10),e.YNc(9,V,10,10,"div",11),e.ALo(10,"async"),e.qZA()()),2&i){const t=e.oxw();e.xp6(9),e.Q6J("ngForOf",e.lcZ(10,1,t.users))}}function te(i,r){1&i&&(e.TgZ(0,"div",17)(1,"p"),e.SDv(2,18),e.qZA()())}let ne=(()=>{class i{get item(){return this._service.active_item}constructor(t){this._service=t,this.users=this._service.users}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(h))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["domain-users"]],decls:4,vars:4,consts:()=>{let t,n,o,a;return t=$localize`:@@userTableName␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`,n=$localize`:@@userTableEmail␟244aae9346da82b0922506c2d2581373a15641cc␟4768749765465246664:Email`,o=$localize`:@@userTableRole␟c36a66f2107e8da5371ebc9d15c2008dff567f46␟4145496584631696119:Role`,a=$localize`:@@userTableEmpty␟67ee7926397076ce825a19afd08bb4d9f1b49996␟5542443948440901403:No users associated with domain`,[["role","table",4,"ngIf","ngIfElse"],["empty_state",""],["role","table"],["table-head",""],[1,"w-64","p-2"],t,[1,"flex-1","p-2"],n,[1,"w-24","p-2"],o,["table-body",""],["table-row","",4,"ngFor","ngForOf"],["table-row",""],[1,"w-64","p-2","underline"],["matTooltipPosition","right",3,"routerLink","matTooltip"],[1,"flex-1","p-2","underline"],[3,"href"],[1,"flex","flex-col","items-center","p-8"],a]},template:function(n,o){if(1&n&&(e.YNc(0,ee,11,3,"div",0),e.ALo(1,"async"),e.YNc(2,te,3,0,"ng-template",null,1,e.W1O)),2&n){const a=e.MAs(3);let s;e.Q6J("ngIf",null==(s=e.lcZ(1,2,o.users))?null:s.length)("ngIfElse",a)}},dependencies:[d.sg,d.O5,I.rH,E.gM,d.Ov],styles:["[_nghost-%COMP%]{height:100%;width:100%}\n\n/*# sourceMappingURL=domain-users.component.ts-angular-inline--41.css.map*/"]})}return i})();var Z=c(4424),$=c(5113),ie=c(8590),F=c(989),R=c(257);function oe(i,r){1&i&&e._UZ(0,"settings-form-field",9),2&i&&e.Q6J("readonly",!1)}function ae(i,r){1&i&&e._UZ(0,"settings-form-field",10),2&i&&e.Q6J("readonly",!1)}function se(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"section",2)(1,"button",3),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.saveChanges())}),e._uU(2,"Save Changes"),e.qZA(),e.TgZ(3,"mat-tab-group",4),e.NdJ("selectedIndexChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.index=o)}),e._UZ(4,"mat-tab",5)(5,"mat-tab",6),e.qZA(),e.YNc(6,oe,1,1,"settings-form-field",7)(7,ae,1,1,"settings-form-field",8),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("formGroup",t.form),e.xp6(3),e.Q6J("selectedIndex",t.index),e.xp6(3),e.Q6J("ngIf",1!==t.index),e.xp6(1),e.Q6J("ngIf",1===t.index)}}let ce=(()=>{class i extends Z.c{get item(){return this._service.active_item}constructor(t){super(),this._service=t,this.form=new p.cw({config:new p.NI("",[$.NS]),internals:new p.NI("",[$.NS])})}ngOnInit(){this.subscription("item",this._service.item.subscribe(t=>this.loadForm()))}saveChanges(){var t=this;return(0,A.Z)(function*(){if(!t.form.valid)return;const n=new l.OeX({...t.item,config:JSON.parse(t.form.value.config),internals:JSON.parse(t.form.value.internals)});yield t._service.update(n),(0,f.t5)("Successfully updated domain settings.")})()}loadForm(){this.form.patchValue({internals:JSON.stringify(this.item.internals,void 0,4),config:JSON.stringify(this.item.config,void 0,4)})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(h))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-domain-about"]],features:[e.qOj],decls:3,vars:1,consts:[[1,"text-lg","font-medium","mb-2"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],["btn","","matRipple","",3,"click"],[3,"selectedIndex","selectedIndexChange"],["label","Config"],["label","Internals"],["formControlName","config","lang","json",3,"readonly",4,"ngIf"],["formControlName","internals","lang","json",3,"readonly",4,"ngIf"],["formControlName","config","lang","json",3,"readonly"],["formControlName","internals","lang","json",3,"readonly"]],template:function(n,o){1&n&&(e.TgZ(0,"h3",0),e._uU(1,"Settings"),e.qZA(),e.YNc(2,se,8,4,"section",1)),2&n&&(e.xp6(2),e.Q6J("ngIf",o.form))},dependencies:[d.O5,p.JJ,p.JL,p.sg,p.u,ie.x,F.uX,F.SP,R.wG],styles:["[_nghost-%COMP%]{height:100%;width:100%}\n\n/*# sourceMappingURL=domain-about.component.ts-angular-inline--42.css.map*/"]})}return i})();var le=c(6497),_e=c(2941),re=c(2637),de=c(8771),pe=c(6529),ue=c(4331),me=c(1387);function Ae(i,r){if(1&i){const t=e.EpF();e.ynx(0),e._UZ(1,"item-details",11)(2,"item-tablist",12),e.TgZ(3,"div",13,14),e.NdJ("scroll",function(){e.CHM(t);const o=e.MAs(4),a=e.oxw();return e.KtG(a.scroll=o.scrollTop)}),e._UZ(5,"router-outlet"),e.qZA(),e.BQk()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("can_edit",!0)("item",t.item),e.xp6(1),e.Q6J("base",t.name)("tabs",t.tab_list)("scrolled",t.scroll>0)}}const fe=[{path:":id",component:(()=>{class i extends Z.c{get item(){return this._service.active_item}get extensions(){return(0,_e.fq)(this._service.active_item,this.name)}constructor(t,n){super(),this._service=t,this._item=n,this.name="domains",this.open_menu=!1,this.tab_list=[],this.newItem=()=>this._item.create()}updateTabList(t){this.tab_list=[{id:"about",name:"About",icon:{class:"backoffice-info-with-circle"}},{id:"applications",name:"Applications",count:t.applications||0,icon:{class:"backoffice-publish"}},{id:"authentication",name:"Authentication",count:t.auth_sources||0,icon:{class:"backoffice-lock-open"}},{id:"users",name:"Users",count:t.users||0,icon:{class:"backoffice-users"}}].concat(this.extensions)}ngOnInit(){this.updateTabList({}),this.subscription("item",this._service.counts.subscribe(t=>this.updateTabList(t)))}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(h),e.Y36(y.L))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["new-domains-view"]],features:[e.qOj],decls:11,vars:5,consts:[[1,"absolute","inset-0","flex","items-center","divide-y","sm:divide-y-0","sm:divide-x","divide-base-200","bg-base-100"],[1,"sm:h-full",3,"open","openChange"],["title","Domains",1,"hidden","sm:block",3,"route"],[1,"flex-1","w-1/2","h-full","relative","flex","flex-col","z-0"],["title","Domains",1,"z-20","sm:hidden",3,"route"],["btn","","icon","",1,"sm:hidden","mr-2",3,"click"],["className","backoffice-menu"],[1,"flex","flex-col","flex-1","h-1/2"],[4,"ngIf"],["matTooltip","New domain","matTooltipPosition","right","matRipple","",1,"absolute","bottom-2","left-2","sm:-left-9","w-12","h-12","flex","items-center","justify-center","bg-secondary","rounded-lg","shadow","z-30","text-secondary-content",3,"click"],[1,"text-3xl",3,"className"],["type","Domain",3,"can_edit","item"],[1,"z-10",3,"base","tabs","scrolled"],[1,"flex-1","h-1/2","w-full","overflow-auto","p-4","z-0","relative",3,"scroll"],["el",""]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"sidebar-menu",1),e.NdJ("openChange",function(s){return o.open_menu=s}),e.qZA(),e._UZ(2,"item-sidebar",2),e.TgZ(3,"div",3)(4,"item-selection",4)(5,"button",5),e.NdJ("click",function(){return o.open_menu=!0}),e._UZ(6,"app-icon",6),e.qZA()(),e.TgZ(7,"div",7),e.YNc(8,Ae,6,5,"ng-container",8),e.qZA(),e.TgZ(9,"button",9),e.NdJ("click",function(){return o.newItem()}),e._UZ(10,"app-icon",10),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("open",o.open_menu),e.xp6(1),e.Q6J("route",o.name),e.xp6(2),e.Q6J("route",o.name),e.xp6(4),e.Q6J("ngIf",null==o.item?null:o.item.id),e.xp6(2),e.Q6J("className","backoffice-plus"))},dependencies:[d.O5,I.lC,M.o,re.$,de.V,pe.K,ue.r,me.l,E.gM,R.wG]})}return i})(),children:[{path:"about",component:ce},{path:"applications",component:Q},{path:"authentication",component:k},{path:"users",component:ne},{path:"extend/:id",component:le.z},{path:"**",redirectTo:"about"}]},{path:"**",redirectTo:"-"}];var ge=c(5858);let he=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[d.ez,p.u5,p.UX,I.Bz.forChild(fe),ge.X]})}return i})()}}]);
//# sourceMappingURL=212.d30af99c711deef0.js.map