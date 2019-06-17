import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageBoxComponent } from '../components/image-box/image-box.component';
import { HomeComponent } from '../components/home/home.component';
import { ActionBarComponent } from '../components/action-bar/action-bar.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { LikedDogsComponent } from './../components/liked-dogs/liked-dogs.component';

//NGXS Store
import {NgxsModule} from '@ngxs/store'
import {TutorialState} from '../store/state/tutorial.state'
import { PuppyState } from './../store/state/puppy.state';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin'

@NgModule({
  declarations: [
    AppComponent,
    ImageBoxComponent,
    HomeComponent,
    ActionBarComponent,
    NavbarComponent,
    LikedDogsComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      TutorialState,
      PuppyState
    ]),
    NgxsLoggerPluginModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
