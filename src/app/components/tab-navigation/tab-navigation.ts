import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Tab {
  id: string;
  title: string;
}

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.html',
  styleUrls: ['./tab-navigation.css'],
  imports: [CommonModule],
})
export class TabNavigationComponent {
  @Input() tabs: Tab[] = [];
  @Input() activeIndex = 0;

  @Output() tabSelected = new EventEmitter<number>();
  @Output() tabClosed = new EventEmitter<number>();

  selectTab(index: number) {
    this.tabSelected.emit(index);
  }

  closeTab(index: number, event: MouseEvent) {
    event.stopPropagation(); // impede que o clique feche + selecione
    this.tabClosed.emit(index);
  }
}
