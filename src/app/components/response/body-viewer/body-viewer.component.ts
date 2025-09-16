import { Component, Input, HostListener } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body-viewer',
  standalone: true,
  imports: [CommonModule, FormsModule, UpperCasePipe],
  templateUrl: './body-viewer.component.html',
  styleUrls: ['./body-viewer.component.css']
})
export class BodyViewerComponent {
  @Input() responseBody: any = '';
  @Input() format: string = 'json';   // <-- corrigido aqui
  @Input() tab!: string;

  formats = ['json','xml','html','javascript','raw','hex','base64'];
  dropdownOpen = false;

  toggleDropdown(){ this.dropdownOpen = !this.dropdownOpen; }
  setFormat(f: string){ this.format = f; this.dropdownOpen = false; }

  @HostListener('document:click', ['$event'])
  onDocClick(ev: Event){
    const t = ev.target as HTMLElement;
    if (!t.closest('.format-selector')) this.dropdownOpen = false;
  }

  getFormattedBody(): string {
    if (this.responseBody == null || this.responseBody === '') return '';
    try {
      const raw = this.responseBody;
      if (this.format === 'json') {
        if (typeof raw === 'string') {
          try { return JSON.stringify(JSON.parse(raw), null, 2); } catch { return raw; }
        }
        return JSON.stringify(raw, null, 2);
      }
      if (this.format === 'base64') return btoa(String(raw));
      if (this.format === 'hex') return Array.from(String(raw)).map(c => c.charCodeAt(0).toString(16).padStart(2,'0')).join(' ');
      return String(raw);
    } catch {
      return String(this.responseBody);
    }
  }

  getFormatIcon(f: string): string {
    switch (f) {
      case 'json': return '{}';
      case 'xml': return '</>';
      case 'html': return '<>';
      case 'javascript': return 'JS';
      case 'raw': return '⎘';
      case 'hex': return '0x';
      case 'base64': return '64';
      default: return '';
    }
  }
}
