import { Component } from '@angular/core';
import { SiteHeader } from '../header/header';
import AppSidebar from '../sidebar/sidebar';
import { SiteBreadcrumb } from '../navigation/navigation';
import { CardPreview } from '../card-tela-principal/card-tela-principal';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-cadastro-economico',
  imports: [SiteBreadcrumb, CardPreview],
  templateUrl: './cadastro-economico.html',
  styleUrl: './cadastro-economico.css',
})
export class CadastroEconomico {}
