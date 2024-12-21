import {ChangeDetectionStrategy, Component, input, signal} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {RouterLink} from '@angular/router';
import {Goal} from '../models/goal';
import {DatePipe} from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-goal-details',
  standalone: true,
  imports: [ButtonModule, RouterLink, DividerModule, CheckboxModule, DatePipe, FormsModule],
  template: `
    <div>
      <p-button label="Back" [link]="true" icon="pi pi-angle-left" routerLink="" />
      <section class="goal-header">
        <span class="goal-title">{{goal().title}}</span>
        <div class="goal-deadline">
          <i class="pi pi-calendar-minus"></i>
          <span>{{goal().deadline | date}}</span>
        </div>
      </section>
      <section class="goal-description">
        {{goal().description}}
      </section>
      <section class="goal-tasks">
        @for (task of goal().tasks; track task.id) {
          <div class="goal-task">
            <div class="goal-task-header">
              <p-checkbox
                [(ngModel)]="task.completed"
                [binary]="true"
                inputId="binary" />
              <span>{{task.deadline | date}}</span>
              <p-divider layout="vertical" />
              <span>{{task.title}}</span>
            </div>
            <div class="goal-task-body">
              {{task.description}}
            </div>

          </div>
        }
      </section>
    </div>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalDetailsComponent {
  goal = signal<Goal>(
    {
      id: 1,
      title: 'Goal 1',
      description: 'this is description for goal 1, we need to do this and that, blah blah blah.',
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
        {
          id: 2,
          title: 'Task 2',
          description: 'this is description for goal 1, we need to do this and that, blah blah blah.',
          createdDate: new Date(),
          deadline: new Date(),
          progress: 40,
          completed: true,
        },
      ]
  }
  );
}
