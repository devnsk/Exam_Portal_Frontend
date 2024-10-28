import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  private categoryService = inject(CategoryService)
  private matSnack = inject(MatSnackBar)
  category = {
    title: '',
    description: ''
  }
  formSubmit() {
    if (this.category.title.trim() == '' || this.category.title == null) {
      this.matSnack.open('Title Required !', '', {
        duration: 3000
      })
      return;
    }
    //
    this.categoryService.addCategory(this.category).subscribe((data) => {
      console.log(data)
      this.category = {
        title: '', description: ''
      }
      this.matSnack.open('Success !', '', {
        duration: 3000
      })
    },
      (err) => {
        console.log(err)
        this.matSnack.open('Server Error !', 'close', {
          duration: 4000
        })
      }
    )
  }


}
