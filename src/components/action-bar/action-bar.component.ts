import { LikePuppy } from './../../store/actions/puppy.actions';
import { Store } from '@ngxs/store';
import { Component, OnInit, Input } from '@angular/core';
import { Puppy } from 'src/store/models/puppy.model';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  @Input() dog: Puppy;  

  constructor(private store: Store) { }

  ngOnInit() {

  }

  like(){
    this.store.dispatch(new LikePuppy(this.dog))
  }

}
