import { Component } from '@angular/core';

@Component({
  selector: 'app-a27',
  templateUrl: './a27.component.html',
  styleUrls: ['./a27.component.css'],
})
export class A27Component {
  label: string = 'this is a lebel';

  button1Click() {
    this.label = 'button 1 clicked';
  }

  onChangeInput() {
    this.label = 'label value changed';
  }

  button2Click() {
    this.label = 'button 2 clicked';
  }

  onChangeLabelInput(event: any) {
    this.label = event.target.value;
  }
}
