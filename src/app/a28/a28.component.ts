import { Component } from '@angular/core';

@Component({
  selector: 'app-a28',
  templateUrl: './a28.component.html',
  styleUrls: ['./a28.component.css'],
})
export class A28Component {
  studentName: string = '';

  setName() {
    this.studentName = 'arsh';
  }
}
