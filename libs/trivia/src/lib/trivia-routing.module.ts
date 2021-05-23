import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartScreenComponent} from './pages/start-screen/start-screen.component';
import {QuestionScreenComponent} from './pages/question-screen/question-screen.component';
import {GameOverComponent} from './pages/game-over/game-over.component';

const triviaRoutes: Routes = [
  {path: 'question', component: QuestionScreenComponent},
  {path: 'game-over', component: GameOverComponent},
  {path: '**', component: StartScreenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(triviaRoutes)],
  exports: [RouterModule]
})
export class TriviaRoutingModuleRouting {
}
