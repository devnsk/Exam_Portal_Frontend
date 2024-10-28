import { inject, Injectable } from '@angular/core';
import BASEURL from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryInUserService {

  private http = inject(HttpClient)
  public getAllCategory() {
    return this.http.get(`${BASEURL}/category/`);

  }

  //add new category
  public addCategory(category: any) {
    return this.http.post(`${BASEURL}/category/`, category);
  }
}
