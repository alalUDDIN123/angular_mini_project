import { Store, select } from "@ngrx/store";
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo.model';
import { getTodosAction } from "src/app/store/actions/todo.actions";
import { selectTodos } from "src/app/store/selectors/todo.selectors";
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos$: Observable<Todo[]> = of([]); // Initialize with an empty array

  showCreateForm = true;
  formError = false;
  error_message = '';
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
    this.todos$.subscribe((todos: Todo[]) => {
      console.log('Todos:', todos);
    });
  }

  createTodo() {
    // Add logic for creating a new todo
  }

  showUpdateForm(index: number) {
    // Add logic for showing the update form
  }

  updateTodo() {
    // Add logic for updating a todo
  }

  deleteTodo(id: number) {
    // Add logic for deleting a todo
  }

  showError(message: string, duration: number = 2000) {
    this.formError = true;
    this.error_message = message;

    setTimeout(() => {
      this.formError = false;
    }, duration);
  }
}
