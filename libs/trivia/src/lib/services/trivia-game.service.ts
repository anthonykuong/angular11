import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';

import {ActivatedRoute, Router} from '@angular/router';

import {
  TriviaCategory,
  TriviaCategoryResponse,
  TriviaGame,
  TriviaQuestion,
  TriviaQuestionsResponse
} from '../model/trivia-game.model';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TriviaGameService {

  readonly TRIVIA_CATEGORIES_URL = 'https://opentdb.com/api_category.php';
  readonly TRIVIA_QUESTIONS_URL = 'https://opentdb.com/api.php';

  readonly PARAM_AMOUNT = 'amount';
  readonly PARAM_CATEGORY = 'category';
  readonly PARAM_DIFFICULTY = 'difficulty';
  readonly  PARAM_TYPE = 'type';
  readonly  PARAM_ENCODING = 'encode';

  currentGame: TriviaGame;

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {

  }

  startNewGame(categoryId: number, difficulty: string, amount: number) {

    // const amount = 10;
    this.getQuestions(categoryId, difficulty, amount).subscribe((res) => {
      this.currentGame = new TriviaGame(res);
      this.router.navigate(['trivia/question'], {relativeTo: this.route});
      this.currentGame.gameOver$.subscribe(() => this.router.navigate(['trivia/game-over'], {relativeTo: this.route}));
    });
  }

  getCategories(): Observable<TriviaCategory[]> {

    return this.httpClient.get(this.TRIVIA_CATEGORIES_URL).pipe(map((res: TriviaCategoryResponse) => res.trivia_categories));
  }

  getQuestions(categoryId?: number, difficulty?: string, amount ?: number): Observable<TriviaQuestion[]> {

    const type = 'multiple'; // we can do multiple or boolean
    const encoding = 'base64';

    let params = new HttpParams();
    // params = params.append(this.PARAM_TYPE, type);
    params = params.append(this.PARAM_AMOUNT, amount.toString());
    params = params.append(this.PARAM_ENCODING, encoding);

    if (categoryId !== undefined) {
      params = params.append(this.PARAM_CATEGORY, categoryId.toString());
    }

    if (difficulty !== undefined) {
      params = params.append(this.PARAM_DIFFICULTY, difficulty);
    }

    return this.httpClient.get(this.TRIVIA_QUESTIONS_URL, {
      params
    }).pipe(map((res: TriviaQuestionsResponse) => {

      const outResults = res.results.map(item => {

        return <TriviaQuestion>{
          category: atob(item.category),
          correct_answer: atob(item.correct_answer),
          incorrect_answers: item.incorrect_answers.map(ans => atob(ans)),
          question: atob(item.question),
          difficulty: atob(item.difficulty),
          type: atob(item.type)
        };
      });

      return outResults;
    }));
  }
}
