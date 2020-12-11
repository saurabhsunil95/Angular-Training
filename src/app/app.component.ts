import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BooksComponent } from './books/books.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({

  declarations:[
    AppComponent,
    CounterComponent,
    BooksComponent
  ],

  imports:[
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  
  providers:[],
  bootstrap:[AppComponent]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
