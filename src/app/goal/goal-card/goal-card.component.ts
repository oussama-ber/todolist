import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ProgressBarModule} from 'primeng/progressbar';
import {Goal} from '../models/goal';
import {RouterLink} from '@angular/router';
import {ConfirmationService} from '../../shared/services/confirmation.service';
import {ConfirmationDialogComponent} from '../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-goal-card',
  standalone: true,
  imports: [
    DatePipe,
    ProgressBarModule,
    RouterLink,
    ConfirmationDialogComponent
  ],
  template: `
    <div class="card-wrapper flex flex-col gap-1r">
      <div class="card-header">
        <span>{{ goal().title }} (5)</span>
        <div class="icons">
          <i class="pi pi-pencil cursor-pointer" [routerLink]="['card',goal().id]"></i>
          <i class="pi pi-trash cursor-pointer" style="color: red" (click)="onOpenDeleteConfirmation(goal().id)"></i>
        </div>
      </div>
      <div class="card-content">
        {{goal().description}}
        this is a description for a task, we have to do this and that in order to complete this tasks
      </div>
      <div class="card-footer">
        <div class="date-styles">
          <i class="pi pi-calendar" style="color: #708090"></i>
          <span>{{goal().deadline | date}}</span>
        </div>
        <p-progressBar [value]="goal().progress" class="progressbar"/>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalCardComponent {
  private readonly confirmationService = inject(ConfirmationService);
  goal = input.required<Goal>();

  onOpenDeleteConfirmation(goalId: number) {
    this.confirmationService.confirmationModelOn(goalId);
  }
}
