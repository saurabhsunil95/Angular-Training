import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  count = 0;

  public decrement(){
    this.count--;
  }

  public increment(){
    this.count++;
  }
}
