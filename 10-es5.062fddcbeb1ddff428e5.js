!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{aXdg:function(t,i,r){"use strict";r.r(i),r.d(i,"TriviaModule",(function(){return S}));var o,s=r("2kYt"),c=r("sEIs"),u=r("EM62"),a=r("vobO"),f=r("YtkY"),b=r("ZTXN"),l=function(){function t(n){e(this,t),this.questions=n,this.currentLife=3,this.correctAnswerCount=0,this.incorrectAnswerCount=0,this.totalQuestionCount=0,this.gameOver$=new b.a,this.questions$=new b.a,this.life$=new b.a,this.questionsIterator=n[Symbol.iterator](),this.currentQuestion=this.questionsIterator.next().value,this.createCurrentAnswers(),this.totalQuestionCount=this.questions.length}return n(t,[{key:"createCurrentAnswers",value:function(){this.currentQuestion.shuffled_answers=[],this.currentQuestion.shuffled_answers.push(this.currentQuestion.correct_answer),this.currentQuestion.shuffled_answers.push(this.currentQuestion.incorrect_answers[0]),this.currentQuestion.shuffled_answers.push(this.currentQuestion.incorrect_answers[1]),this.currentQuestion.shuffled_answers.push(this.currentQuestion.incorrect_answers[2]),this.shuffleArray(this.currentQuestion.shuffled_answers)}},{key:"shuffleArray",value:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),i=[e[n],e[t]];e[t]=i[0],e[n]=i[1]}}},{key:"submitAnswer",value:function(e){e===this.currentQuestion.correct_answer?this.correctAnswerCount++:(alert("Sorry. Your answer is incorrect. The correct answer is "+this.currentQuestion.correct_answer+". Life Meter Count decreased"),this.incorrectAnswerCount++,this.currentLife--,this.life$.next(this.currentLife),1===this.currentLife&&alert("Warning - If you get the next question wrong, the game will be over for you since your life meter current life will be 0")),0===this.currentLife?this.gameOver$.next():(this.currentQuestion=this.questionsIterator.next().value,this.currentQuestion?(this.createCurrentAnswers(),this.shuffleArray(this.currentQuestion.shuffled_answers),this.questions$.next(this.currentQuestion)):(console.log("no more questions"),this.gameOver$.next()))}}]),t}(),d=((o=function(){function t(n,i,r){e(this,t),this.httpClient=n,this.router=i,this.route=r,this.TRIVIA_CATEGORIES_URL="https://opentdb.com/api_category.php",this.TRIVIA_QUESTIONS_URL="https://opentdb.com/api.php",this.PARAM_AMOUNT="amount",this.PARAM_CATEGORY="category",this.PARAM_DIFFICULTY="difficulty",this.PARAM_TYPE="type",this.PARAM_ENCODING="encode"}return n(t,[{key:"startNewGame",value:function(e,t,n){var i=this;this.getQuestions(e,t,n).subscribe((function(e){i.currentGame=new l(e),i.router.navigate(["trivia/question"],{relativeTo:i.route}),i.currentGame.gameOver$.subscribe((function(){return i.router.navigate(["trivia/game-over"],{relativeTo:i.route})}))}))}},{key:"getCategories",value:function(){return this.httpClient.get(this.TRIVIA_CATEGORIES_URL).pipe(Object(f.a)((function(e){return e.trivia_categories})))}},{key:"getQuestions",value:function(e,t,n){var i=new a.c;return i=(i=(i=i.append(this.PARAM_TYPE,"multiple")).append(this.PARAM_AMOUNT,n.toString())).append(this.PARAM_ENCODING,"base64"),void 0!==e&&(i=i.append(this.PARAM_CATEGORY,e.toString())),void 0!==t&&(i=i.append(this.PARAM_DIFFICULTY,t)),this.httpClient.get(this.TRIVIA_QUESTIONS_URL,{params:i}).pipe(Object(f.a)((function(e){return e.results.map((function(e){return{category:atob(e.category),correct_answer:atob(e.correct_answer),incorrect_answers:e.incorrect_answers.map((function(e){return atob(e)})),question:atob(e.question),difficulty:atob(e.difficulty),type:atob(e.type)}}))})))}}]),t}()).\u0275fac=function(e){return new(e||o)(u.Yb(a.a),u.Yb(c.g),u.Yb(c.a))},o.\u0275prov=u.Hb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),h=r("nIj0");function g(e,t){if(1&e&&(u.Qb(0,"option",5),u.zc(1),u.Pb()),2&e){var n=t.$implicit;u.ic("value",n.id),u.yb(1),u.Ac(n.name)}}function m(e,t){if(1&e&&(u.Qb(0,"option",5),u.zc(1),u.Pb()),2&e){var n=t.$implicit;u.ic("value",n),u.yb(1),u.Ac(n)}}function v(e,t){if(1&e&&(u.Qb(0,"option",5),u.zc(1),u.Pb()),2&e){var n=t.$implicit;u.ic("value",n),u.yb(1),u.Ac(n)}}var p,y,w=((y=function(){function t(n){e(this,t),this.triviaGameService=n,this.difficulties=["easy","medium","hard"],this.numberOfQuestions=[1,2,5,10],this.selectedDifficulty="easy",this.selectedAmount=5}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.triviaGameService.getCategories().subscribe((function(t){e.triviaCategories=t,e.selectedCategoryId=e.triviaCategories[0].id}))}},{key:"onStart",value:function(){this.triviaGameService.startNewGame(this.selectedCategoryId,this.selectedDifficulty,this.selectedAmount)}}]),t}()).\u0275fac=function(e){return new(e||y)(u.Lb(d))},y.\u0275cmp=u.Fb({type:y,selectors:[["frontend-sessions-start-screen"]],decls:20,vars:6,consts:[[1,"subtitle"],["id","category",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["id","difficulty",3,"ngModel","ngModelChange"],["id","start",3,"click"],[3,"value"]],template:function(e,t){1&e&&(u.Qb(0,"p"),u.zc(1,"Welcome!"),u.Pb(),u.Qb(2,"div",0),u.zc(3," Select a Category\n"),u.Pb(),u.Qb(4,"div"),u.Qb(5,"select",1),u.bc("ngModelChange",(function(e){return t.selectedCategoryId=e})),u.xc(6,g,2,2,"option",2),u.Pb(),u.Pb(),u.Qb(7,"div",0),u.zc(8," Select a Difficulty\n"),u.Pb(),u.Qb(9,"div"),u.Qb(10,"select",3),u.bc("ngModelChange",(function(e){return t.selectedDifficulty=e})),u.xc(11,m,2,2,"option",2),u.Pb(),u.Pb(),u.Qb(12,"div",0),u.zc(13," Select Number of Questions\n"),u.Pb(),u.Qb(14,"div"),u.Qb(15,"select",3),u.bc("ngModelChange",(function(e){return t.selectedAmount=e})),u.xc(16,v,2,2,"option",2),u.Pb(),u.Pb(),u.Qb(17,"div"),u.Qb(18,"button",4),u.bc("click",(function(){return t.onStart()})),u.zc(19,"Start!"),u.Pb(),u.Pb()),2&e&&(u.yb(5),u.ic("ngModel",t.selectedCategoryId),u.yb(1),u.ic("ngForOf",t.triviaCategories),u.yb(4),u.ic("ngModel",t.selectedDifficulty),u.yb(1),u.ic("ngForOf",t.difficulties),u.yb(4),u.ic("ngModel",t.selectedAmount),u.yb(1),u.ic("ngForOf",t.numberOfQuestions))},directives:[h.m,h.h,h.j,s.k,h.k,h.o],styles:["*[_ngcontent-%COMP%]{background-color:#23252d;color:#42f4ee;font-family:monospace}p[_ngcontent-%COMP%]{font-weight:700;font-size:5em}.subtitle[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Helvetica,sans-serif;text-align:center}.subtitle[_ngcontent-%COMP%]{font-size:2em;padding-bottom:.2em}select[_ngcontent-%COMP%]{font-size:1.5em;border-color:#42f4ee;background-color:#bff;border-radius:5px}option[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{align-content:center;color:#23252d}option[_ngcontent-%COMP%]{background-color:#dff}div[_ngcontent-%COMP%]{text-align:center;margin:auto;padding-bottom:4em}button[_ngcontent-%COMP%]{background-color:#42f4ef;border-color:#42f4ee;border-radius:5px;font-weight:300;font-size:2.5em;color:#23252d;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}"]}),y),P=((p=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||p)},p.\u0275cmp=u.Fb({type:p,selectors:[["frontend-sessions-life-meter"]],inputs:{life:"life"},decls:4,vars:1,template:function(e,t){1&e&&(u.Qb(0,"h2"),u.zc(1,"Life Meter:"),u.Pb(),u.Qb(2,"div"),u.zc(3),u.Pb()),2&e&&(u.yb(3),u.Bc("Current life: ",t.life,""))},styles:["*[_ngcontent-%COMP%]{background-color:#23252d;color:#42f4ee;font-family:monospace}"]}),p);function C(e,t){if(1&e&&(u.Qb(0,"div"),u.zc(1),u.Pb()),2&e){var n=u.dc();u.yb(1),u.Bc('My guess: "',n.chosenAnswer,'"')}}var Q,A,_,M,O=[{path:"question",component:(A=function(){function t(n){e(this,t),this.triviaGameService=n,this.chosenAnswer=""}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.question=this.triviaGameService.currentGame.currentQuestion,this.triviaGameService.currentGame.questions$.subscribe((function(t){return e.question=t})),this.life=this.triviaGameService.currentGame.currentLife,this.triviaGameService.currentGame.life$.subscribe((function(t){return e.life=t}))}},{key:"chooseAnswer",value:function(e){this.chosenAnswer=e}},{key:"onSubmit",value:function(){this.triviaGameService.currentGame.submitAnswer(this.chosenAnswer),this.chosenAnswer=""}}]),t}(),A.\u0275fac=function(e){return new(e||A)(u.Lb(d))},A.\u0275cmp=u.Fb({type:A,selectors:[["frontend-sessions-question-screen"]],decls:26,vars:8,consts:[[3,"life"],[1,"question"],[1,"answer",3,"click"],[4,"ngIf"],[1,"submit",3,"disabled","click"]],template:function(e,t){1&e&&(u.Mb(0,"frontend-sessions-life-meter",0),u.Mb(1,"div"),u.Mb(2,"div"),u.Mb(3,"div"),u.Mb(4,"div"),u.Qb(5,"div",1),u.zc(6),u.Pb(),u.Qb(7,"div"),u.Qb(8,"button",2),u.bc("click",(function(){return t.chooseAnswer(t.question.shuffled_answers[0])})),u.zc(9),u.Pb(),u.Pb(),u.Qb(10,"div"),u.Qb(11,"button",2),u.bc("click",(function(){return t.chooseAnswer(t.question.shuffled_answers[1])})),u.zc(12),u.Pb(),u.Pb(),u.Qb(13,"div"),u.Qb(14,"button",2),u.bc("click",(function(){return t.chooseAnswer(t.question.shuffled_answers[2])})),u.zc(15),u.Pb(),u.Pb(),u.Qb(16,"div"),u.Qb(17,"button",2),u.bc("click",(function(){return t.chooseAnswer(t.question.shuffled_answers[3])})),u.zc(18),u.Pb(),u.Pb(),u.xc(19,C,2,1,"div",3),u.Mb(20,"div"),u.Mb(21,"div"),u.Mb(22,"div"),u.Qb(23,"div"),u.Qb(24,"button",4),u.bc("click",(function(){return t.onSubmit()})),u.zc(25,"Submit"),u.Pb(),u.Pb()),2&e&&(u.ic("life",t.life),u.yb(6),u.Bc("Q: ",t.question.question,""),u.yb(3),u.Bc("A) ",t.question.shuffled_answers[0],""),u.yb(3),u.Bc("B) ",t.question.shuffled_answers[1],""),u.yb(3),u.Bc("C) ",t.question.shuffled_answers[2],""),u.yb(3),u.Bc("D) ",t.question.shuffled_answers[3],""),u.yb(1),u.ic("ngIf",t.chosenAnswer),u.yb(5),u.ic("disabled",!t.chosenAnswer))},directives:[P,s.l],styles:["*[_ngcontent-%COMP%]{background-color:#23252d;color:#42f4ee;font-family:monospace}.question[_ngcontent-%COMP%]{font-size:2em;text-align:justify;padding-bottom:.7em;padding-left:1em;padding-right:1em}.question[_ngcontent-%COMP%], div[_ngcontent-%COMP%]{font-family:Helvetica,sans-serif}div[_ngcontent-%COMP%]{margin:auto;font-size:1em;text-align:center;padding-bottom:.5em}button[_ngcontent-%COMP%]{align-content:center;border-color:#42f4ee;color:#23252d;border-radius:5px}.answer[_ngcontent-%COMP%]{width:70%;font-weight:100;font-family:monospace;font-size:2em;text-align:left;background-color:#bff}.submit[_ngcontent-%COMP%]{background-color:#42f4ef;font-weight:300;font-size:2.5em;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}"]}),A)},{path:"game-over",component:(Q=function(){function t(n,i,r){e(this,t),this.router=n,this.route=i,this.triviaGameService=r}return n(t,[{key:"ngOnInit",value:function(){this.correctAnswerCount=this.triviaGameService.currentGame.correctAnswerCount,this.incorrectAnswerCount=this.triviaGameService.currentGame.incorrectAnswerCount,this.totalQuestionCount=this.triviaGameService.currentGame.totalQuestionCount,this.percent=(100*Number(this.correctAnswerCount/this.totalQuestionCount)).toFixed(2)}},{key:"onNewGame",value:function(){this.router.navigate(["trivia/start"],{relativeTo:this.route})}}]),t}(),Q.\u0275fac=function(e){return new(e||Q)(u.Lb(c.g),u.Lb(c.a),u.Lb(d))},Q.\u0275cmp=u.Fb({type:Q,selectors:[["frontend-sessions-game-over"]],decls:26,vars:4,consts:[[1,"table"],["scope","row"],[3,"click"]],template:function(e,t){1&e&&(u.Qb(0,"div"),u.Qb(1,"p"),u.zc(2,"GAME SCORE"),u.Pb(),u.Qb(3,"h2"),u.zc(4),u.Pb(),u.Qb(5,"table",0),u.Mb(6,"thead"),u.Qb(7,"tbody"),u.Qb(8,"tr"),u.Qb(9,"th",1),u.zc(10,"Total Questions"),u.Pb(),u.Qb(11,"td"),u.zc(12),u.Pb(),u.Pb(),u.Qb(13,"tr"),u.Qb(14,"th",1),u.zc(15,"Correct Answers"),u.Pb(),u.Qb(16,"td"),u.zc(17),u.Pb(),u.Pb(),u.Qb(18,"tr"),u.Qb(19,"th",1),u.zc(20,"Incorrect Answers"),u.Pb(),u.Qb(21,"td"),u.zc(22),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(23,"div"),u.Qb(24,"button",2),u.bc("click",(function(){return t.onNewGame()})),u.zc(25,"New Game"),u.Pb(),u.Pb()),2&e&&(u.yb(4),u.Bc("",t.percent," %"),u.yb(8),u.Ac(t.totalQuestionCount),u.yb(5),u.Ac(t.correctAnswerCount),u.yb(5),u.Ac(t.incorrectAnswerCount))},styles:["*[_ngcontent-%COMP%]{background-color:#23252d;color:#42f4ee;font-family:monospace}p[_ngcontent-%COMP%]{font-family:Helvetica,sans-serif;font-weight:700;font-size:5em;padding:0}div[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{text-align:center}div[_ngcontent-%COMP%]{margin:auto}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:5%;padding-bottom:0;font-size:10em}button[_ngcontent-%COMP%]{background-color:#42f4ef;border-color:#42f4ee;border-radius:5px;font-weight:300;font-size:2.5em;color:#23252d;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}"]}),Q)},{path:"**",component:w}],k=((M=function t(){e(this,t)}).\u0275mod=u.Jb({type:M}),M.\u0275inj=u.Ib({factory:function(e){return new(e||M)},imports:[[c.i.forChild(O)],c.i]}),M),S=((_=function t(){e(this,t)}).\u0275mod=u.Jb({type:_}),_.\u0275inj=u.Ib({factory:function(e){return new(e||_)},imports:[[k,a.b,h.e,s.c]]}),_)}}])}();