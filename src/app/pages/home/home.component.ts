import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  tasks: Task[] = [];
  editing: Task|null = null;

  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.taskService.tasks$.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });

    this.activatedRoute.url.subscribe(route =>{
      if(!route.length) return;

      if(route[0].path === 'pending') {
        this.tasks = this.tasks.filter(task => {
          return task.completed === false;
        })
      }

      if(route[0].path === 'completed') {
        this.tasks = this.tasks.filter(task => {
          return task.completed === true;
        })
      }
    });
  }

  setEditing(task: Task|null) {
    this.editing = task;
  }

}
