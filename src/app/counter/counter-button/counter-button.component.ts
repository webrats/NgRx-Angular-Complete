import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';


@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {

  
  constructor(private store :Store<{counter :CounterState}>) { }

  ngOnInit(): void {
  }

  onIncrement(){
   this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }

  onReset(){
    this.store.dispatch(reset())
  }

}
