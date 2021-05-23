import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TriviaGameService} from '../../services/trivia-game.service';

@Component({
  selector: 'frontend-sessions-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private triviaGameService: TriviaGameService) { }

  correctAnswerCount;
  incorrectAnswerCount;
  totalQuestionCount;
  percent;

  ngOnInit() {
    this.correctAnswerCount =  this.triviaGameService.currentGame.correctAnswerCount;
    this.incorrectAnswerCount =  this.triviaGameService.currentGame.incorrectAnswerCount;
    this.totalQuestionCount = this.triviaGameService.currentGame.totalQuestionCount;
    this.percent = (Number(this.correctAnswerCount / this.totalQuestionCount) * 100).toFixed(2);
  }


  onNewGame() {

    this.router.navigate(['trivia/start'], {relativeTo: this.route});
  }
}
