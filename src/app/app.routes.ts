import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEconomico } from './pages/cadastro-economico/cadastro-economico';
import { CadastroNovoContrib } from './pages/cadastro-novo-contrib/cadastro-novo-contrib';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Início',
  },
  {
    path: 'cadastro-economico',
    component: CadastroEconomico,
    title: 'Cadastro Econômico',
  },
  {
    path: 'cadastro-economico/cadastro-novo-contribuinte',
    component: CadastroNovoContrib,
    title: 'Cadastro Novo Contribuinte',
  },
];
