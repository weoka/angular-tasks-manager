import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewTodoInputComponent } from './components/new-todo-input/new-todo-input.component';
import { TaskComponent } from './components/task/task.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { TasksLeftComponent } from './components/tasks-left/tasks-left.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewTodoInputComponent,
    TaskComponent,
    AutofocusDirective,
    TasksLeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
