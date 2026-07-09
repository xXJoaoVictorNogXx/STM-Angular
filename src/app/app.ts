import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeader } from './components/header/header';
import AppSidebar from './components/sidebar/sidebar';
import { CardPreview } from './components/card-tela-principal/card-tela-principal';
import { SiteBreadcrumb } from './components/navigation/navigation';
import { Footer } from './components/footer/footer';
import { HlmToaster } from '@spartan-ng/helm/sonner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HlmToaster, SiteHeader, Footer, AppSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ang');
}
