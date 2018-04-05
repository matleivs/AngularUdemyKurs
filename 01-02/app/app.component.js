"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Student = (function () {
    function Student(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return Student;
}());
var AppComponent = (function () {
    function AppComponent() {
        this.students = [
            new Student("Erik", "Müller"),
            new Student("Max", "Müller"),
            new Student("Tina", "Richter"),
            new Student("Lucy", "Strong")
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div> \n        <ul>\n           <li *ngFor=\"let student of students\"> \n                {{student.firstname}}\n                {{student.lastname}}\n           </li>  \n        </ul> \n    </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map