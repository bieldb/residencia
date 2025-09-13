import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-response',
  standalone: true,
  templateUrl: './response.html',
  styleUrls: ['./response.css']
})
export class ResponseComponent {
  @Input() responseMessage = '';
}
