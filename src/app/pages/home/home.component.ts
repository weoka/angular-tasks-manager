import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import {ActivatedRoute, UrlSegment} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  tasks: Task[] = [];
  editing: Task|null = null;
  route: string = '';

  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(route =>{
      if(!route.length) return;
      this.route = route[0].path;
      this.filter(this.route);
    });

    this.taskService.tasks$.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      this.filter(this.route);
    });
  }

  filter(route: string) {
      if(route === 'pending') {
        this.tasks = this.tasks.filter(task => {
          return task.completed === false;
        })
      }

      if(route === 'completed') {
        this.tasks = this.tasks.filter(task => {
          return task.completed === true;
        })
      }
  }

  setEditing(task: Task|null) {
    this.editing = task;
  }

  deleteCompletedTasks() {
    this.taskService.deleteCompletedTasks();
  }

}
