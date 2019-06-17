import { AddPuppy } from './../../store/actions/puppy.actions';
import { Puppy } from './../../store/models/puppy.model';
import { ApiService } from '../../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tutorials$: Observable<Tutorial>
  puppies$: Observable<Puppy>

  constructor(private api: ApiService, private store: Store) { 
    this.tutorials$ = this.store.select(state => state.tutorials.tutorials)
    this.puppies$ = this.store.select(state => state.puppies.puppies)
  }

  addPuppy(puppies){
    this.store.dispatch(new AddPuppy(puppies))
  }

  ngOnInit() {
    let images: Puppy[] = [];
    let likes: number;
    this.api.loadImages().subscribe(x => {
      console.log(x);
      if (x['status'] === "success") {
        x['message'].forEach(element => {
          likes = Math.floor(Math.random() * (300 - 20 + 1)) + 20;
          images.push({url:element, likes:likes, comments:[], liked:false});
        });
      }
      this.addPuppy(images)
    })
  }

}
