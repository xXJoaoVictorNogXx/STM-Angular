import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBriefcase, lucideHome, lucideSearch } from '@ng-icons/lucide';
import { HlmBreadcrumbImports } from '@spartan-ng/helm/breadcrumb';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';

@Component({
  selector: 'app-site-breadcrumb',
  imports: [
    HlmSidebarImports,
    HlmSeparatorImports,
    HlmBreadcrumbImports,
    HlmInputGroupImports,
    NgIcon,
  ],
  providers: [provideIcons({ lucideSearch, lucideHome, lucideBriefcase })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: `./navigation.html`,
})
export class SiteBreadcrumb {}
