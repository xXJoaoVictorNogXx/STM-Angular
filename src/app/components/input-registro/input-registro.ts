import { Component } from '@angular/core';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import {
  HlmSelect,
  HlmSelectValue,
  HlmSelectContent,
  HlmSelectLabel,
  HlmSelectItem,
  HlmSelectTrigger,
  HlmSelectGroup,
} from '../ui/select/src';

@Component({
  selector: 'app-select-preview',
  imports: [HlmSelectImports],
  template: `
    <hlm-select [itemToString]="itemToString">
      <hlm-select-trigger class="w-56">
        <hlm-select-value placeholder="Tipo de Registro" />
      </hlm-select-trigger>
      <hlm-select-content *hlmSelectPortal>
        <hlm-select-group>
          @for (item of items; track item.value) {
            <hlm-select-item [value]="item.value">{{ item.label }}</hlm-select-item>
          }
        </hlm-select-group>
      </hlm-select-content>
    </hlm-select>
  `,
})
export class SelectPreview {
  public readonly items = [
    { label: 'MEI', value: 'apple' },
    { label: 'Empresa', value: 'banana' },
    { label: 'Autônomo', value: 'blueberry' },
  ];

  public readonly itemToString = (value: string) =>
    this.items.find((item) => item.value === value)?.label || '';
}
