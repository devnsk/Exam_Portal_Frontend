import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }
  fetchImage(): Promise<string> {
    return fetch('https://dog.ceo/api/breeds/image/random') // Replace with your API endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response)
        return response.json(); // Assuming the response is JSON
      })
      .then(data => data.message); // Adjust based on your API response structure
  }
}
