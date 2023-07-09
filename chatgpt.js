// based on the belwo structure can you do todo crud operation using NgRx state management in angular
// step by step and without  use of effect.ts

- app
  - components
    - header
      - header.component.ts
      - header.component.html
      - header.component.css
      - header.component.spec.ts
    - todo
      - todo.component.ts
      - todo.component.html
      - todo.component.css
      - todo.component.spec.ts
  - core
    - models
      - todo.model.ts
    - services
      - TodoService.ts
  - store
    - actions
      - todo.actions.ts
    - reducers
      - todo.reducer.ts
    - selectors
      - todo.selectors.ts
  - app.component.html
  - app.component.ts
  - app.module.ts