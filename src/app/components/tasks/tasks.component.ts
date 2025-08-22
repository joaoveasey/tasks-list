import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskItemComponent],
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

}
