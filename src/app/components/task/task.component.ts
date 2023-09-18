import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: [
  ]
})
export class TaskComponent {
  @Input() task:Task = {
    id: '',
    title: '',
    completed: false
  };

  editing: boolean = false;

  edit() {
    this.editing = true;
  }

  stopEditing() {
    this.editing = false;
  }
}
