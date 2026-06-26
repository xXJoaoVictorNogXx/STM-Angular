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
  template: `
    <button
      hlmSidebarMenuButton
      size="lg"
      class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      <hlm-avatar class="h-8 w-8 shrink-0 rounded-lg">
        <img src="" alt="Avatar" hlmAvatarImage />
        <span hlmAvatarFallback class="rounded-lg text-xs font-semibold">
          {{ getInitials(userMock.name) }}
        </span>
      </hlm-avatar>

      <div class="grid flex-1 overflow-hidden text-left text-sm leading-tight">
        <span class="truncate font-semibold">{{ userMock.name }}</span>
        <span class="truncate text-xs text-muted-foreground">
          {{ userMock.email }}
        </span>
      </div>

      <ng-icon name="lucideChevronsUpDown" class="ml-auto size-4 shrink-0" />
    </button>

    <ng-template #userMenu>
      <hlm-dropdown-menu class="w-56 rounded-lg" side="top" align="end" [sideOffset]="4">
        <div class="flex items-center justify-start gap-2 p-2">
          <div class="flex flex-col space-y-1 leading-none">
            <p class="text-sm font-medium">{{ userMock.name }}</p>
            <p class="w-50 truncate text-xs text-muted-foreground">
              {{ userMock.email }}
            </p>
          </div>
        </div>

        <hlm-separator />

        <button hlmMenuItem class="cursor-pointer text-destructive focus:text-destructive">
          <ng-icon name="lucideLogOut" class="mr-2 h-4 w-4" />
          <span>Sair da conta</span>
        </button>
      </hlm-dropdown-menu>
    </ng-template>
  `,
  providers: [provideIcons({ lucideChevronsUpDown, lucideLogOut })],
})
export class contribComboboxComponent {
  userMock = {
    name: 'João_Nogueira',
    email: '',
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
