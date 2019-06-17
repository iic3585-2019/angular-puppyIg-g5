import { HomeComponent } from '../components/home/home.component';
import { LikedDogsComponent } from 'src/components/liked-dogs/liked-dogs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'liked-dogs', component: LikedDogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
