import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import Task from '../../Task';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [CommonModule, TaskItemComponent],
})
export class TasksComponent {
  // Property to hold the tasks.
  tasks: Task[] = [];

  // Inject the TaskService.
  constructor(private taskService: TaskService) {}

  // Lifecycle method.
  // onInit is called when the component is initialized.
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  // EX: Convert an array to an Observable
  // const numbers$ = of([1, 2, 3, 4, 5]);
  // numbers$.subscribe(numbers => console.log(numbers)); // Outputs: [1, 2, 3, 4, 5]

  onDeleteTask(task: Task) {
    // Not need to add parameter to subscribe() because we don't need to return anything, just delete.
    this.taskService.deleteTask(task).subscribe(() => {
      // Update the UI by filtering out the task that was deleted.
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
      console.log('Item deleted successfully');
    });
  }
}
