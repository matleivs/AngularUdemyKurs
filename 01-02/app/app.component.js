"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var student_1 = require("./student");
var AppComponent = (function () {
    function AppComponent() {
        this.inputValue = "";
        this.students = [
            new student_1.Student("Erik", "Müller"),
            new student_1.Student("Max", "Müller"),
            new student_1.Student("Tina", "Richter"),
            new student_1.Student("Lucy", "Strong")
        ];
    }
    AppComponent.prototype.onInputChange = function (inputValue) {
        this.inputValue = inputValue;
    };
    AppComponent.prototype.onAddStudent = function () {
        this.students.push(new student_1.Student("Karl", "Moos"));
        alert("onAddStudent was called");
    };
    AppComponent.prototype.onDeleteStudent = function (index) {
        alert("onDeleteStudent was called");
        this.students.splice(index, 1);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div> \n    <h1> Title </h1> \n    <input type=\"text\" (keyup)=\"onInputChange($event.target.value)\" />\n    <p> Im Eingabefeld steht der Text: {{inputValue}}</p> \n    <button (click)=\"onAddStudent()\"> kLick mich , den button!</button>\n        <ul>\n           <li *ngFor=\"let student of students; let i = index\"> \n                {{student.firstname}}\n                {{student.lastname}}\n                <button (click)=\"onDeleteStudent(i)\">l\u00F6sche den Eintrag!</button>\n           </li>  \n        </ul> \n    </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map