(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{SCEx:function(t,i,e){"use strict";var s=e("nIj0"),n=e("C05f"),r=e("ZTXN"),o=e("kuMc"),h=e("EM62");let a=(()=>{class t{constructor(t){this.isLoading=new n.a(!1),this.submitted=new n.a(!1),this.destroy$=new r.a,this.formBuilder=t.get(s.b)}ngOnInit(){this.setEvent(),this.initForm(),this.isLoading.pipe(Object(o.a)(this.destroy$)),this.submitted.pipe(Object(o.a)(this.destroy$)),this.componentInit()}componentInit(){}attemptFormSubmission(){this.isLoading.next(!0),this.submitted.next(!0),this.formEvent.valid?this.submitData():this.isLoading.next(!1)}reset(){this.isLoading.next(!1),this.submitted.next(!1),this.formEvent.reset()}get raw(){return this.formEvent.getRawValue()}get form(){return this.formEvent}get controls(){return this.formEvent.controls}ngOnDestroy(){this.destroy$.next(),this.destroy$.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(h.Mb(h.r))},t.\u0275dir=h.Hb({type:t}),t})();e.d(i,"a",(function(){return a}))}}]);