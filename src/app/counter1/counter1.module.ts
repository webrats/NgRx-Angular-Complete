import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Counter1RoutingModule } from './counter1-routing.module';
import { Counter1Component } from './counter1.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';



@NgModule({
  declarations: [
    Counter1Component,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterInputComponent
  ],
  imports: [
    CommonModule,
    Counter1RoutingModule,
    FormsModule,
    StoreModule.forFeature('counter',counterReducer)
  ]
})
export class Counter1Module { }
