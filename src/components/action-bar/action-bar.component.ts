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
    if (!this.dog.liked) {
      this.store.dispatch(new LikePuppy({puppy:dog,like:true}))
    }
    else{
      this.store.dispatch(new LikePuppy({puppy:dog,like:false}))
    }
  }

  open_comment(){
    this.comment = !this.comment
  }

  commentPuppy(dog, comment){
    this.store.dispatch(new CommentPuppy({puppy:dog, comment:comment}))
    this.open_comment()
  }

}
