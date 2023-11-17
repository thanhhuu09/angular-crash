import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CommonModule, ButtonComponent],
})
export class HeaderComponent {
  title: String = 'Task Tracker';

  toggleAddTask() {
    console.log('toggle');
  }
}
