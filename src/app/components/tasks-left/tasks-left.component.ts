import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-left',
  template: `
    <span class="todo-count"><strong>{{ tasksCount }}</strong> {{ tasksCount > 1 ? 'items' : 'item' }} left</span>
  `,
  styles: [
  ]
})
export class TasksLeftComponent implements OnInit {
  constructor(
    private taskService: TaskService
  ) {}

  tasksCount:number = 0;

  ngOnInit(): void {
    this.taskService.tasks$.subscribe(tasks => {
      this.tasksCount = tasks.length;
    });
  }

}
