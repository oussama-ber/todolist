import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GoalsListComponent } from '../goal/goals-list/goals-list.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ButtonModule, GoalsListComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
