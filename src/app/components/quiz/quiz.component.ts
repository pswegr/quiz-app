import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  question: any;

  constructor(private quizService: QuizService) {
    this.question = this.quizService.getCurrentQuestion();
  }
}
