import { Component } from '@angular/core';

@Component({
  selector: 'app-a19',
  templateUrl: './a19.component.html',
  styleUrls: ['./a19.component.css'],
})
export class A19Component {
  myLabel: string = '';

  myMethod() {
    this.myLabel = 'button clicked';
  }
}
