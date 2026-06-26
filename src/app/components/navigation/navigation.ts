import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';
import { HlmBreadcrumbImports } from '@spartan-ng/helm/breadcrumb';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { UserComboboxComponent } from '../user-combobox/user-combobox';

@Component({
  selector: 'app-site-breadcrumb',
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
    <header class="bg-background sticky top-0 z-50 flex w-full items-center">
      <nav hlmBreadcrumb class="hidden sm:block">
        <ol hlmBreadcrumbList>
          <li hlmBreadcrumbItem>
            <a hlmBreadcrumbLink link="/">Cadastro Econômico</a>
          </li>
          <li hlmBreadcrumbSeparator></li>
          <li hlmBreadcrumbItem>
            <a hlmBreadcrumbPage>Cadastro</a>
          </li>
          <li hlmBreadcrumbSeparator></li>

          <li hlmBreadcrumbItem>
            <a hlmBreadcrumbPage>Cadastro Novo Contribuinte</a>
          </li>
        </ol>
      </nav>
    </header>
  `,
})
export class SiteBreadcrumb {}
