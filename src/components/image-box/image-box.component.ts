import { Puppy } from './../../store/models/puppy.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})

export class ImageBoxComponent implements OnInit {

  @Input() dog: Puppy;

  // Likes desde los 20 a los 300
  likes: number = Math.floor(Math.random() * (300 - 20 + 1)) + 20;

  constructor() { }

  ngOnInit() {
  }

}

