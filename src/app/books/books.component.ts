import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  //constructor 

  //Instance data members
  public books : Array<Book> = [
    {title : "T1", price : 1000, author : "A1"},
    {title : "T2", price : 1000, author : "A1"},
    {title : "T3", price : 1000, author : "A1"},
    {title : "T4", price : 1000, author : "A2"}
   ] ; // [] creates a blank array, {} creates an object

  //instance methods
  public addNewBook(/*this  = refers to the calling object*/){
    this.books.push({ title : "", price : 0, author : ""});
  }

  //static data members'
  
  //static methods
}

//TS : interface is used for 2 things
// 1.  creating a type to be assigned to a variable so that the variable follows the rule of type
// 2. it can provide functions to be implemented by class (like c++, c#, java)
interface Book{
  title: string;
  price: number;
  author?: string; // "?" means author is option
}
