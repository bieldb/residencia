import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-config',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './request-config.html',
  styleUrls: ['./request-config.css']
})
export class RequestConfigComponent {
  @Input() requestMethod = 'GET';
  @Input() requestUrl = '';

  @Output() requestMethodChange = new EventEmitter<string>();
  @Output() requestUrlChange = new EventEmitter<string>();
  @Output() send = new EventEmitter<void>();

  onSend() {
    this.send.emit();
  }
}
