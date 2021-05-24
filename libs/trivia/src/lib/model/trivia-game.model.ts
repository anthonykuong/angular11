import {Subject} from 'rxjs';

export interface TriviaCategoryResponse {
  trivia_categories: TriviaCategory[];
}

export  interface TriviaCategory {
  id: number;
  name: string;
}

export  interface TriviaQuestionsResponse {
  response_code: number;
  results: TriviaQuestion[];
}

export interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  shuffled_answers: string[];
}


export class TriviaGame {

  currentLife = 3;
  correctAnswerCount = 0;
  incorrectAnswerCount = 0;
  totalQuestionCount = 0;

  readonly gameOver$ = new Subject();
  readonly questions$ = new Subject<TriviaQuestion>();
  readonly life$ = new Subject<number>();

  private readonly questionsIterator: IterableIterator<TriviaQuestion>;
  currentQuestion: TriviaQuestion;

  constructor(private questions: TriviaQuestion[]) {

    this.questionsIterator = questions[Symbol.iterator]();
    this.currentQuestion = this.questionsIterator.next().value;
    this.createCurrentAnswers();
    this.totalQuestionCount = this.questions.length;
  }
  createCurrentAnswers(){
    this.currentQuestion.shuffled_answers = [];
    this.currentQuestion.shuffled_answers.push(this.currentQuestion.correct_answer);
    this.currentQuestion.shuffled_answers.push(this.currentQuestion.incorrect_answers[0]);
    this.currentQuestion.shuffled_answers.push(this.currentQuestion.incorrect_answers[1]);
    this.currentQuestion.shuffled_answers.push(this.currentQuestion.incorrect_answers[2]);
    this.shuffleArray(this.currentQuestion.shuffled_answers);
  }

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  submitAnswer(answer: string) {

    if (answer === this.currentQuestion.correct_answer) {

      this.correctAnswerCount++;
    }
    else {
      alert('Sorry. Your answer is incorrect. The correct answer is ' + this.currentQuestion.correct_answer +  '. Life Meter Count decreased');
      this.incorrectAnswerCount ++;
      this.currentLife--;
      this.life$.next(this.currentLife);
      if (this.currentLife === 1) {
        alert('Warning - If you get the next question wrong, the game will be over for you since your life meter current life will be 0');
      }

    }

    if (this.currentLife === 0) {

      this.gameOver$.next();
    }
    else {

      this.currentQuestion = this.questionsIterator.next().value;
      if(!this.currentQuestion){
        console.log('no more questions');
        this.gameOver$.next();
      } else {
        this.createCurrentAnswers();
        this.shuffleArray(this.currentQuestion.shuffled_answers);
        this.questions$.next(this.currentQuestion);
      }
    }
  }
}
