import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task | undefined) : Observable<Task> {
    if (!task) {
      throw new Error('Task is undefined');
    }
    return this.http.delete<Task>(`${this.apiUrl}/${task.id}`);
  }

  updateTask(task: Task | undefined) : Observable<Task> {
    if (!task) {
      throw new Error('Task is undefined');
    }
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }
}
