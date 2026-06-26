import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRight } from '@ng-icons/lucide';
import { HlmCollapsibleImports } from '@spartan-ng/helm/collapsible';

import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { UserComboboxComponent } from '../user-combobox/user-combobox';
import { contribComboboxComponent } from '../contrib-combobox/contrib-combobox';
import { HlmSeparator } from '@spartan-ng/helm/separator';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';

@Component({
  selector: 'app-sidebar',
  imports: [
    HlmSidebarImports,
    HlmCollapsibleImports,
    HlmDropdownMenuImports,
    NgIcon,
    UserComboboxComponent,
    contribComboboxComponent,
    HlmSeparator,
  ],
  template: `
    <div hlmSidebarWrapper>
      <hlm-sidebar>
        <div hlmSidebarContent class="mt-10">
          <a routerLink="/home" hlmSidebarHeader class="items-center">
            <img src="logo.png" alt="" width="200px" />
          </a>
          <hlm-separator class="mr-2" />

          <div hlmSidebarGroup>
            <div hlmSidebarGroupContent>
              <ul hlmSidebarMenu>
                @for (menu of menuItems; track menu.title) {
                  <hlm-collapsible [expanded]="menu.defaultOpen" class="group/collapsible">
                    <li hlmSidebarMenuItem>
                      <button
                        hlmSidebarMenuButton
                        hlmCollapsibleTrigger
                        class="flex w-full items-center justify-between"
                      >
                        <span>{{ menu.title }}</span>
                        <ng-icon
                          name="lucideChevronRight"
                          class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
                          hlm
                        />
                      </button>

                      <hlm-collapsible-content>
                        <ul hlmSidebarMenuSub>
                          @for (subItem of menu.items; track subItem.title) {
                            @if (subItem.items) {
                              <hlm-collapsible class="group/subcollapsible">
                                <li hlmSidebarMenuSubItem>
                                  <button
                                    hlmBtn
                                    variant="outline"
                                    [hlmDropdownMenuTrigger]="menu"
                                    align="start"
                                  >
                                    {{ subItem.title }}
                                  </button>

                                  <hlm-collapsible-content>
                                    <ul class="ml-4 mt-1">
                                      @for (tela of subItem.items; track tela.title) {
                                        <li>
                                          <button
                                            hlmSidebarMenuSubButton
                                            class="w-full font-normal hover:text-foreground"
                                          >
                                            {{ tela.title }}
                                          </button>
                                        </li>
                                      }
                                    </ul>
                                  </hlm-collapsible-content>
                                </li>
                              </hlm-collapsible>
                            } @else {
                              <li hlmSidebarMenuSubItem>
                                <button hlmSidebarMenuSubButton class="w-full">
                                  <span>{{ subItem.title }}</span>
                                </button>
                              </li>
                            }
                          }
                        </ul>
                      </hlm-collapsible-content>
                    </li>
                  </hlm-collapsible>
                }
              </ul>
            </div>
          </div>
          <div hlmSidebarFooter class="mt-auto"><app-contrib-combobox /></div>
        </div>
      </hlm-sidebar>
      <main hlmSidebarInset>
        <header class="flex h-12 items-center justify-between px-4"></header>
      </main>
    </div>

    <ng-template #menu>
      <hlm-dropdown-menu>
        <hlm-dropdown-menu-group>
          <button hlmDropdownMenuItem>Team</button>
          <button hlmDropdownMenuItem [hlmDropdownMenuSubTrigger]="menu" side="right" align="start">
            Invite users
            <hlm-dropdown-menu-item-sub-indicator />
          </button>
          <button hlmDropdownMenuItem>
            New Team
            <hlm-dropdown-menu-shortcut>⌘+T</hlm-dropdown-menu-shortcut>
          </button>
        </hlm-dropdown-menu-group>
      </hlm-dropdown-menu>
    </ng-template>
  `,
  providers: [provideIcons({ lucideChevronRight })],
})
export default class AppSidebar {
  protected readonly menuItems = [
    {
      title: 'Alvará de Funcionamento',
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
      title: 'Arrecadação',
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
      title: 'Benefício Fiscal',
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
      title: 'Cadastro Econômico',
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
      title: 'Cadastro Imobiliário',
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
}
