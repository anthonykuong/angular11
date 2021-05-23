import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {combineLatest} from 'rxjs';
import {TriviaGameService} from './services/trivia-game.service';

@Component({
  template: `<router-outlet></router-outlet>`
})
export class TriviaComponent  implements OnInit {

  constructor(private service: TriviaGameService,
              private router: Router) {
  }

  ngOnInit(): void {
    combineLatest(this.service.currentGame.questions$, this.service.currentGame.gameOver$)
        .pipe(
            tap(([questions, gameOver]) => this._routePage(questions, gameOver ))
        ).subscribe();
  }

  private _routePage(question, gameOver ): void {
    if (question){
      this.router.navigate(['trivia/question']);
      return;
    }
    if (gameOver) {
      this.router.navigate(['trivia/game-over']);
      return;
    }
    this.router.navigate(['trivia/start']);
  }

}
