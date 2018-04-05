import { Component } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
    selector: 'my-app',
    template: `
    <div> 
        <ul>
           <li *ngFor="let student of students"> 
                {{student.firstname}}
                {{student.lastname}}
           </li>  
        </ul> 
    </div>`

})
export class AppComponent {
    students = [
        { firstname: "Erik", lastname: "Meier" },
        { firstname: "Max", lastname: "Müller" },
        { firstname: "Tina", lastname: "Richter" },
        { firstname: "Lucy", lastname: "Strong" }
    ];
}
