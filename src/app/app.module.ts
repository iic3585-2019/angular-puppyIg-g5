import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageBoxComponent } from './image-box/image-box.component';
import { HomeComponent } from './home/home.component';
import { ActionBarComponent } from './action-bar/action-bar.component';

//NGXS Store
import {NgxsModule} from '@ngxs/store'
import {TutorialState} from './store/state/tutorial.state'
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin'

@NgModule({
  declarations: [
    AppComponent,
    ImageBoxComponent,
    HomeComponent,
    ActionBarComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      TutorialState
    ]),
    NgxsLoggerPluginModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
