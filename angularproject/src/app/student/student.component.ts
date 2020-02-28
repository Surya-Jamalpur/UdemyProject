import { Component } from '@angular/core';

@Component({
    selector:'app-student',
    templateUrl:'./student.component.html',
    styles:[`
    p{
        color:red;
    }`]
})
export class StudentComponent {
    studentName: string = 'Goutham';
    studentAge: number = 29;
   

}