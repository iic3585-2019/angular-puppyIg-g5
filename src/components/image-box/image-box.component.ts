import { Puppy } from './../../store/models/puppy.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})

export class ImageBoxComponent implements OnInit {

  @Input() dog: Puppy;

  constructor() { }

  ngOnInit() {
  }

}

