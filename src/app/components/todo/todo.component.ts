// component.ts

import { Store, select } from "@ngrx/store";
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo.model';
import { addTodosAction, getTodosAction, updateTodosAction, deleteTodosAction } from "src/app/store/actions/todo.actions";
import { selectTodos } from "src/app/store/selectors/todo.selectors";
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos$: Observable<Todo[]> = of([]); // Initialize with an empty array

  showCreateForm: boolean = true;

  newTodo: Todo = {
    id: 0,
    title: '',
    description: '',
  };
  updatedTodo: Todo = {
    id: 0,
    title: '',
    description: '',
  };

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getTodosAction());

    // Subscribe to the todos state using the selector
    this.todos$ = this.store.pipe(select(selectTodos));
    // this.todos$.subscribe((todos: Todo[]) => {
    //   console.log('Todos:', todos);
    // });
  }

  createTodo() {
    const CreateNewTodo = {
      id: Date.now(),
      title: this.newTodo.title,
      description: this.newTodo.description
    }

    this.store.dispatch(addTodosAction({ todo: CreateNewTodo }))

    this.newTodo = {
      id: 0,
      title: '',
      description: '',
    };
  }

  showUpdateForm(index: number) {
    this.showCreateForm = false;

    this.todos$.subscribe((todos: Todo[]) => {
      this.updatedTodo = { ...todos[index] };
    }); // Set the updatedTodo with the selected todo
  }

  updateTodo() {
    // console.log("this.updatedTodo:-", this.updatedTodo)
    this.store.dispatch(updateTodosAction({ updateTodo: this.updatedTodo }));
    this.showCreateForm = true;
    this.updatedTodo = {
      id: 0,
      title: '',
      description: '',
    };
  }

  deleteTodo(id: number) {
    this.store.dispatch(deleteTodosAction({ deleteTodoId: id }));
  }

}
