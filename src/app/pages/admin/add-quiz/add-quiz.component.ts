import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Category, Quiz } from 'src/app/contracts/quiz.contract';
import { CategoryService } from 'src/app/services/category.service';
import BASEURL from 'src/app/services/helper';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {
  private quizService = inject(QuizService)
  private matSnack = inject(MatSnackBar)
  categories: any = [];
  quiz = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: {
      cid: ''
    }
  }



  private categoryService = inject(CategoryService)
  ngOnInit() { //load on all category
    this.categoryService.categories().subscribe((data) => {
      this.categories = data;
    },
      (err) => {
        console.log(err)
      })
  }

  public submitQuiz() {
    this.quizService.addQuiz(this.quiz).subscribe((data) => {
      // console.log(data)
      this.quiz = {
        title: '',
        description: '',
        maxMarks: '',
        numberOfQuestions: '',
        active: true,
        category: {
          cid: ''
        }
      };
      this.matSnack.open('Quiz Added Successfully !', 'ok', {
        duration: 3000
      })
    },
      (err) => {
        this.matSnack.open('Failed to Add !', '', {
          duration: 3000
        })
      }
    )
  }
  autoResize(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scroll height
  }
}
