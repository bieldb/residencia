// Rapaziada cometi um erro aqui e coloquei esse arquivo dentro da pasta da sidebar e não sei como tira ele, ele precisa é estar na pasta app. Alguém dá um help depois por favor.
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private sidebarWidthSource = new BehaviorSubject<number>(280);
  public sidebarWidth$ = this.sidebarWidthSource.asObservable();

  private isSidebarOpenSource = new BehaviorSubject<boolean>(false);
  public isSidebarOpen$ = this.isSidebarOpenSource.asObservable();

  constructor() { }

  setSidebarWidth(width: number): void {
    this.sidebarWidthSource.next(width);
  }

  toggleSidebar(isOpen: boolean): void {
    this.isSidebarOpenSource.next(isOpen);
  }

  isSidebarOpen(): boolean {
    return this.isSidebarOpenSource.getValue();
  }
}
