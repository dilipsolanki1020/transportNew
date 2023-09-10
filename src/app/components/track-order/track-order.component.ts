import { Component } from '@angular/core';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent {
  // currentStep: number = 5; // Default current step
  numSteps: number = 5;

  // changeProgress(step: number) {
  //   this.currentStep = step;
  // }
}
