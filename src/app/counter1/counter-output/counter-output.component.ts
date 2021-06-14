import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../state/counter.state';
import {getCounter} from "../state/counter.selectors";
import { AppState } from 'src/app/app.state';
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {

  counterNumber$ : Observable<number>;
  constructor(private store :Store<AppState>) { }

  ngOnInit(): void {
    this.counterNumber$ = this.store.select(getCounter);
  }

}


