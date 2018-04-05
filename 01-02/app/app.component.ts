import { Component } from '@angular/core';
import { setTimeout } from 'timers';


class Student {
    constructor(
        public firstname: string, 
        public lastname: string) { }
}

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
