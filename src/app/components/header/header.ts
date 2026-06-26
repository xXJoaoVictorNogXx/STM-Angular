import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';
import { HlmBreadcrumbImports } from '@spartan-ng/helm/breadcrumb';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { UserComboboxComponent } from '../user-combobox/user-combobox';

@Component({
  selector: 'app-site-header-sticky',
  imports: [
    HlmSidebarImports,
    HlmSeparatorImports,
    HlmBreadcrumbImports,
    HlmInputGroupImports,
    NgIcon,
    UserComboboxComponent,
  ],
  providers: [provideIcons({ lucideSearch })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div class="flex h-(--header-height) w-full items-center gap-2 px-4 p-2">
        <div class="flex  ">
          <button hlmSidebarTrigger></button>
          <hlm-separator orientation="vertical" class="mr-2" />
          <div hlmInputGroup class="w-full sm:ml-auto sm:w-auto">
            <input
              hlmInputGroupInput
              placeholder="Buscar inscrição, CNPJ do contribuinte"
              class="w-full"
            />
            <div hlmInputGroupAddon>
              <ng-icon name="lucideSearch" />
            </div>
          </div>
        </div>
        <div class="w-full sm:ml-auto sm:w-auto border rounded-lg  px-2 py-1 text-sm font-medium ">
          <app-user-combobox />
        </div>
      </div>
    </header>
  `,
})
export class SiteHeader {}
