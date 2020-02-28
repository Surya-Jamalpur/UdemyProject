import { Component } from '@angular/core';

@Component({
    selector:'app-warning',
    templateUrl:'./warning.component.html',
    styles:[`
        p {
            padding:20px;
            background:pink;
            border:solid 1px red;
            color:red;
            font-size:30px !important;
            text-align:center;
        }
    `]
})
export class WarningComponent {

}