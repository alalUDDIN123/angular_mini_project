import { createReducer, on } from "@ngrx/store"

import { Todo } from "../../models/Todo.model";
import { addTodosAction, deleteTodosAction, getTodosAction, updateTodosAction } from "../actions/todo.actions";

const intialTodosData = [
    {
        id: 1,
        title: "Sample todo 1",
        description: "This is a sample todo 1",

    }
]

// Defining structure of the todo model
export interface TodoState {
    todos: Todo[]

}

// Define the initial state

export const intialTodoState: TodoState = {
    todos: intialTodosData
}


// logic of reducer

export const todoReducer = createReducer(
    intialTodoState,

    // get todo
    on(getTodosAction, state => state),

    // create todo

    on(addTodosAction, (state, { todo }) => ({
        ...state,
        todos: [...state.todos, todo]
    })),


    // update todo
    on(updateTodosAction, (state, { updateTodo }) => ({
        ...state,
        todos: state.todos.map((t) => (t.id === updateTodo.id ? updateTodo : t)),
    })),

    on(deleteTodosAction, (state, { deleteTodoId }) => ({
        ...state,
        todos: state.todos.filter((t) => t.id !== deleteTodoId),
    }))
)