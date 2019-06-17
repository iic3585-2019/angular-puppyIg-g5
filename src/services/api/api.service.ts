import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  loadImages() {
    console.log("Loading data...");
    return this.http.get("https://dog.ceo/api/breeds/image/random/10");
  }
}
