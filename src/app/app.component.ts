import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'AngularTesting';

  showMessage(msg: string): string {
    return msg;
  }
  myInputMessage: string = 'I am the parent component';
  outputDecorator = '';

  GetChildData(data: string) {
    this.outputDecorator = data;
  }
}
