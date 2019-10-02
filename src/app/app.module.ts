import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { JumboCardComponent } from './cards/jumboCard/jumbocard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumboCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
