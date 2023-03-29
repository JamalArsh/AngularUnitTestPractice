import { Component } from '@angular/core';

@Component({
  selector: 'app-a32',
  templateUrl: './a32.component.html',
  styleUrls: ['./a32.component.css'],
})
export class A32Component {
  ColorNames = ['black', 'white', 'blue', 'green'];
  ColorList = [
    { name: 'black', id: 1 },
    { name: 'white', id: 2 },
    { name: 'blue', id: 3 },
    { name: 'green', id: 4 },
  ];
}
