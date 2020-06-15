import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @Input() empElement:{empName:string, empId:number};

  onedit(selectedEmployee){
    console.log(selectedEmployee)
  }
  constructor() { }

  ngOnInit() {
  }

}
