import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {
  isResizing = false;
  collections = [
    {
      name: 'My Collection',
      isOpen: true,
      requests: [
        { method: 'GET', name: 'Get data' },
        { method: 'POST', name: 'Post data' }
      ]
    },
    {
      name: 'New Collection',
      isOpen: false,
      requests: []
    }
  ];

  constructor(private layoutService: LayoutService) {}

  toggleCollection(collection: any) {
    collection.isOpen = !collection.isOpen;
  }

  onResizeStart(event: MouseEvent): void {
    if (!this.layoutService.isSidebarOpen()) return;
    this.isResizing = true;
    event.preventDefault();
  }

  @HostListener('document:mouseup', ['$event'])
  onResizeEnd(event: MouseEvent): void {
    this.isResizing = false;
  }

  @HostListener('document:mousemove', ['$event'])
  onResize(event: MouseEvent): void {
    if (this.isResizing) {
      const minWidth = 200;
      const maxWidth = 600;
      let newWidth = event.clientX;

      if (newWidth < minWidth) newWidth = minWidth;
      if (newWidth > maxWidth) newWidth = maxWidth;
      
      this.layoutService.setSidebarWidth(newWidth);
    }
  }
}
