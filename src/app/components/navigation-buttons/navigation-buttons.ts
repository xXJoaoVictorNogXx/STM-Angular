import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
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
} from '@ng-icons/lucide';

@Component({
  selector: 'app-navigation-buttons',
  imports: [RouterLink, NgIcon],
  templateUrl: './navigation-buttons.html',
  styleUrl: './navigation-buttons.css',
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
export class NavigationButtons {
  protected readonly navigationItems = [
    { title: 'Alvará de Funcionamento', icon: 'lucideFileText' },
    { title: 'Arrecadação', icon: 'lucideWallet' },
    { title: 'Benefício Fiscal', icon: 'lucideBadgeCheck' },
    {
      title: 'Cadastro Econômico',
      icon: 'lucideBriefcase',
      link: '/cadastro-economico',
    },
  ];
}
