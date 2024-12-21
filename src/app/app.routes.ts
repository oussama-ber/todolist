import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import {GoalDetailsComponent} from './goal/goal-details/goal-details.component';

export const routes: Routes = [
    { path : '', component: LandingComponent },
    { path : 'card/:id', component: GoalDetailsComponent },
];
