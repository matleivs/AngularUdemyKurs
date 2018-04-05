import { Component } from '@angular/core';
import { Student } from "./student";

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
        new Student("Erik", "Müller"),
        new Student("Max", "Müller"),
        new Student("Tina", "Richter"),
        new Student("Lucy", "Strong")
    ];
}
