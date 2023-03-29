import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  sum: number = 0;
  result: any;
  studentResult: string = '';
  private Name: string = '';
  CountNumber: number = 0;
  name = '';

  constructor(public service: StudentService) {}

  calculate(num1: number, num2: number) {
    this.sum = num1 + num2;
    return this.sum;
  }
  saveData() {
    let info = {
      sumVal: this.calculate(5, 5),
      name: 'Dot net office',
    };
    this.SaveDataIntoConsole(info);
    this.service.SaveDetails(info).subscribe((response) => {
      this.result = response;
    });
  }

  SaveDataIntoConsole(info: any) {
    console.log(info);
  }

  StudentResult() {
    if (this.calculate(10, 20) >= 40) {
      return 'Pass';
    } else {
      return 'Fail';
    }
  }
  StudentSchoolResult() {
    if (this.calculate(10, 20) >= 40) {
      this.studentResult = 'Pass';
      return this.studentResult;
    } else {
      this.studentResult = 'Fail';
      return this.studentResult;
    }
  }

  increaseNumber() {
    this.CountNumber++;
  }

  decreaseNumber() {
    this.CountNumber--;
  }

  private ShowName() {
    this.Name = 'Dotnet office';
  }
}
