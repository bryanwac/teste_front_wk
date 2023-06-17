import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent implements OnInit {
  sidebarVisible = false;
  selectedItem: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

  selectItem(item: string): void {
    this.selectedItem = item;
    this.sidebarVisible = !this.sidebarVisible;
  }
}