import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeader } from './components/header/header';
import AppSidebar from './components/sidebar/sidebar';
import { CardPreview } from './components/card-tela-principal/card-tela-principal';
import { SiteBreadcrumb } from './components/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, AppSidebar, CardPreview, SiteBreadcrumb],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ang');
}
