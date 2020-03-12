import { Component, EventEmitter, Output } from '@angular/core'
import { empty } from 'rxjs';


@Component({
    selector:'app-add-employee',
    templateUrl:'add-employee.component.html'
})
export class AddEmployeeComponent {
    newemployeeName:string;
    newemployeeId:number;
    @Output() EmployeeAdded = new EventEmitter<{empName:string, empId:number}>();


    onAddEmployee(){
        if(this.newemployeeName !='' && this.newemployeeId != null){
            this.EmployeeAdded.emit({
                empName:this.newemployeeName,
                empId:this.newemployeeId
            });
        }
        
        this.newemployeeName='';
        this.newemployeeId=null;
    }
}