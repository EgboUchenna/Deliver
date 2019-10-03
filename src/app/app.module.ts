import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/layout/header/header.component';
import { JumboCardComponent } from './components/layout/jumboCard/jumbocard.component';
import { RecommendedComponent } from './components/layout/recommended/recommended.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumboCardComponent,
    RecommendedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
