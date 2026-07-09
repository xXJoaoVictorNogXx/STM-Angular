import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEconomico } from './components/cadastro-economico/cadastro-economico';

export const routes: Routes = [
  {
    path: ' /cadastro-economico',
    component: CadastroEconomico,
  },
];
