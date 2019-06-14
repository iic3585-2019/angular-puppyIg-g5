import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: Array<Object> = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.loadImages().subscribe(x => {
      if (x['status'] === "success") {
        x['message'].forEach(element => {
          this.images.push(element);
        });
      }

      console.log(this.images);
    })
  }

}
