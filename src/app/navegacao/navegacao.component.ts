import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAlertasComponent } from '../util/modal-module/modal-alertas/modal-alertas.component';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent implements OnInit {
  
  sidebarVisible = false;
  selectedItem: string | undefined;
  shouldShowNavigation = true;
  isMobileViewport: boolean;

  constructor(
    private router: Router,
    private tokenService: TokenStorageService,
    private dialog: MatDialog,
    ) { }

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

  logout(): void {
    const data = {
      name: 'Alerta de logout',
      mensagem: 'Você será redirecionado para a tela de login.'
    }
    this.dialog.open(ModalAlertasComponent, { data })
    .afterClosed()
    .subscribe((_) => {
      this.tokenService.signOut();
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.isMobileViewport = this.checkIfMobileViewport();
  }

  checkIfMobileViewport(): boolean {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width < 768; // Ajuste o valor conforme necessário
  }
}