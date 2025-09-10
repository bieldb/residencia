// src/app/postman-clone/postman-clone.ts
import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

@Component({
  selector: 'app-postman-clone',
  standalone: true,
  // Adicione CommonModule e FormsModule aqui
  imports: [CommonModule, FormsModule], 
  templateUrl: './postman-clone.html',
  styleUrls: ['./postman-clone.css']
})
export class PostmanClone implements AfterViewInit {
  // Variáveis que antes estavam no $scope agora são propriedades da classe
  activeTab = 'params';
  requestMethod = 'GET';
  requestUrl = '';

  @ViewChild('paramMenu') paramMenu!: ElementRef;
  isParamMenuOpen = false;
  showParamValue = true;
  showParamDescription = true;

  @ViewChild('headerMenu') headerMenu!: ElementRef;
  isHeaderMenuOpen = false;
  showHeaderValue = true;
  showHeaderDescription = true;
  
  @ViewChild('formDataMenu') formDataMenu!: ElementRef;
  isFormDataMenuOpen = false;
  showFormDataValue = true;
  showFormDataDescription = true;
  // Estrutura para a nova linha e para a lista de linhas
  newFormDataRow = { key: '', value: '', description: '', type: 'Text' }; // 'type' é a novidade
  formData: any[] = [];

  bodyTypes: string[] = ['none', 'form-data', 'x-www-form-urlencoded', 'raw']; // Opções disponíveis
  requestBody: string = ''; // Armazena o conteúdo do textarea

  @ViewChild('urlencodedMenu') urlencodedMenu!: ElementRef;
  isUrlencodedMenuOpen = false;
  showUrlencodedValue = true;
  showUrlencodedDescription = true;
  // Estrutura para a nova linha e para a lista de linhas
  newUrlencodedRow = { key: '', value: '', description: '' };
  urlencodedData: any[] = [];
  
@HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    // Helper para verificar se o clique foi no botão de toggle
    const isToggleButton = (elem: HTMLElement) => elem.closest('.button-icon');

    if (this.isParamMenuOpen && !this.paramMenu.nativeElement.contains(target) && !isToggleButton(target)) {
      this.isParamMenuOpen = false;
    }
    if (this.isHeaderMenuOpen && !this.headerMenu.nativeElement.contains(target) && !isToggleButton(target)) {
      this.isHeaderMenuOpen = false;
    }
    if (this.isFormDataMenuOpen && !this.formDataMenu.nativeElement.contains(target) && !isToggleButton(target)) {
      this.isFormDataMenuOpen = false;
    }
    // ADIÇÃO AO HOSTLISTENER
    if (this.isUrlencodedMenuOpen && !this.urlencodedMenu.nativeElement.contains(target) && !isToggleButton(target)) {
      this.isUrlencodedMenuOpen = false;
    }
  }
  newParam = { key: '', value: '', description: '' };
  params: any[] = [];
  newHeader = { key: '', value: '', description: '' };
  headers: any[] = [];
  authType = 'no-auth';
    authTypes = [
    { value: 'no-auth', label: 'No Auth' },
    { value: 'bearer', label: 'Bearer Token' },
    { value: 'basic', label: 'Basic Auth' }
  ];
  bodyType = 'none';
  responseMessage = 'Enter the URL and click Send to get a response';
  tabIndicatorStyle: { [key: string]: string } = {};

  
  // Função para calcular a posição do indicador
  calculateTabIndicator(targetElement: HTMLElement) {
    if (targetElement) {
      this.tabIndicatorStyle = {
        width: targetElement.offsetWidth + 'px',
        left: targetElement.offsetLeft + 'px'
      };
    }
  }

  // Equivalente ao ngAfterViewInit, para rodar código depois que a view é renderizada
  ngAfterViewInit() {
    // Inicializa o indicador na primeira aba
    setTimeout(() => {
      const initialActiveTab = document.querySelector('.tab.active') as HTMLElement;
      this.calculateTabIndicator(initialActiveTab);
    }, 50);
  }
  
  // Funções que antes estavam no $scope agora são métodos da classe
  setActiveTab(tab: string, event: MouseEvent) {
    this.activeTab = tab;
    // Passamos o elemento clicado para a função
    this.calculateTabIndicator(event.currentTarget as HTMLElement);
  }
  toggleParamMenu(event: MouseEvent) {
    event.stopPropagation(); // Impede que o clique feche o menu imediatamente
    this.isParamMenuOpen = !this.isParamMenuOpen;
  }
  toggleHeaderMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isHeaderMenuOpen = !this.isHeaderMenuOpen;
  }
  toggleFormDataMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isFormDataMenuOpen = !this.isFormDataMenuOpen;
  }
    toggleUrlencodedMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isUrlencodedMenuOpen = !this.isUrlencodedMenuOpen;
  }

  addUrlencodedRow() {
    if (this.newUrlencodedRow.key) {
      this.urlencodedData.push({ ...this.newUrlencodedRow });
      this.newUrlencodedRow = { key: '', value: '', description: '' };
    }
  }

  removeUrlencodedRow(index: number) {
    this.urlencodedData.splice(index, 1);
  }

  addFormDataRow() {
    if (this.newFormDataRow.key) {
      this.formData.push({ ...this.newFormDataRow });
      this.newFormDataRow = { key: '', value: '', description: '', type: 'Text' };
    }
  }

  removeFormDataRow(index: number) {
    this.formData.splice(index, 1);
  }
  onFileSelected(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.formData[index].value = input.files[0].name;
    }
  }
  addParam() {
    if (this.newParam.key) {
      this.params.push({ ...this.newParam }); // Usa spread para criar uma cópia
      this.newParam = { key: '', value: '', description: '' };
    }
  }
  
  removeParam(index: number) {
    this.params.splice(index, 1);
  }
  
  addHeader() {
    if (this.newHeader.key) {
      this.headers.push({ ...this.newHeader });
      this.newHeader = { key: '', value: '', description: '' };
    }
  }
  
  removeHeader(index: number) {
    this.headers.splice(index, 1);
  }
  
  sendRequest() {
    if (!this.requestUrl) {
      this.responseMessage = 'Please enter a URL first';
      return;
    }
    
    this.responseMessage = `Sending ${this.requestMethod} request to: ${this.requestUrl}\n\n`;
    this.responseMessage += 'Simulating request... (this is a frontend demo)\n\n';
    this.responseMessage += 'Status: 200 OK\n';
    this.responseMessage += 'Time: 150ms\n';
    this.responseMessage += 'Size: 1.2KB\n\n';
    this.responseMessage += '{\n  "message": "This is a simulated response",\n  "status": "success"\n}';
  }
}