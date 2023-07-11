import { createReducer, on } from '@ngrx/store';
import {
    incrementCounterAction,
    decrementCounterAction,
    resetCounterAction
} from '../actions/counter.actions';

// Define the initial state interface
interface CounterState {
    counter: number;
}

// Define the initial state
const initialState: CounterState = {
    counter: 0
};

// Create the reducer
export const counterReducer = createReducer(
    initialState,
    on(incrementCounterAction, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        };
    }),
    on(decrementCounterAction, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        };
    }),
    on(resetCounterAction, (state) => {
        return {
            ...state,
            counter: 0
        };
    })
);

// export function reducer(state: CounterState | undefined, action: any) {
//     return counterReducer(state, action);
// }
