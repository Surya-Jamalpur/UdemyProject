import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employeeList: any[] = [
    {
      empName:'Vasanth',
      empId:256
    },
    {
      empName:'Ratan Tata',
      empId:1234
    }
  ];
  newempadded(empData:{empName:string, empId:number}){
    this.employeeList.push({
      empName:empData.empName,
      empId:empData.empId
    })

  }
  constructor() { }

  ngOnInit() {
  }

}
