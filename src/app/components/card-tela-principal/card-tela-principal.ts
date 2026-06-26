import { NgIcon, provideIcons } from '@ng-icons/core';
import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmInputGroup } from '@spartan-ng/helm/input-group';
import { SelectPreview } from '../input-registro/input-registro';
import { lucideArrowLeft, lucideArrowRight, lucideTrash2 } from '@ng-icons/lucide';
import { toast } from '@spartan-ng/brain/sonner';

@Component({
  selector: 'app-card-preview',
  imports: [
    HlmCardImports,
    HlmLabelImports,
    HlmInputImports,
    HlmButtonImports,
    HlmInputGroup,
    SelectPreview,
    NgIcon,
  ],
  template: `
    <hlm-card class="w-full mb-100">
      <hlm-card-header>
        <h3 hlmCardTitle>Cadastro Novo Contribuinte</h3>
        <p hlmCardDescription>Insira os dados para cadastro do novo contribuinte</p>

        <div hlmCardAction>
          <button hlmBtn variant="link">Ajuda</button>
        </div>
      </hlm-card-header>

      <div hlmCardContent class="">
        <form id="login-form">
          <div class="grid sm:grid-cols-1 gap-6 ">
            <div class="grid gap-2">
              <input type="email" id="email" placeholder="Natureza Jurídica" required hlmInput />
            </div>

            <div class="grid gap-2 grid-cols-3">
              <app-select-preview />
              <input type="password" id="password" hlmInput placeholder="Inscrição Municipal" />

              <input type="password" id="password" hlmInput placeholder="CNPJ Empresa" />
            </div>
            <div class="grid gap-2">
              <input type="email" id="email" placeholder="Nome" required hlmInput />
            </div>
            <div class="grid gap-2 grid-cols-2">
              <input type="password" id="password" hlmInput placeholder="CPF do Representante" />

              <input type="password" id="password" hlmInput placeholder="Nome do Representante" />
            </div>
          </div>
        </form>
      </div>

      <hlm-card-footer class="grid grid-cols-3 flex justify-between">
        <button hlmBtn variant="outline">
          <ng-icon name="lucideArrowLeft" hlm />
          Voltar
        </button>
        <div class="flex gap-4">
          <button hlmBtn variant="outline" (click)="showInfo()">
            <ng-icon name="lucideTrash2" hlm />
            Limpar
          </button>
          <button hlmBtn class="bg-green-600">
            Continuar
            <ng-icon name="lucideArrowRight" hlm />
          </button>
        </div>
      </hlm-card-footer>
    </hlm-card>
  `,
  providers: [provideIcons({ lucideArrowLeft, lucideTrash2, lucideArrowRight })],
})
export class CardPreview {
  showInfo() {
    toast.info('Dados Limpos');
  }
}
