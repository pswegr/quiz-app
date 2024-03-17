import { Component, input } from '@angular/core';
import { QuestionModel } from '../../services/models/question.model';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {

  constructor(private quizService: QuizService){}
  question = input.required<QuestionModel>();

  onAnswer(option: string) {
    // Logic to handle the answer
    // Move to the next question
    this.quizService.nextQuestion();
   // this.question = this.quizService.getCurrentQuestion();
  }
}
