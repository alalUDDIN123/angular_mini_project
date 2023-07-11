import { createAction } from "@ngrx/store";

const incrementCounterAction = createAction('[Counter] Increment');
const decrementCounterAction = createAction('[Counter] Decrement');
const resetCounterAction = createAction('[Counter] Reset');

export {
    incrementCounterAction,
    decrementCounterAction,
    resetCounterAction
};
