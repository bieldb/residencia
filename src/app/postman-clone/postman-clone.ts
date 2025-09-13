import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../components/header/header';
import { RequestConfigComponent } from '../components/request-config/request-config';
import { RequestTable } from '../components/request-table/request-table';
import { ResponseComponent } from '../components/response/response';

@Component({
  selector: 'app-postman-clone',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    RequestConfigComponent,
    RequestTable,
    ResponseComponent
],
  templateUrl: './postman-clone.html',
  styleUrls: ['./postman-clone.css']
})
export class PostmanCloneComponent {
  requestMethod = 'GET';
  requestUrl = '';
  responseMessage = 'Enter the URL and click Send to get a response';

  sendRequest() {
    if (!this.requestUrl) {
      this.responseMessage = 'Please enter a URL first';
      return;
    }
    this.responseMessage = `Sending ${this.requestMethod} request to: ${this.requestUrl}\n\nSimulated Response ✅`;
  }

  onSave() {
    console.log('Saved request!');
  }
}
