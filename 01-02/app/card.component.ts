import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-card',
    template: `
    <div style= "border: 1px solid green;">
        {{ title }}
    </div>
    `
})

export class CardComponent {
    // this Input annotation tells angular, that "title" is an attribute that gets passed into our component.
    @Input() title: String;
}