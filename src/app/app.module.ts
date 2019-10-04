import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/layout/header/header.component';
import { JumboCardComponent } from './components/layout/jumboCard/jumbocard.component';
import { RecommendedComponent } from './components/layout/recommended/recommended.component';
import { RatingsCardComponent } from './components/cards/restaurants/ratingsCard.component';
import { HowItWorksComponent } from './components/layout/how-it-works/how-it-works.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumboCardComponent,
    RecommendedComponent,
    RatingsCardComponent,
    HowItWorksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
