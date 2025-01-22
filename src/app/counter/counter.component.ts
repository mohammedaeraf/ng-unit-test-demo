import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter: number = 0;

  increment() {
    this.counter += 1; // Increment the counter by 10
  }

  decrement() {
    this.counter--;
  }

}
