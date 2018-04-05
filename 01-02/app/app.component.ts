import { Component } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
    selector: 'my-app',
    template: `<div> 
    <ul>
    <li *ngFor="let student of students"> {{student}} </li>  
    </ul> 
    </div>`

})
export class AppComponent {
  students = [ "Erik", "Max", "Tina", "Lucy"];
}
