import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-response',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './response.html',
  styleUrls: ['./response.css']
})
export class ResponseComponent {
  format: string = 'json';  
  tab: string = 'body';
  @Input() responseMessage: any = '';

  // lista de formatos
  formats: string[] = ['json', 'xml', 'html', 'javascript', 'raw', 'hex', 'base64'];
  responseBody: any;
  responseCookies: any;
  responseHeaders: any;
}

