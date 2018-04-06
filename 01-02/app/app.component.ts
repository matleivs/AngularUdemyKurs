import { Component } from '@angular/core';
import { Student } from "./student";

@Component({
    selector: 'my-app',
    template: `
    <div> 
    <h1> Title </h1> 
    <input type="text" (keyup)="onInputChange($event)" />
    <p> Im Eingabefeld steht der Text: {{inputValue}}</p> 
    <button (click)="onAddStudent()"> kLick mich , den button!</button>
        <ul>
           <li *ngFor="let student of students; let i = index"> 
                {{student.firstname}}
                {{student.lastname}}
                <button (click)="onDeleteStudent(i)">lösche den Eintrag!</button>
           </li>  
        </ul> 
    </div>`

})
export class AppComponent {

    inputValue = "";

    onInputChange(event: any) {
        console.log(event)
        console.log("onInputChange was called")
    }

    students = [
        new Student("Erik", "Müller"),
        new Student("Max", "Müller"),
        new Student("Tina", "Richter"),
        new Student("Lucy", "Strong")
    ];

    onAddStudent() {
        this.students.push(new Student("Karl", "Moos"))
        alert("onAddStudent was called")
    }

    onDeleteStudent(index: number) {
        alert("onDeleteStudent was called")
        this.students.splice(index, 1)
         }
}
