import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../../models/Todo.model';

// Define a feature selector for the todo state
const selectTodoState = createFeatureSelector<{ todos: Todo[] }>('todos');

// Create a selector to retrieve the todos
export const selectTodos = createSelector(
  selectTodoState,
  (state) => state.todos
);
