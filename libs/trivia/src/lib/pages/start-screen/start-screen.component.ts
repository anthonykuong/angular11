import { Component, OnInit } from '@angular/core';

import {TriviaGameService} from '../../services/trivia-game.service';
import {TriviaCategory} from '../../model/trivia-game.model';

@Component({
  selector: 'frontend-sessions-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  triviaCategories: TriviaCategory[];
  difficulties = [
    'easy',
    'medium',
    'hard'
  ];
  numberOfQuestions = [
    1,
    2,
    5,
    10];
  selectedCategoryId: number;
  selectedDifficulty = 'easy';
  selectedAmount = 5;

  constructor(private triviaGameService: TriviaGameService) { }

  ngOnInit() {

    this.triviaGameService.getCategories().subscribe((categories) => {

      this.triviaCategories = categories;
      this.selectedCategoryId = this.triviaCategories[0].id;
    });
  }

  onStart() {

    this.triviaGameService.startNewGame(this.selectedCategoryId, this.selectedDifficulty, this.selectedAmount);
  }
}
