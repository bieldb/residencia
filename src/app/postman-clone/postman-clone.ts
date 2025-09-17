import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../components/header/header';
import { RequestConfigComponent } from '../components/request-config/request-config';
import { RequestTable } from '../components/request-table/request-table';
import { ResponseComponent } from '../components/response/response';
import { TabNavigationComponent } from '../components/tab-navigation/tab-navigation';

@Component({
  selector: 'app-postman-clone',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    RequestConfigComponent,
    RequestTable,
    ResponseComponent,
    TabNavigationComponent
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

  tabs = [
  { id: '1', title: 'Get data' },
  { id: '2', title: 'Post data' }
];

activeTab = 0;

onTabSelected(index: number) {
  this.activeTab = index;
  // aqui você troca request/response de acordo com a aba
}

onTabClosed(index: number) {
  this.tabs.splice(index, 1);
  if (this.activeTab >= this.tabs.length) {
    this.activeTab = this.tabs.length - 1;
  }
}

}
