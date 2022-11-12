import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { Todo } from '../data/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  total: number = 0;

  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.todos = this.dataservice.getAllTodos();
    this.total = this.dataservice.getAllTodos().length;
  }

  toggleCompleted(todo: Todo) {
    this.dataservice.completeTodo(todo.id);
  }

  deleteTodo(todo: Todo) {
    this.dataservice.deleteTodo(todo.id);
  }
}
