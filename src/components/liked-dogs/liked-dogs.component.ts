import { Puppy } from './../../store/models/puppy.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs'

@Component({
  selector: 'liked-dogs',
  templateUrl: './liked-dogs.component.html',
  styleUrls: ['./liked-dogs.component.scss']
})
export class LikedDogsComponent implements OnInit {

  puppies$: Observable<Puppy>

  constructor(private store: Store) { 
    this.puppies$ = this.store.select(state => state.puppies.puppies)
  }

  ngOnInit() {
  }

}
