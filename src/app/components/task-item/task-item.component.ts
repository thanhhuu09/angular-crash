import { Component, Input } from '@angular/core';
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

  faTimes = faTimes;
}
