import { Component } from '@angular/core';
import { NavigationButtons } from '../../components/navigation-buttons/navigation-buttons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideBadgeCheck,
  lucideBell,
  lucideBookText,
  lucideBriefcase,
  lucideBuilding2,
  lucideChevronRight,
  lucideChevronsUpDown,
  lucideClipboardList,
  lucideCreditCard,
  lucideDatabase,
  lucideFileSignature,
  lucideFileText,
  lucideGavel,
  lucideLandmark,
  lucideLayers,
  lucideLock,
  lucideReceipt,
  lucideScrollText,
  lucideSheet,
  lucideWallet,
} from '@ng-icons/lucide';

@Component({
  selector: 'app-home',
  imports: [NavigationButtons],
  templateUrl: './home.html',
  styleUrl: './home.css',
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
export class Home {
  nomeUsuario = 'João Nogueira';
}
