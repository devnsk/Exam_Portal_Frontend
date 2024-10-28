import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import BASEURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient)
   
  //all cat
  public categories(){
    return this.http.get(`${BASEURL}/category/`)
  }

  //add cat
  public addCategory(category:any){
    return this.http.post(`${BASEURL}/category/`,category);
  }
}
