import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  allowNewStudent = false;
  addStudentStatus = 'No Student Added..!';
  studentName = '';
  students = ['Surya', 'Sagar', 'Rajesh'];
  constructor() {
      setTimeout(() => {
        this.allowNewStudent = true;
      },2000);
  }

  ngOnInit() {
  }
  onAddStudent() {
    this.addStudentStatus = 'The Student was Added Successfully. And the name of the student is ' + this.studentName;
    this.students.push(this.studentName);
    this.studentName = '';
  }
  removeStudent(sid) {
    this.students.splice(sid, 1);
  }
  onUpdateStudentName(event: Event) {
    this.studentName = (<HTMLInputElement>event.target).value;

  }
}
