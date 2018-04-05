import { Component } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
    selector: 'my-app',
    template: `<div> 
    <h1> {{ title }} </h1> 
    </div>`

})
export class AppComponent {
  title: string;

  constructor() {
      this.title = "Hallo Welt am Computerbildschirm";
      setTimeout(() => {this.title ="123";}, 2500);
  }
}
