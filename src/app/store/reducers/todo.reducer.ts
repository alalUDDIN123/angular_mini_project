// import { createReducer, on } from '@ngrx/store';
// import * as TodoActions from '../actions/todo.actions';
// import { Todo } from '../../core/models/todo.model';

// export interface TodoState {
//     todos: Todo[];
//     loading: boolean;
//     error: string | null;
// }

// export const initialState: TodoState = {
//     todos: [],
//     loading: false,
//     error: null,
// };

// export const todoReducer = createReducer(
//     initialState,
//     on(TodoActions.loadTodos, (state) => ({ ...state, loading: true })),
//     on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
//         ...state,
//         todos,
//         loading: false,
//         error: null,
//     })),
//     on(TodoActions.loadTodosFailure, (state, { error }) => ({
//         ...state,
//         loading: false,
//         error,
//     })),
//     on(TodoActions.addTodo, (state) => ({ ...state, loading: true })),
//     on(TodoActions.addTodoSuccess, (state, { todo }) => ({
//         ...state,
//         todos: [...state.todos, todo],
//         loading: false,
//         error: null,
//     })),
//     on(TodoActions.addTodoFailure, (state, { error }) => ({
//         ...state,
//         loading: false,
//         error,
//     })),
//     on(TodoActions.updateTodo, (state) => ({ ...state, loading: true })),
//     on(TodoActions.updateTodoSuccess, (state, { todo }) => ({
//         ...state,
//         todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
//         loading: false,
//         error: null,
//     })),
//     on(TodoActions.updateTodoFailure, (state, { error }) => ({
//         ...state,
//         loading: false,
//         error,
//     })),
//     on(TodoActions.deleteTodo, (state) => ({ ...state, loading: true })),
//     on(TodoActions.deleteTodoSuccess, (state, { id }) => ({
//         ...state,
//         todos: state.todos.filter((t) => t.id !== id),
//         loading: false,
//         error: null,
//     })),
//     on(TodoActions.deleteTodoFailure, (state, { error }) => ({
//         ...state,
//         loading: false,
//         error,
//     }))
// );


//========================================== /////====================

