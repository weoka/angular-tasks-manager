import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: [
  ]
})
export class TaskComponent implements OnInit {
  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.completed.valueChanges.subscribe(value => {
      this.localTask.completed = value;
      this.taskService.updateTask(this.localTask);
    });
  }

  localTask:Task = {
    id: '',
    title: '',
    completed: false
  }

  @Input() set task(task: Task) {
    this.localTask = task;
    this.completed.setValue(task.completed);
    this.title.setValue(task.title);
  };

  @Output() editing: EventEmitter<Task | null> = new EventEmitter<Task | null>();

  editingMode: boolean = false;
  completed = new FormControl();
  title = new FormControl();

  edit() {
    this.editingMode = true;
    this.editing.emit(this.localTask);
  }

  stopEditing() {
    this.editingMode = false;
    this.editing.emit(null);
  }

  update() {
    this.localTask.title = this.title.value;
    this.taskService.updateTask(this.localTask);
    this.stopEditing();
  }

  delete() {
    this.taskService.deleteTask(this.localTask);
  }
}
