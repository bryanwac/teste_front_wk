import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent implements OnInit {
  sidebarVisible = false;
  selectedItem: string | undefined;
  shouldShowNavigation = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.shouldShowNavigation = !['/login', '/registro', ''].includes(event.urlAfterRedirects);
      }
    });
  }

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

  selectItem(item: string): void {
    this.selectedItem = item;
    this.sidebarVisible = !this.sidebarVisible;
  }
}