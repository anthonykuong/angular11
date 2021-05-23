import { async, TestBed } from "@angular/core/testing";
import { TriviaModule } from "./trivia.module";

describe("TriviaModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TriviaModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(TriviaModule).toBeDefined();
  });
});
