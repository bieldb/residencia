import { Component, signal } from '@angular/core';
import { PostmanClone } from './postman-clone/postman-clone';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [PostmanClone, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('residencia-project');
}
