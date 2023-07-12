// components/todo/todo.component.ts

import { Component } from '@angular/core';
import { Todo } from '../models/Todo.model';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  

  showCreateForm = true;
  formError = false;
  error_message = '';
  newTodo: Todo = {
    id: 0,
    title: '',
    description: '',
    isCompleted: false
  };
  updatedTodo: Todo = {
    id: 0,
    title: '',
    description: '',
    isCompleted: false
  };

  createTodo() {
 
  }

  showUpdateForm(index: number) {
   
  }

  updateTodo() {

  }


  deleteTodo(id: number) {
   


  }

  showError(message: string, duration: number = 2000) {
    this.formError = true;
    this.error_message = message;

    setTimeout(() => {
      this.formError = false;
    }, duration);
  }
}
