## NgRx Step By Step

## Installation 
- `ng add @ngrx/store` : for NgRx state management in angular
- `ng add @ngrx/store-devtools` : for checking how application getting work in NgRx

**`Actions`**:
   - Actions are one of the main building blocks in NgRx. Actions express unique events that  happen  throughout your application. Action is used for triggering the reducer and effects.

**`Reducer`**:
   - Reducers in NgRx are responsible for state changes, which means reducers help to handle  transition changes from one state to the next state in our application.
   Reducers are pure functions in that they produce the same output for a given input. They are without side effects and handle each state transition synchronously. Each reducer function takes the latest Action dispatched, the current state, and determines whether to return a newly modified state or the original state.

---

- `git push origin counter_with_ngrx`
- `git checkout origin counter_with_ngrx`