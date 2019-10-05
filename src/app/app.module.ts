import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/layout/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { JumboCardComponent } from './components/layout/jumboCard/jumbocard.component';
import { RecommendedComponent } from './components/layout/recommended/recommended.component';
import { RatingsCardComponent } from './components/cards/restaurants/ratingsCard.component';
import { HowItWorksComponent } from './components/layout/how-it-works/how-it-works.component';
import { HowItWorksCardComponent } from './components/cards/how-it-works/card.component';
import { PopularResturantsComponent } from './components/layout/popular-resturants/popular-resturants.component';
import { DownloadAppComponent } from './components/layout/download-app/download-app.component';
import { TestimoniesComponent } from './components/layout/testimonies/testimonies.component';
import { TestimoniesCardComponent } from './components/cards/testimonies-card/testimonies-card.component';
import { FooterComponent } from './components/layout/footer/footer.component';



import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    JumboCardComponent,
    HowItWorksComponent,
    TestimoniesComponent,
    RatingsCardComponent,
    RecommendedComponent,
    DownloadAppComponent,
    HowItWorksCardComponent,
    TestimoniesCardComponent,
    PopularResturantsComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
