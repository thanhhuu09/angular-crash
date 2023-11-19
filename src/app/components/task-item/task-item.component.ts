import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import Task from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task: Task = {
    id: 0,
    text: '',
    day: '',
    reminder: false,
  };
  // property to hold the font awesome icon.
  faTimes = faTimes;

  // property to hold the event emitter.
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();

  // method to handle the delete task event.
  onDeleteTask(task: Task) {
    // emit task need to delete to parent component.
    this.deleteTask.emit(task);
    console.log('deleteFromTaskItem', task);
  }
}
