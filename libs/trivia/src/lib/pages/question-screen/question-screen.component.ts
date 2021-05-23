import { Component, OnInit } from '@angular/core';
import {TriviaGameService} from '../../services/trivia-game.service';
import {TriviaQuestion} from '../../model/trivia-game.model';

@Component({
  selector: 'frontend-sessions-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit {

  question: TriviaQuestion;
  chosenAnswer = '';
  life: number;

  constructor(private triviaGameService: TriviaGameService) { }

  ngOnInit() {


    this.question = this.triviaGameService.currentGame.currentQuestion;

    this.triviaGameService.currentGame.questions$.subscribe(question => this.question = question);

    this.life = this.triviaGameService.currentGame.currentLife;

    this.triviaGameService.currentGame.life$.subscribe(life => this.life = life);
  }

  chooseAnswer(answer: string) {

    this.chosenAnswer = answer;
  }

  onSubmit() {

    this.triviaGameService.currentGame.submitAnswer(this.chosenAnswer);
    this.chosenAnswer = '';
  }

}
