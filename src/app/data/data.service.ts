import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  todos: Todo[] = [
    new Todo(1, 'Mengerjakan Tugas Matematika', 'Halaman 201'),
    new Todo(2, 'Mengerjakan Tugas Fisika', 'Halaman 201', true),
    new Todo(3, 'Mengerjakan Tugas Kimia', 'Halaman 201'),
    new Todo(4, 'Mengerjakan Tugas Biologi', 'Halaman 201', true),
    new Todo(5, 'Mengerjakan Tugas Olahraga', 'Halaman 201'),
  ];

  constructor() {}

  getAllTodos() {
    return this.todos;
  }

  getTodo(id: number) {
    return this.todos.find((item) => item.id === id);
  }

  addTodo(todo: Todo) {
    todo.id = this.todos.length === 0 ? 1 : this.todos.length + 1;
    this.todos.push(todo);
  }

  completeTodo(id: number) {
    this.todos.map((value) => {
      if (value.id === id) {
        value.completed = true;
      }
    });
  }

  updateTodo(id: number, todo: Todo) {
    this.todos[id] = todo;
  }

  deleteTodo(id: number) {
    console.log(this.todos);
    const index = this.todos.findIndex((item) => item.id === id);

    this.todos.splice(index, 1);
  }
}
