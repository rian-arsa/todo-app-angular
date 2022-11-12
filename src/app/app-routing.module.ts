import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodosComponent } from './add-todos/add-todos.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'add', component: AddTodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
