import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../services/layout.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  sidebarService = inject(LayoutService);
  toggle = this.sidebarService.sidebarIsOpened;

  onSidebarToggle (){
    this.sidebarService.sidebarToggle();
  }
}
