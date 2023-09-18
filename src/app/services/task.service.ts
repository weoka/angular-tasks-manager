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

  addTask(title: string) {
    const task: Task = {
      id: (Math.random() + 1).toString(36).substring(3),
      title: title,
      completed: false
    }

    this.localTasks.push(task);
    this.saveTasks();
  }

  updateTask(task: Task) {
    const taskId = this.localTasks.findIndex(x => {
      x.id == task.id
    });

    this.localTasks[taskId] = task;
    this.saveTasks();
  }

  deleteTask(task: Task) {
    this.localTasks = this.localTasks.filter(x => {
      return x.id !== task.id
    });

    this.saveTasks();
  }

  saveTasks() {
    this.tasks.next(this.localTasks);
    window.localStorage.setItem('tasks', JSON.stringify(this.localTasks));
  }

  loadTasks() {
    let savedTasks = window.localStorage.getItem('tasks');

    if(!savedTasks) return;

    this.localTasks = JSON.parse(savedTasks);
    this.tasks.next(this.localTasks);
  }

  constructor() {
    this.loadTasks();
  }
}
