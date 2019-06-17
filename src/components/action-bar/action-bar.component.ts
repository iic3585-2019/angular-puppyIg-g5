import { LikePuppy, CommentPuppy } from './../../store/actions/puppy.actions';
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
  comment: boolean = false;

  constructor(private store: Store) { }

  ngOnInit() {}

  like(dog){
    this.store.dispatch(new LikePuppy(dog))
  }

  open_comment(){
    this.comment = !this.comment
  }

  commentPuppy(comment, dog){
    dog.comments.push(comment)
    this.store.dispatch(new CommentPuppy(dog))
  }

}
