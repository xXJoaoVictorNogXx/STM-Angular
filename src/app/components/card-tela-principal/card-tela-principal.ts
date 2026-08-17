import { NgIcon, provideIcons } from '@ng-icons/core';
import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmInputGroup } from '@spartan-ng/helm/input-group';
import { SelectPreview } from '../input-registro/input-registro';
import {
  lucideArrowLeft,
  lucideArrowRight,
  lucideHelpCircle,
  lucideTrash2,
} from '@ng-icons/lucide';
import { toast } from '@spartan-ng/brain/sonner';

@Component({
  selector: 'app-card-preview',
  imports: [
    HlmCardImports,
    HlmLabelImports,
    HlmInputImports,
    HlmButtonImports,
    SelectPreview,
    NgIcon,
  ],
  templateUrl: `./card-tela-principal.html`,
  providers: [provideIcons({ lucideArrowLeft, lucideTrash2, lucideArrowRight, lucideHelpCircle })],
})
export class CardPreview {
  showToast() {
    toast('Campos Limpos!', {
      action: {
        label: 'Fechar',
        onClick: () => console.log('Undo'),
      },
      position: 'top-center',
    });
  }
  showInfo() {
    toast.info('Ajuda', {
      action: {
        label: 'Fechar',
        onClick: () => console.log('Undo'),
      },
      position: 'top-center',
    });
  }
}
