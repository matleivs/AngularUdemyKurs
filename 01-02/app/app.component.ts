import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div> 
        <button *ngIf="!counterRunning" (click)="onStartCounter()"> 
        Starte die stoppuhr!
        </button>
        <p *ngIf="counterRunning"> {{currentTime}} </p>
        <button *ngIf="counterRunning" (click)="onStopCounter()">
        Stop!
        </button>
    </div>
    `

})
export class AppComponent {
    counterRunning = false;
    currentTime = 0;

    counterInterval: any;

    onStartCounter() {
        this.counterRunning = true;
        // setInterval method returns an object handling the current interval
        this.counterInterval = setInterval(() => {
            this.currentTime += 0.1;
        }, 100)
    }

    onStopCounter(){
        this.counterRunning = false;
        this.currentTime = 0;
        // clearInterval tells the interval to stop
        clearInterval(this.counterInterval);
    }
}
