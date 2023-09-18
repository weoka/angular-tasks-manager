import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private localTasks: Task[] = [];
  private tasks = new BehaviorSubject<Task[]>([]);

  tasks$ = this.tasks.asObservable();

  addTask(task: Task) {
    this.localTasks.push(task);
    this.tasks.next(this.localTasks);
    window.localStorage.setItem('tasks', JSON.stringify(this.localTasks));
  }

  loadTasks(): boolean {
    let savedTasks = window.localStorage.getItem('tasks');

    if(!savedTasks) return false;

    this.localTasks = JSON.parse(savedTasks);
    this.tasks.next(this.localTasks);

    return true;
  }

  constructor() {
    this.loadTasks();
  }
}
