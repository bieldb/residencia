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

  isSending = false;
dropdownOpen = false;

toggleDropdown() {
  this.dropdownOpen = !this.dropdownOpen;
}

onSendClick() {
  if (!this.isSending) {
    this.isSending = true;
    // simula envio e depois volta
    setTimeout(() => this.isSending = false, 1000); //tempo que o 'cancel' aparece
  } else {
    // se já está enviando, clicou em Cancel
    this.isSending = false;
  }
}

onSendAndDownload() {
  this.dropdownOpen = false;
  console.log("Send and Download acionado!");
}

}
