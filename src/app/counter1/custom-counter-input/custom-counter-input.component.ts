import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addCustomValue, changeDesc, increment } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';
import {getDesc} from "../state/counter.selectors";
import { AppState } from 'src/app/app.state';
@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  value :number ;
 
  counterDesc$ : Observable<String> ;
  constructor(private store :Store<AppState>) { }

  ngOnInit(): void {

    this.counterDesc$ =this.store.select(getDesc)
  }

  changeDesc(){
    this.store.dispatch(changeDesc());
  }
  addValue(){
    this.store.dispatch(addCustomValue({value:this.value}));
    
  }
}
