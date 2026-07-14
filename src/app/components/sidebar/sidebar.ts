import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';

import { RouterLink } from '@angular/router';

import {
  lucideBadgeCheck,
  lucideBell,
  lucideBookText,
  lucideBriefcase,
  lucideBuilding2,
  lucideChevronRight,
  lucideChevronsUpDown,
  lucideClipboardList,
  lucideCreditCard,
  lucideDatabase,
  lucideFileSignature,
  lucideFileText,
  lucideGavel,
  lucideLandmark,
  lucideLayers,
  lucideLock,
  lucideReceipt,
  lucideScrollText,
  lucideSheet,
  lucideWallet,
} from '@ng-icons/lucide';

import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmSeparator } from '@spartan-ng/helm/separator';

import { contribComboboxComponent } from '../contrib-combobox/contrib-combobox';
import { CadastroNovoContrib } from '../../pages/cadastro-novo-contrib/cadastro-novo-contrib';

@Component({
  selector: 'app-sidebar',
  standalone: true,

  imports: [
    HlmSidebarImports,
    HlmDropdownMenuImports,
    NgIcon,
    contribComboboxComponent,
    HlmSeparator,
    RouterLink,
  ],
  templateUrl: './sidebar.html',
  providers: [
    provideIcons({
      lucideChevronRight,
      lucideChevronsUpDown,
      lucideFileText,
      lucideWallet,
      lucideBadgeCheck,
      lucideBriefcase,
      lucideBuilding2,
      lucideFileSignature,
      lucideGavel,
      lucideLock,
      lucideLayers,
      lucideScrollText,
      lucideClipboardList,
      lucideReceipt,
      lucideLandmark,
      lucideBell,
      lucideCreditCard,
      lucideBookText,
      lucideDatabase,
      lucideSheet,
    }),
  ],
})
export default class AppSidebar {
  protected readonly menuItems = [
    {
      title: 'Alvará de Funcionamento',
      icon: 'lucideFileText',
      defaultOpen: false,
      items: [
        {
          title: 'Contribuinte',
          items: [{ title: 'Consulta de Alvarás', route: '/cadastro-novo' }],
        },
        {
          title: 'Prefeitura',
          items: [
            {
              title: 'Solicitação de Alvará de Funcionamente e Localização',
              route: '/cadastro-novo',
            },
            { title: 'Consulta de Alvarás', route: '/consulta' },
            { title: 'Liberação Manual de Alvará', route: '/consulta' },
            { title: 'Verificação de Autenticidade de Alvará', route: '/consulta' },
            { title: 'Solicitação de Alvará Provisório', route: '/consulta' },
            { title: 'Solicitação de Alvará Proporcional', route: '/consulta' },
            { title: 'Quantitativo Alvará', route: '/consulta' },
            { title: 'Simulação de Lançamento de Alvará', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Parâmetros do Alvará de Funcionamento', route: '/cadastro-novo' },
            { title: 'Controle de Tipos de Alvará', route: '/consulta' },
            { title: 'Clonagem de Atividade Licenciadas', route: '/consulta' },
            { title: 'Atividade X Atividade Licenciada', route: '/consulta' },
            { title: 'Exceção Limite Alvará', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'Arrecadação',
      icon: 'lucideWallet',
      defaultOpen: false,
      items: [
        {
          title: 'Prefeitura',
          items: [
            { title: 'Controle de Arquivos de Pagamentos', route: '/cadastro-novo' },
            { title: 'Consulta de Processamento de Arquivos ', route: '/consulta' },
            { title: 'Relatório de Guias Liberadas Não Baixadas', route: '/consulta' },
            { title: 'Consulta de Arrecadação x Receita', route: '/consulta' },
            { title: 'Classificação Contábil', route: '/consulta' },
            { title: 'Consulta de Arrecadação X Receita por Contribuinte', route: '/consulta' },
            { title: 'Posição Diária', route: '/consulta' },
            { title: 'Consulta de Devedores', route: '/consulta' },
            { title: 'Previsão de Arrecadação por Período', route: '/consulta' },
            { title: 'Estatística de Arrecadação', route: '/consulta' },
            { title: 'Arrecadação de Taxas', route: '/consulta' },
            { title: 'Manutenção do Plano de Contas', route: '/consulta' },
            { title: 'Consulta Classificação Receita', route: '/consulta' },
            { title: 'Previsão de Arrecadação Consolidada', route: '/consulta' },
            { title: 'Receita Orçada x Arrecadada', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },

        {
          title: 'Configurações',
          items: [{ title: 'Controle de Convênios', route: '/cadastro-novo' }],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'Benefício Fiscal',
      icon: 'lucideBadgeCheck',
      defaultOpen: false,
      items: [
        {
          title: 'Cadastro',
          items: [
            { title: 'Controle de Benefícios Fiscais/Imunidade', route: '/cadastro-novo' },
            { title: 'Concessão Benefício Contribuinte', route: '/consulta' },
            { title: 'Revogação de Benefícios', route: '/consulta' },
          ],
        },
        {
          title: 'Prefeitura',
          items: [
            { title: 'Consulta Benefício Fiscal', route: '/cadastro-novo' },
            { title: 'Relatório de Renúncia Fiscal', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Configurações',
          items: [{ title: 'Parâmetros', route: '/cadastro-novo' }],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'Cadastro Econômico',
      icon: 'lucideBriefcase',
      route: '/cadastro-economico',
      defaultOpen: false,
      items: [
        {
          title: 'Prefeitura',
          items: [
            {
              title: 'Cadastro Novo Contribuinte',
              route: '/cadastro-novo-contribuinte',
            },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Contribuinte',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'Cadastro Imobiliário',
      icon: 'lucideBuilding2',
      defaultOpen: false,
      items: [
        {
          title: 'Imóvel',
          items: [
            { title: 'Cadastro Novo Contribuinte', route: '/cadastro-novo' },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Setorização',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Prefeitura',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'Certidões',
      icon: 'lucideFileSignature',
      defaultOpen: false,
      items: [
        {
          title: 'Certidão',
          items: [
            { title: 'Cadastro Novo Contribuinte', route: '/cadastro-novo' },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Configuração',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Emissão Certidão Baixa',
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'Contencioso Administrativo',
      icon: 'lucideGavel',
      defaultOpen: false,
      items: [
        {
          title: 'Prefeitura',
          items: [
            { title: 'Cadastro Novo Contribuinte', route: '/cadastro-novo' },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Contribuinte',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'Controle de Acesso',
      icon: 'lucideLock,',
      defaultOpen: false,
      items: [
        {
          title: 'Prefeitura',
          items: [
            { title: 'Cadastro Novo Contribuinte', route: '/cadastro-novo' },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Contribuinte',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'DESIF',
      icon: 'lucideLayers,',
      defaultOpen: false,
      items: [
        {
          title: 'Prefeitura',
          items: [
            { title: 'Cadastro Novo Contribuinte', route: '/cadastro-novo' },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Contribuinte',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'Dívida Ativa',
      icon: 'lucideScrollText,',
      defaultOpen: false,
      items: [
        {
          title: 'Prefeitura',
          items: [
            { title: 'Cadastro Novo Contribuinte', route: '/cadastro-novo' },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Contribuinte',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'Fiscalização',
      icon: 'lucideClipboardList,',
      defaultOpen: false,
      items: [
        {
          title: 'Prefeitura',
          items: [
            { title: 'Cadastro Novo Contribuinte', route: '/cadastro-novo' },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Contribuinte',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'ITBI',
      icon: 'lucideReceipt,',
      defaultOpen: false,
      items: [
        {
          title: 'Prefeitura',
          items: [
            { title: 'Cadastro Novo Contribuinte', route: '/cadastro-novo' },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Contribuinte',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'Lançamento de Tributos',
      icon: 'lucideLandmark,',
      defaultOpen: false,
      items: [
        {
          title: 'Prefeitura',
          items: [
            { title: 'Cadastro Novo Contribuinte', route: '/cadastro-novo' },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Contribuinte',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'Nota Fiscal Eletrônica',
      icon: 'lucideFileText,',
      defaultOpen: false,
      items: [
        {
          title: 'Prefeitura',
          items: [
            { title: 'Cadastro Novo Contribuinte', route: '/cadastro-novo' },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Contribuinte',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'Notificação',
      icon: 'lucideBell,',
      defaultOpen: false,
      items: [
        {
          title: 'Prefeitura',
          items: [
            { title: 'Cadastro Novo Contribuinte', route: '/cadastro-novo' },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Contribuinte',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'Parcelamento de Débitos',
      icon: 'lucideCreditCard,',
      defaultOpen: false,
      items: [
        {
          title: 'Prefeitura',
          items: [
            { title: 'Cadastro Novo Contribuinte', route: '/cadastro-novo' },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Contribuinte',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'Processo Administrativo',
      icon: 'lucideBookText',
      defaultOpen: false,
      items: [
        {
          title: 'Prefeitura',
          items: [
            { title: 'Cadastro Novo Contribuinte', route: '/cadastro-novo' },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Contribuinte',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'REDESIM',
      icon: 'lucideDatabase',
      defaultOpen: false,
      items: [
        {
          title: 'Prefeitura',
          items: [
            { title: 'Cadastro Novo Contribuinte', route: '/cadastro-novo' },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Contribuinte',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
    {
      title: 'Simples Nacional',
      icon: 'lucideSheet',
      defaultOpen: false,
      items: [
        {
          title: 'Prefeitura',
          items: [
            { title: 'Cadastro Novo Contribuinte', route: '/cadastro-novo' },
            { title: 'Consulta de Contribuinte', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
        {
          title: 'Contribuinte',
          items: [
            { title: 'Consulta Dados Cadastrais', route: '/cadastro-novo' },
            { title: 'Solicitação de Benefício', route: '/consulta' },
          ],
        },
        {
          title: 'Configurações',
          items: [
            { title: 'Tabelas Gerais', route: '/cadastro-novo' },
            { title: 'Natureza Jurídica', route: '/consulta' },
          ],
          route: '/outra-opcao',
        },
      ],
    },
  ];
  activeModule = this.menuItems[0];

  setActiveModule(module: any) {
    this.activeModule = module;
  }
}
