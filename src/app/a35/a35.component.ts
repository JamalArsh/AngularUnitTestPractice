import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-a35',
  templateUrl: './a35.component.html',
  styleUrls: ['./a35.component.css'],
})
export class A35Component {
  title: string = 'Angular';

  @Input() myInputMsg: string = '';

  @Output() myOutput: EventEmitter<string> = new EventEmitter();
  outputMessage: string = 'I am output directory';

  sendValues() {
    this.myOutput.emit(this.outputMessage);
  }
}
