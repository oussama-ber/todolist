import { DatePipe } from '@angular/common';
import {Component, inject} from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import {GoalCardComponent} from '../goal-card/goal-card.component';
import {Goal} from '../models/goal';
import {ConfirmationDialogComponent} from '../../shared/components/confirmation-dialog/confirmation-dialog.component';
import {ConfirmationService} from '../../shared/services/confirmation.service';

@Component({
  selector: 'app-goals-list',
  standalone: true,
  imports: [ProgressBarModule, GoalCardComponent, ConfirmationDialogComponent],
  template: `
    <div class="text-xl">Goals</div>
    @for (goal of goals; track goal.id) {
      <app-goal-card [goal]="goal" />
    }
    @if (confirmationIsVisible()){
      <app-confirmation-dialog (onConfirm)="onDeleteConfirmation($event)" (onCancel)="onCancel()" />
    }
  `,
  styleUrl: './goals-list.component.scss'
})
export class GoalsListComponent {
  private readonly confirmationService = inject(ConfirmationService);
  readonly confirmationIsVisible = this.confirmationService.confirmationModelIsOpened;


  goals: Goal[] = [
    {
      id: 1,
      title: 'goal 1',
      description: '',
      createdDate: new Date(),
      deadline: new Date(),
      progress: 30,
      tasks: [
        {
          id: 1,
          title: 'Task 1',
          description: 'this is description for goal 1, we need to do this and that, blah blah blah.',
          createdDate: new Date(),
          deadline: new Date(),
          progress: 30,
          completed: false,
        },
      ]
    },
    {
      id: 2,
      title: 'goal 1',
      description: '',
      createdDate: new Date(),
      deadline: new Date(),
      progress: 30,
      tasks: [
        {
          id: 2,
          title: 'Task 1',
          description: 'this is description for goal 1, we need to do this and that, blah blah blah.',
          createdDate: new Date(),
          deadline: new Date(),
          progress: 30,
          completed: false,
        },
      ]
    },
  ];

  onDeleteConfirmation(goalId: number) {
    this.confirmationService.confirmationModelOff();
    this.goals = this.goals.filter(goal => goal.id !== goalId);
  }

  onCancel() {
    this.confirmationService.confirmationModelOff();
  }

}
