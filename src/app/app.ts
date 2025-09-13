import { Component, signal } from '@angular/core';
import { Sidebar } from './components/sidebar/sidebar';
import { PostmanCloneComponent } from './postman-clone/postman-clone';

@Component({
  selector: 'app-root',
  imports: [ Sidebar, PostmanCloneComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('residencia-project');
}
