(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{aXdg:function(e,t,n){"use strict";n.r(t),n.d(t,"TriviaModule",(function(){return P}));var i=n("2kYt"),s=n("sEIs"),r=n("EM62"),o=n("vobO"),c=n("YtkY"),a=n("ZTXN");class u{constructor(e){this.questions=e,this.currentLife=3,this.correctAnswerCount=0,this.incorrectAnswerCount=0,this.totalQuestionCount=0,this.gameOver$=new a.a,this.questions$=new a.a,this.life$=new a.a,this.questionsIterator=e[Symbol.iterator](),this.currentQuestion=this.questionsIterator.next().value,this.createCurrentAnswers(),this.totalQuestionCount=this.questions.length}createCurrentAnswers(){this.currentQuestion.shuffled_answers=[],this.currentQuestion.shuffled_answers.push(this.currentQuestion.correct_answer),this.currentQuestion.shuffled_answers.push(this.currentQuestion.incorrect_answers[0]),this.currentQuestion.shuffled_answers.push(this.currentQuestion.incorrect_answers[1]),this.currentQuestion.shuffled_answers.push(this.currentQuestion.incorrect_answers[2]),this.shuffleArray(this.currentQuestion.shuffled_answers)}shuffleArray(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}submitAnswer(e){e===this.currentQuestion.correct_answer?this.correctAnswerCount++:(alert("Sorry. Your answer is incorrect. The correct answer is "+this.currentQuestion.correct_answer+". Life Meter Count decreased"),this.incorrectAnswerCount++,this.currentLife--,this.life$.next(this.currentLife),1===this.currentLife&&alert("Warning - If you get the next question wrong, the game will be over for you since your life meter current life will be 0")),0===this.currentLife?this.gameOver$.next():(this.currentQuestion=this.questionsIterator.next().value,this.currentQuestion?(this.createCurrentAnswers(),this.shuffleArray(this.currentQuestion.shuffled_answers),this.questions$.next(this.currentQuestion)):(console.log("no more questions"),this.gameOver$.next()))}}let b=(()=>{class e{constructor(e,t,n){this.httpClient=e,this.router=t,this.route=n,this.TRIVIA_CATEGORIES_URL="https://opentdb.com/api_category.php",this.TRIVIA_QUESTIONS_URL="https://opentdb.com/api.php",this.PARAM_AMOUNT="amount",this.PARAM_CATEGORY="category",this.PARAM_DIFFICULTY="difficulty",this.PARAM_TYPE="type",this.PARAM_ENCODING="encode"}startNewGame(e,t,n){this.getQuestions(e,t,n).subscribe(e=>{this.currentGame=new u(e),this.router.navigate(["trivia/question"],{relativeTo:this.route}),this.currentGame.gameOver$.subscribe(()=>this.router.navigate(["trivia/game-over"],{relativeTo:this.route}))})}getCategories(){return this.httpClient.get(this.TRIVIA_CATEGORIES_URL).pipe(Object(c.a)(e=>e.trivia_categories))}getQuestions(e,t,n){let i=new o.c;return i=i.append(this.PARAM_TYPE,"multiple"),i=i.append(this.PARAM_AMOUNT,n.toString()),i=i.append(this.PARAM_ENCODING,"base64"),void 0!==e&&(i=i.append(this.PARAM_CATEGORY,e.toString())),void 0!==t&&(i=i.append(this.PARAM_DIFFICULTY,t)),this.httpClient.get(this.TRIVIA_QUESTIONS_URL,{params:i}).pipe(Object(c.a)(e=>e.results.map(e=>({category:atob(e.category),correct_answer:atob(e.correct_answer),incorrect_answers:e.incorrect_answers.map(e=>atob(e)),question:atob(e.question),difficulty:atob(e.difficulty),type:atob(e.type)}))))}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.a),r.Yb(s.g),r.Yb(s.a))},e.\u0275prov=r.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=n("nIj0");function f(e,t){if(1&e&&(r.Qb(0,"option",5),r.zc(1),r.Pb()),2&e){const e=t.$implicit;r.ic("value",e.id),r.yb(1),r.Ac(e.name)}}function d(e,t){if(1&e&&(r.Qb(0,"option",5),r.zc(1),r.Pb()),2&e){const e=t.$implicit;r.ic("value",e),r.yb(1),r.Ac(e)}}function h(e,t){if(1&e&&(r.Qb(0,"option",5),r.zc(1),r.Pb()),2&e){const e=t.$implicit;r.ic("value",e),r.yb(1),r.Ac(e)}}let g=(()=>{class e{constructor(e){this.triviaGameService=e,this.difficulties=["easy","medium","hard"],this.numberOfQuestions=[1,2,5,10],this.selectedDifficulty="easy",this.selectedAmount=5}ngOnInit(){this.triviaGameService.getCategories().subscribe(e=>{this.triviaCategories=e,this.selectedCategoryId=this.triviaCategories[0].id})}onStart(){this.triviaGameService.startNewGame(this.selectedCategoryId,this.selectedDifficulty,this.selectedAmount)}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(b))},e.\u0275cmp=r.Fb({type:e,selectors:[["frontend-sessions-start-screen"]],decls:20,vars:6,consts:[[1,"subtitle"],["id","category",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["id","difficulty",3,"ngModel","ngModelChange"],["id","start",3,"click"],[3,"value"]],template:function(e,t){1&e&&(r.Qb(0,"p"),r.zc(1,"Welcome!"),r.Pb(),r.Qb(2,"div",0),r.zc(3," Select a Category\n"),r.Pb(),r.Qb(4,"div"),r.Qb(5,"select",1),r.bc("ngModelChange",(function(e){return t.selectedCategoryId=e})),r.xc(6,f,2,2,"option",2),r.Pb(),r.Pb(),r.Qb(7,"div",0),r.zc(8," Select a Difficulty\n"),r.Pb(),r.Qb(9,"div"),r.Qb(10,"select",3),r.bc("ngModelChange",(function(e){return t.selectedDifficulty=e})),r.xc(11,d,2,2,"option",2),r.Pb(),r.Pb(),r.Qb(12,"div",0),r.zc(13," Select Number of Questions\n"),r.Pb(),r.Qb(14,"div"),r.Qb(15,"select",3),r.bc("ngModelChange",(function(e){return t.selectedAmount=e})),r.xc(16,h,2,2,"option",2),r.Pb(),r.Pb(),r.Qb(17,"div"),r.Qb(18,"button",4),r.bc("click",(function(){return t.onStart()})),r.zc(19,"Start!"),r.Pb(),r.Pb()),2&e&&(r.yb(5),r.ic("ngModel",t.selectedCategoryId),r.yb(1),r.ic("ngForOf",t.triviaCategories),r.yb(4),r.ic("ngModel",t.selectedDifficulty),r.yb(1),r.ic("ngForOf",t.difficulties),r.yb(4),r.ic("ngModel",t.selectedAmount),r.yb(1),r.ic("ngForOf",t.numberOfQuestions))},directives:[l.m,l.h,l.j,i.k,l.k,l.o],styles:["*[_ngcontent-%COMP%]{background-color:#23252d;color:#42f4ee;font-family:monospace}p[_ngcontent-%COMP%]{font-weight:700;font-size:5em}.subtitle[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Helvetica,sans-serif;text-align:center}.subtitle[_ngcontent-%COMP%]{font-size:2em;padding-bottom:.2em}select[_ngcontent-%COMP%]{font-size:1.5em;border-color:#42f4ee;background-color:#bff;border-radius:5px}option[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{align-content:center;color:#23252d}option[_ngcontent-%COMP%]{background-color:#dff}div[_ngcontent-%COMP%]{text-align:center;margin:auto;padding-bottom:4em}button[_ngcontent-%COMP%]{background-color:#42f4ef;border-color:#42f4ee;border-radius:5px;font-weight:300;font-size:2.5em;color:#23252d;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}"]}),e})(),m=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Fb({type:e,selectors:[["frontend-sessions-life-meter"]],inputs:{life:"life"},decls:4,vars:1,template:function(e,t){1&e&&(r.Qb(0,"h2"),r.zc(1,"Life Meter:"),r.Pb(),r.Qb(2,"div"),r.zc(3),r.Pb()),2&e&&(r.yb(3),r.Bc("Current life: ",t.life,""))},styles:["*[_ngcontent-%COMP%]{background-color:#23252d;color:#42f4ee;font-family:monospace}"]}),e})();function p(e,t){if(1&e&&(r.Qb(0,"div"),r.zc(1),r.Pb()),2&e){const e=r.dc();r.yb(1),r.Bc('My guess: "',e.chosenAnswer,'"')}}const v=[{path:"question",component:(()=>{class e{constructor(e){this.triviaGameService=e,this.chosenAnswer=""}ngOnInit(){this.question=this.triviaGameService.currentGame.currentQuestion,this.triviaGameService.currentGame.questions$.subscribe(e=>this.question=e),this.life=this.triviaGameService.currentGame.currentLife,this.triviaGameService.currentGame.life$.subscribe(e=>this.life=e)}chooseAnswer(e){this.chosenAnswer=e}onSubmit(){this.triviaGameService.currentGame.submitAnswer(this.chosenAnswer),this.chosenAnswer=""}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(b))},e.\u0275cmp=r.Fb({type:e,selectors:[["frontend-sessions-question-screen"]],decls:26,vars:8,consts:[[3,"life"],[1,"question"],[1,"answer",3,"click"],[4,"ngIf"],[1,"submit",3,"disabled","click"]],template:function(e,t){1&e&&(r.Mb(0,"frontend-sessions-life-meter",0),r.Mb(1,"div"),r.Mb(2,"div"),r.Mb(3,"div"),r.Mb(4,"div"),r.Qb(5,"div",1),r.zc(6),r.Pb(),r.Qb(7,"div"),r.Qb(8,"button",2),r.bc("click",(function(){return t.chooseAnswer(t.question.shuffled_answers[0])})),r.zc(9),r.Pb(),r.Pb(),r.Qb(10,"div"),r.Qb(11,"button",2),r.bc("click",(function(){return t.chooseAnswer(t.question.shuffled_answers[1])})),r.zc(12),r.Pb(),r.Pb(),r.Qb(13,"div"),r.Qb(14,"button",2),r.bc("click",(function(){return t.chooseAnswer(t.question.shuffled_answers[2])})),r.zc(15),r.Pb(),r.Pb(),r.Qb(16,"div"),r.Qb(17,"button",2),r.bc("click",(function(){return t.chooseAnswer(t.question.shuffled_answers[3])})),r.zc(18),r.Pb(),r.Pb(),r.xc(19,p,2,1,"div",3),r.Mb(20,"div"),r.Mb(21,"div"),r.Mb(22,"div"),r.Qb(23,"div"),r.Qb(24,"button",4),r.bc("click",(function(){return t.onSubmit()})),r.zc(25,"Submit"),r.Pb(),r.Pb()),2&e&&(r.ic("life",t.life),r.yb(6),r.Bc("Q: ",t.question.question,""),r.yb(3),r.Bc("A) ",t.question.shuffled_answers[0],""),r.yb(3),r.Bc("B) ",t.question.shuffled_answers[1],""),r.yb(3),r.Bc("C) ",t.question.shuffled_answers[2],""),r.yb(3),r.Bc("D) ",t.question.shuffled_answers[3],""),r.yb(1),r.ic("ngIf",t.chosenAnswer),r.yb(5),r.ic("disabled",!t.chosenAnswer))},directives:[m,i.l],styles:["*[_ngcontent-%COMP%]{background-color:#23252d;color:#42f4ee;font-family:monospace}.question[_ngcontent-%COMP%]{font-size:2em;text-align:justify;padding-bottom:.7em;padding-left:1em;padding-right:1em}.question[_ngcontent-%COMP%], div[_ngcontent-%COMP%]{font-family:Helvetica,sans-serif}div[_ngcontent-%COMP%]{margin:auto;font-size:1em;text-align:center;padding-bottom:.5em}button[_ngcontent-%COMP%]{align-content:center;border-color:#42f4ee;color:#23252d;border-radius:5px}.answer[_ngcontent-%COMP%]{width:70%;font-weight:100;font-family:monospace;font-size:2em;text-align:left;background-color:#bff}.submit[_ngcontent-%COMP%]{background-color:#42f4ef;font-weight:300;font-size:2.5em;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}"]}),e})()},{path:"game-over",component:(()=>{class e{constructor(e,t,n){this.router=e,this.route=t,this.triviaGameService=n}ngOnInit(){this.correctAnswerCount=this.triviaGameService.currentGame.correctAnswerCount,this.incorrectAnswerCount=this.triviaGameService.currentGame.incorrectAnswerCount,this.totalQuestionCount=this.triviaGameService.currentGame.totalQuestionCount,this.percent=(100*Number(this.correctAnswerCount/this.totalQuestionCount)).toFixed(2)}onNewGame(){this.router.navigate(["trivia/start"],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(s.g),r.Lb(s.a),r.Lb(b))},e.\u0275cmp=r.Fb({type:e,selectors:[["frontend-sessions-game-over"]],decls:26,vars:4,consts:[[1,"table"],["scope","row"],[3,"click"]],template:function(e,t){1&e&&(r.Qb(0,"div"),r.Qb(1,"p"),r.zc(2,"GAME SCORE"),r.Pb(),r.Qb(3,"h2"),r.zc(4),r.Pb(),r.Qb(5,"table",0),r.Mb(6,"thead"),r.Qb(7,"tbody"),r.Qb(8,"tr"),r.Qb(9,"th",1),r.zc(10,"Total Questions"),r.Pb(),r.Qb(11,"td"),r.zc(12),r.Pb(),r.Pb(),r.Qb(13,"tr"),r.Qb(14,"th",1),r.zc(15,"Correct Answers"),r.Pb(),r.Qb(16,"td"),r.zc(17),r.Pb(),r.Pb(),r.Qb(18,"tr"),r.Qb(19,"th",1),r.zc(20,"Incorrect Answers"),r.Pb(),r.Qb(21,"td"),r.zc(22),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(23,"div"),r.Qb(24,"button",2),r.bc("click",(function(){return t.onNewGame()})),r.zc(25,"New Game"),r.Pb(),r.Pb()),2&e&&(r.yb(4),r.Bc("",t.percent," %"),r.yb(8),r.Ac(t.totalQuestionCount),r.yb(5),r.Ac(t.correctAnswerCount),r.yb(5),r.Ac(t.incorrectAnswerCount))},styles:["*[_ngcontent-%COMP%]{background-color:#23252d;color:#42f4ee;font-family:monospace}p[_ngcontent-%COMP%]{font-family:Helvetica,sans-serif;font-weight:700;font-size:5em;padding:0}div[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{text-align:center}div[_ngcontent-%COMP%]{margin:auto}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:5%;padding-bottom:0;font-size:10em}button[_ngcontent-%COMP%]{background-color:#42f4ef;border-color:#42f4ee;border-radius:5px;font-weight:300;font-size:2.5em;color:#23252d;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}"]}),e})()},{path:"**",component:g}];let w=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(t){return new(t||e)},imports:[[s.i.forChild(v)],s.i]}),e})(),P=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(t){return new(t||e)},imports:[[w,o.b,l.e,i.c]]}),e})()}}]);