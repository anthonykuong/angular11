(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8Gt8":function(t,e,n){"use strict";n.r(e);var s=n("2kYt"),r=n("sEIs"),i=n("EM62"),o=n("+NKA"),a=n("s2Ay"),c=n("VgHu"),f=n("SCEx"),u=n("nIj0");let l=(()=>{class t extends f.a{constructor(t){super(t),this.event=new i.n}initForm(){this.modelEvent=this.profile,this.formEvent=this.formBuilder.group({firstName:[this.modelEvent.firstName,u.l.required],lastName:[this.modelEvent.lastName,u.l.required]})}submitData(){const t=Object.assign({},this.modelEvent),e=Object.assign({},this.raw),n=Object.assign(t,e);this.event.emit(n)}setEvent(){}submissionError(t){}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(i.r))},t.\u0275cmp=i.Gb({type:t,selectors:[["frontend-sessions-pu-presentation-form"]],inputs:{profile:"profile"},outputs:{event:"event"},features:[i.wb],decls:13,vars:7,consts:[[3,"formGroup","submit"],[1,"form-group"],["for","firstName-input"],["formControlName","firstName","type","text","id","firstName-input",1,"form-control"],["for","lastName-input"],["formControlName","lastName","type","text","id","lastName-input",1,"form-control"],["type","submit",1,"btn","btn-primary"]],template:function(t,e){1&t&&(i.Rb(0,"form",0),i.dc("submit",(function(){return e.attemptFormSubmission()})),i.Rb(1,"div",1),i.Rb(2,"label",2),i.Bc(3),i.gc(4,"translate"),i.Qb(),i.Nb(5,"input",3),i.Qb(),i.Rb(6,"div",1),i.Rb(7,"label",4),i.Bc(8),i.gc(9,"translate"),i.Qb(),i.Nb(10,"input",5),i.Qb(),i.Rb(11,"button",6),i.Bc(12,"Next"),i.Qb(),i.Qb()),2&t&&(i.kc("formGroup",e.formEvent),i.zb(3),i.Cc(i.hc(4,3,"firstName")),i.zb(5),i.Cc(i.hc(9,5,"lastName")))},directives:[u.n,u.i,u.d,u.a,u.h,u.c],pipes:[a.c],styles:[""]}),t})();function p(t,e){if(1&t){const t=i.Sb();i.Rb(0,"frontend-sessions-pu-presentation-form",2),i.dc("event",(function(e){return i.tc(t),i.fc().updateProfile(e)})),i.gc(1,"async"),i.Qb()}if(2&t){const t=i.fc();i.kc("profile",i.hc(1,1,t.profile$))}}let b=(()=>{class t{constructor(t,e){this.store=t,this.translateService=e}ngOnInit(){this.store.loadProfile(),this.profile$=this.store.profile$}updateProfile(t){this.store.updateProfile(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(o.a),i.Mb(a.d))},t.\u0275cmp=i.Gb({type:t,selectors:[["frontend-sessions-pu-basic-container"]],decls:3,vars:1,consts:[[1,"container"],[3,"profile","event",4,"ngIf"],[3,"profile","event"]],template:function(t,e){1&t&&(i.Rb(0,"div",0),i.zc(1,p,2,3,"frontend-sessions-pu-presentation-form",1),i.Nb(2,"frontend-sessions-links"),i.Qb()),2&t&&(i.zb(1),i.kc("ngIf",e.profile$))},directives:[s.k,c.a,l],pipes:[s.b],styles:[""]}),t})();var m=n("XpLe"),d=n("7Fn/");n.d(e,"BasicInformationModule",(function(){return v}));let v=(()=>{class t{constructor(t){this.languageService=t,this.languageService.init()}}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)(i.Zb(d.a))},imports:[[s.c,r.i.forChild([{path:"",component:b}]),a.b,u.k,m.a]]}),t})()}}]);