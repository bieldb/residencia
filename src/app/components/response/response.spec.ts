import { Component } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.html',
  styleUrls: ['./response.css']
})
export class ResponseComponent {
  responseBody: any = '';

  // Lista de formatos
  formats = ['json','xml','html','javascript','raw','hex','base64'];

  // Formato selecionado (valor inicial)
  format: string = 'json';   // <-- adicionar isto

  // Aba selecionada
  tab: string = 'body';
}
