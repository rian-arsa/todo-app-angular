import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Todo } from '../data/todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.scss'],
})
export class AddTodosComponent implements OnInit {
  showValidationErrors: boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    console.log(form);

    if (form.invalid) return (this.showValidationErrors = true);

    this.dataService.addTodo(new Todo(0, form.value.judul, form.value.text));

    this.showValidationErrors = false;
    form.reset();
    this.router.navigate(['/']);
    return;
  }
}
