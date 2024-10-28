import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent {
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private quizService = inject(QuizService)
  private categoryService = inject(CategoryService)

  qid: any = 0;
  quiz: any;
  categories: any = [];

  ngOnInit() {
    this.qid = this.route.snapshot.paramMap.get('id');
    // alert(this.qid)
    this.quizService.getQuizById(this.qid).subscribe(
      (data) => {
        this.quiz = data;
        console.log(this.quiz)
      },
      (err) => {
        console.log(err);
      }
    );

    this.categoryService.categories().subscribe((data) => {
      this.categories = data;
    },
      (error) => {
        alert('error in category fetching')
      })
  }

  public updateQuizData() {

    this.quizService.updateQuiz(this.quiz).subscribe((data: any) => {
      Swal.fire('Success', 'Quiz Updated ', 'success').then(e => this.router.navigate(['/admin/quiz']))

    }, err => Swal.fire('Error', 'Failed to Update', 'error'))
  }


  autoResize(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scroll height
  }


}
