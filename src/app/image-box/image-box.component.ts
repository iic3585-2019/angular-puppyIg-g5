import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent implements OnInit {

  @Input() image_url: String = "https://via.placeholder.com/400x300";

  constructor() { }

  ngOnInit() {
  }

}
