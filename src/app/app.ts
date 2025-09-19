import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './components/sidebar/sidebar';
import { PostmanCloneComponent } from './postman-clone/postman-clone';
import { LayoutService } from './layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, Sidebar, PostmanCloneComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isSidebarOpen$: Observable<boolean>;
  sidebarWidth$: Observable<number>;

  constructor(private layoutService: LayoutService) {
    this.isSidebarOpen$ = this.layoutService.isSidebarOpen$;
    this.sidebarWidth$ = this.layoutService.sidebarWidth$;

    if (window.innerWidth >= 768) {
      this.layoutService.toggleSidebar(true);
    }
  }

  toggleSidebar(): void {
    const currentState = this.layoutService.isSidebarOpen();
    this.layoutService.toggleSidebar(!currentState);
  }

  closeSidebar(): void {
    this.layoutService.toggleSidebar(false);
  }
}
