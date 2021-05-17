!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+NKA":function(n,i,r){"use strict";r.d(i,"a",(function(){return h}));var o,c=r("3oUN"),u=r("U94f"),a=r("PnBT"),s=Object(c.o)(a.a),f=Object(c.q)(s,(function(t){return t.isLoading})),b=Object(c.q)(s,(function(t){return t.isExistingForm})),p=Object(c.q)(s,(function(t){return t.profile})),l=(Object(c.q)(s,(function(t){return t.error})),Object(c.q)(s,(function(t){return t.page}))),d=r("EM62"),h=((o=function(){function n(e){t(this,n),this.store=e,this.isLoading$=this.store.pipe(Object(c.t)(f)),this.isExistingForm$=this.store.pipe(Object(c.t)(b)),this.profile$=this.store.pipe(Object(c.t)(p)),this.page$=this.store.pipe(Object(c.t)(l))}return e(n,[{key:"loadProfile",value:function(){this.store.dispatch(u.a())}},{key:"updateProfile",value:function(t){this.store.dispatch(u.b({profile:t}))}}]),n}()).\u0275fac=function(t){return new(t||o)(d.Yb(c.h))},o.\u0275prov=d.Hb({token:o,factory:o.\u0275fac,providedIn:"root"}),o)},"8hyf":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return r}));var i=function(t){return t[t.BASIC=0]="BASIC",t[t.CONTACT=1]="CONTACT",t[t.COMPLETE=2]="COMPLETE",t}({}),r={email:"",firstName:"",lastName:"",phoneNumber:""}},PnBT:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return s}));var i=e("3oUN"),r=e("U94f"),o=e("8hyf"),c="profile-update",u={profile:o.a,page:o.b.BASIC,isLoading:!1,isExistingForm:!1},a=Object(i.p)(u,Object(i.r)(r.a,(function(t){return Object.assign(Object.assign({},u),{isExistingForm:!0})})),Object(i.r)(r.b,(function(t,n){var e=n.profile;return Object.assign(Object.assign({},t),{profile:e,isLoading:!0})})),Object(i.r)(r.d,(function(t){return Object.assign(Object.assign({},t),{page:t.page+1,isLoading:!1})})),Object(i.r)(r.c,(function(t,n){var e=n.error;return Object.assign(Object.assign({},t),{error:e,isLoading:!1})})));function s(t,n){return a(t,n)}},U94f:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c})),e.d(n,"d",(function(){return u})),e.d(n,"c",(function(){return a}));var i=e("3oUN"),r=function(t){return"[Profile Update] "+t},o=Object(i.n)(r("loaded profile")),c=Object(i.n)(r("updating profile"),Object(i.s)()),u=Object(i.n)(r("update profile success")),a=Object(i.n)(r("update profile failure"),Object(i.s)())},akNt:function(n,i,r){"use strict";r.r(i),r.d(i,"ProfileUpdateModule",(function(){return P}));var o,c,u,a,s=r("2kYt"),f=r("sEIs"),b=r("8hyf"),p=r("8j5Y"),l=r("EM62"),d=r("+NKA"),h=[{path:"",component:(o=function(){function n(e,i){t(this,n),this.store=e,this.router=i}return e(n,[{key:"ngOnInit",value:function(){var t=this;this.store.page$.pipe(Object(p.a)((function(n){return t._routePage(n)}))).subscribe()}},{key:"_routePage",value:function(t){switch(t){case b.b.BASIC:this.router.navigate(["basic-information"]);break;case b.b.CONTACT:this.router.navigate(["contact-information"]);break;case b.b.COMPLETE:this.router.navigate(["confirmation"])}}}]),n}(),o.\u0275fac=function(t){return new(t||o)(l.Lb(d.a),l.Lb(f.g))},o.\u0275cmp=l.Fb({type:o,selectors:[["ng-component"]],decls:1,vars:0,template:function(t,n){1&t&&l.Mb(0,"router-outlet")},directives:[f.j],encapsulation:2}),o),children:[{path:"basic-information",loadChildren:function(){return Promise.all([r.e(1),r.e(7)]).then(r.bind(null,"8Gt8")).then((function(t){return t.BasicInformationModule}))}},{path:"contact-information",loadChildren:function(){return Promise.all([r.e(1),r.e(8)]).then(r.bind(null,"fgog")).then((function(t){return t.ContactInformationModule}))}},{path:"confirmation",loadChildren:function(){return Promise.all([r.e(1),r.e(9)]).then(r.bind(null,"Rzxa")).then((function(t){return t.UpdateConfirmationModule}))}}]}],O=((c=function n(){t(this,n)}).\u0275mod=l.Jb({type:c}),c.\u0275inj=l.Ib({factory:function(t){return new(t||c)},imports:[[f.i.forChild(h)],f.i]}),c),j=r("3oUN"),g=r("PnBT"),m=r("xeA8"),v=r("U94f"),C=r("ZzcO"),y=r("ROBh"),w=((a=function n(e){var i=this;t(this,n),this.actions$=e,this.updateProfile$=Object(m.c)((function(){return i.actions$.pipe(Object(m.d)(v.b),Object(C.a)((function(t){return function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}(t),Object(y.a)(v.d())})))}))}).\u0275fac=function(t){return new(t||a)(l.Yb(m.a))},a.\u0275prov=l.Hb({token:a,factory:a.\u0275fac}),a),P=((u=function n(){t(this,n)}).\u0275mod=l.Jb({type:u}),u.\u0275inj=l.Ib({factory:function(t){return new(t||u)},imports:[[s.c,O,m.b.forFeature([w]),j.j.forFeature(g.a,g.b)]]}),u)}}])}();