import { Component } from '@angular/core';

@Component({
  selector: 'app-a20',
  templateUrl: './a20.component.html',
  styleUrls: ['./a20.component.css'],
})
export class A20Component {
  count: number = 0;

  increaseNumber() {
    this.count++;
  }

  decreaseNumber() {
    this.count--;
  }
}
