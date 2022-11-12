import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../data/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo(0, '', '');
  @Output() completeClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCompleteClick() {
    this.completeClicked.emit();
  }

  onDeleteClicked() {
    this.deleteClicked.emit();
  }
}
