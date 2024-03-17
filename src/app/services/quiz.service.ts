import { Injectable } from '@angular/core';
import { QuestionModel } from './models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions : QuestionModel[] = [
    { question: 'What is 2 + 2?', options: ['2', '3', '4', '5'], answer: '4' },
    { question: 'What is 2 + 3?', options: ['2', '3', '4', '5'], answer: '5' },
  ];

  private currentQuestionIndex = 0;

  constructor() {}

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.questions.length) {
      this.currentQuestionIndex = 0; // Reset or navigate to results
    }
  }
}
