import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>
  <!-- <button (click)="increaseBy(true)" >+1</button>
  <button (click)="increaseBy(false)" >-1</button> -->
  <button (click)="increaseBy(+1)" >+1</button>
  <button (click)="resetCounter()" >Reset Contador</button>
  <button (click)="increaseBy(-1)" >-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 100;

  increaseBy( value:number ):void{
      this.counter += value
  }

  resetCounter():void {
    this.counter = 100;
  }
}
