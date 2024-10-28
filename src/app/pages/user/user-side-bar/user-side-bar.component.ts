import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryInUserService } from 'src/app/services/category-in-user.service';

@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrls: ['./user-side-bar.component.css']
})
export class UserSideBarComponent {
  categories: any;
  private categoryService =
    inject(CategoryInUserService);
  private matSnack = inject(MatSnackBar);

  ngOnInit() {
    this.categoryService.getAllCategory()
      .subscribe((data) => {
        this.categories = data;
        console.log(this.categories)
      },
        (err) => {
          this.matSnack.open('Error in loading categories from server', '',
            {
              duration: 3000
            }
          )
        }
      )
  }
}
