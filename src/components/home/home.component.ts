import { AddPuppy } from './../../store/actions/puppy.actions';
import { Puppy } from './../../store/models/puppy.model';
import { Tutorial } from '../../store/models/tutorial.model';
import { ApiService } from '../../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from '../../store/actions/tutorial.actions';
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

  addTutorial(name, url){
    this.store.dispatch(new AddTutorial({name:name, url:url}))
  }

  addPuppy(puppies){
    this.store.dispatch(new AddPuppy(puppies))
  }

  ngOnInit() {
    let images: Puppy[] = [];
    this.api.loadImages().subscribe(x => {
      console.log(x);
      if (x['status'] === "success") {
        x['message'].forEach(element => {
          images.push({url:element, liked:false, comments:[]});
        });
      }
      this.addPuppy(images)
    })
  }

}
