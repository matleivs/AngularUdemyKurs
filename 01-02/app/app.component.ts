import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<div>' + '<h1>{{title}} Hey My first Angular App! LOL</h1>' + 
    '<p> This is ein Absatz. </p>' +
    '</div>'
})
export class AppComponent {
  title = "Hallo Welt"
}
