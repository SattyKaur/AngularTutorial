import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {QuizDataService} from './quiz-data.service';
import {MatRadioChange} from '@angular/material/radio';
import {Quiz} from './quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  encapsulation : ViewEncapsulation.None,
})
export class QuizComponent implements OnInit {

  score = 0;
  correct = false;
  clicked = false;
  submitted = false;

  selectedOption;

  constructor(public  quizData: QuizDataService) { }

  ngOnInit(): void {
  }


  radioSelect(event: MatRadioChange, quiz: Quiz) {
    quiz.answer = event.value;
    if (quiz.answer === quiz.correct) {
      this.score ++;
    }
  }

  saveAnswers() {
    console.log(this.score);
    this.submitted = !this.submitted;
    window.scroll(0, 0);
  }


  answerStyle(correct, answer) {
    if (correct === answer) {
      return {color: 'LimeGreen'};
    } else {
      return {color: 'red'};
    }
  }

  reset() {
    window.location.reload();
  }

}
