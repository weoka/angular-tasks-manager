import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-todo-input',
  template: `
    <input
        class="new-todo"
        placeholder="Type new todo"
        autofocus
        type="text"
        (keyup.enter)="saveTask()"
        [formControl]="task"
      />
  `,
  styles: [
  ]
})

export class NewTodoInputComponent {
  task = new FormControl('', [Validators.required, Validators.minLength(1)]);

  constructor(
    private taskService: TaskService
  ){}

  saveTask() {
    if(!this.task.value) return;

    this.taskService.addTask(this.task.value);

    this.task.reset();
  }
}
