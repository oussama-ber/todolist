import {Component, inject} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { LayoutService } from '../services/layout.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, NgClass],
  template: `
    <div class="layout-wrapper">
      <app-header />
      <div class="flex-styles">
        <app-sidebar />
        <div class="layout-main-container" [ngClass]="{'ml' : sidebarToggle()}">
          <div class="layout-main">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  layoutService= inject(LayoutService);
  sidebarToggle = this.layoutService.sidebarIsOpened;
}
