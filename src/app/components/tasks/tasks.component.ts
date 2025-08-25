import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component'; 

@Component({
  selector: 'app-tasks',
  imports: [TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];
  
  constructor(private taskService: TaskService) {}

  ngOnInit() : void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  deleteTask(task: Task | undefined) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task?.id);
    });
  }

  toggleTask(task: Task | undefined) {
      if (task) {
        task.completed = !task.completed;
        this.taskService.updateTask(task).subscribe();
      }
  }
}
