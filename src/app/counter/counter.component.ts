import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrementCounterAction,
  incrementCounterAction,
  resetCounterAction
} from '../store/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counterValue: number = 0

  constructor(private store: Store<{ counter: { counter: number } }>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      // console.log("counter from Store:-", data.counter);
      this.counterValue = data.counter

    })

  }

  OnIncrementFn() {
    this.store.dispatch(incrementCounterAction())
  }
  OnDecrementFn() {
    this.store.dispatch(decrementCounterAction())
  }
  OnResetFn() {
    this.store.dispatch(resetCounterAction())
  }

}
