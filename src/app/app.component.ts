import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Component decorator
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html', // View
  styleUrl: './app.component.css' // Style
})

// Logic
export class AppComponent {
  title = 'eckig-sieben';
}
