import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartScreenComponent} from './pages/start-screen/start-screen.component';
import {QuestionScreenComponent} from './pages/question-screen/question-screen.component';
import {GameOverComponent} from './pages/game-over/game-over.component';

const routes: Routes = [{
  path: '',
  component: StartScreenComponent,
  children: [
    {
      path: 'start',
      component: StartScreenComponent
    }, {
      path: 'question',
      component: QuestionScreenComponent
    }, {
    path: 'game-over',
      component: GameOverComponent
    },
    {path: '', redirectTo: 'start', pathMatch: 'full'}
  ]
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TriviaRoutingModuleRouting {
}
