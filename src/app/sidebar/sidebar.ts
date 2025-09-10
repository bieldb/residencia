// src/app/sidebar/sidebar.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {
  // Dados de exemplo para as coleções
  collections = [
    {
      name: 'My Collection',
      isOpen: true, // Começa aberta por padrão
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

  // Função para abrir/fechar uma coleção
  toggleCollection(collection: any) {
    collection.isOpen = !collection.isOpen;
  }
}