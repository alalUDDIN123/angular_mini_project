// components/todo/todo.component.ts

import { Component } from '@angular/core';
import { Todo } from 'src/app/core/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos$: Todo[] = [
    {
      id: 1,
      title: "Sample todo 1",
      description: "This is a sample todo 1",
      isCompleted: false
    },
    {
      id: 2,
      title: "Sample todo 2",
      description: "This is a sample todo 2",
      isCompleted: true
    },
    {
      id: 3,
      title: "Sample todo 3",
      description: "This is a sample todo 3",
      isCompleted: false
    },
    {
      id: 4,
      title: "Sample todo 4",
      description: "This is a sample todo 4",
      isCompleted: false
    }
  ];

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
    if (this.newTodo.title.trim() === '' || this.newTodo.description.trim() === '') {
      this.showError('Please fill in all fields.');
      return;
    }

    const newId = this.todos$[this.todos$.length - 1].id + 1;
    const newTodo: Todo = {
      id: newId,
      title: this.newTodo.title,
      description: this.newTodo.description,
      isCompleted: false
    };
    this.todos$.push(newTodo);

    this.newTodo = {
      id: 0,
      title: '',
      description: '',
      isCompleted: false
    };
    this.formError = false;
  }

  showUpdateForm(index: number) {
    this.showCreateForm = false;
    const todoToUpdate = this.todos$[index];
    this.updatedTodo = {
      id: todoToUpdate.id,
      title: todoToUpdate.title,
      description: todoToUpdate.description,
      isCompleted: todoToUpdate.isCompleted
    };
  }

  updateTodo() {
    const index = this.todos$.findIndex(todo => todo.id === this.updatedTodo.id);

    if (index !== -1) {
      this.todos$[index].title = this.updatedTodo.title;
      this.todos$[index].description = this.updatedTodo.description;
    }

    this.updatedTodo = {
      id: 0,
      title: '',
      description: '',
      isCompleted: false
    };
    this.showCreateForm = true;
  }

  showError(message: string, duration: number = 2000) {
    this.formError = true;
    this.error_message = message;

    setTimeout(() => {
      this.formError = false;
    }, duration);
  }
}
