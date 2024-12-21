import {Component, ElementRef, inject, Signal} from '@angular/core';
import { LayoutService } from '../services/layout.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  template: `@if (isVisible()){
      <div class="layout-sidebar">
        <ul class="layout-menu">
          @for (item of model; track $index) {
            <li app-menuitem [routerLink]="item.routerLink" class="curso-pointer">{{item.label}}</li>
          }
        </ul>
      </div>
    }`,
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
  sidebarService = inject(LayoutService);
  isVisible : Signal<boolean> = this.sidebarService.sidebarIsOpened;
  isExpanded : Signal<boolean> = this.sidebarService.sidebarIsExpanded;
  model = [
    { label: 'Goals', icon: 'pi pi-fw pi-home', routerLink: ['/home'] },

  ]
}
