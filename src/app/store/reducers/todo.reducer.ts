import { createReducer, on } from "@ngrx/store"

import { Todo } from "../../models/Todo.model";
import { getTodosAction } from "../actions/todo.actions";

const intialTodosData = [
    {
        id: 1,
        title: "Sample todo 1",
        description: "This is a sample todo 1",

    },
    {
        id: 2,
        title: "Sample todo 2",
        description: "This is a sample todo 2",

    },
    {
        id: 3,
        title: "Sample todo 3",
        description: "This is a sample todo 3",

    },
    {
        id: 4,
        title: "Sample todo 4",
        description: "This is a sample todo 4",

    }]

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

    on(getTodosAction, state => state)
)