import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LifeMeterComponent} from './pages/question-screen/life-meter/life-meter.component';
import {QuestionScreenComponent} from './pages/question-screen/question-screen.component';
import {GameOverComponent} from './pages/game-over/game-over.component';
import {StartScreenComponent} from './pages/start-screen/start-screen.component';
import {TriviaRoutingModuleRouting} from './trivia-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    TriviaRoutingModuleRouting,
    HttpClientModule,
    FormsModule],
  declarations: [
      StartScreenComponent,
    QuestionScreenComponent,
    GameOverComponent,
    LifeMeterComponent,
  ]
})
export class TriviaModule {}
