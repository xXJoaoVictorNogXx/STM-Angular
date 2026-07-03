import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideChevronsUpDown, lucideLogOut } from '@ng-icons/lucide';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmMenubarImports } from '@spartan-ng/helm/menubar';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { HlmSidebarMenuButton } from '@spartan-ng/helm/sidebar';

@Component({
  selector: 'app-contrib-combobox',
  standalone: true,
  imports: [
    NgIconComponent,
    HlmAvatarImports,
    HlmSeparatorImports,
    HlmMenubarImports,
    HlmDropdownMenuImports,
    HlmSidebarMenuButton,
  ],
  templateUrl: './contrib-combobox.html',
  providers: [provideIcons({ lucideChevronsUpDown, lucideLogOut })],
})
export class contribComboboxComponent {
  userMock = {
    name: 'João_Nogueira',
    matricula: '611.355.863-06',
  };

  getInitials(name: string): string {
    if (!name) return '';
    const parts = name.split(' ');
    let initials = parts[0].substring(0, 1).toUpperCase();
    if (parts.length > 1) {
      initials += parts[parts.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }
}
