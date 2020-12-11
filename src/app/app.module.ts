import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { BooksComponent } from './books/books.component'; //typescripts
import { FormsModule } from '@angular/forms';
import { SingleOptionSelectionTestComponent } from './single-option-selection-test/single-option-selection-test.component';

@NgModule({
  // Components that are part of the module, their entries must be in declartions
  declarations: [
    AppComponent,
    CounterComponent,
    BooksComponent,
    SingleOptionSelectionTestComponent
  ],
  // Modules must be imported here
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
