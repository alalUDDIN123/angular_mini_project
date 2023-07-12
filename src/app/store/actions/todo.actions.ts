import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models/Todo.model";

const getTodosAction = createAction('[Todo] GET TODOS');

const addTodosAction = createAction('[Todo] ADD TODOS', props<{ todo: Todo }>());

const updateTodosAction = createAction('[Todo] UPDATE TODOS', props<{ updateTodo: Todo }>());

const deleteTodosAction = createAction('[Todo] DELETE TODOS', props<{ deleteTodoId: number }>());

export {
    getTodosAction,
    addTodosAction,
    updateTodosAction,
    deleteTodosAction
};
