import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {RouterLink} from '@angular/router';
import {Goal} from '../models/goal';
import {DatePipe, NgClass} from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import { KnobModule } from 'primeng/knob';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule, RouterLink, DividerModule, CheckboxModule, DatePipe, FormsModule, NgClass, KnobModule],
  selector: 'app-goal-details',
  standalone: true,
  template: `
    <div>
      <p-button label="Back" [link]="true" icon="pi pi-angle-left" routerLink=""/>
      <section class="goal-details-wrapper">
        <section class="goal-header">
          <span class="goal-title">{{ goal().title }}</span>
            <div class="kpi-styles">
              <div class="goal-deadline">
                <i class="pi pi-calendar-minus"></i>
                <span>{{ goal().deadline | date }}</span>
              </div>
              <p-knob [ngModel]="(finishedTasks/allTasks)*100" [valueTemplate]="kpiTasksString" size="80" readonly="true"/>
          </div>
        </section>
        <section class="goal-description">
          {{ goal().description }}
        </section>
        <section class="goal-tasks">
          <span class="goal-tasks-header text-2xl">Tasks</span>
          @for (task of goal().tasks; track task.id) {
            <div class="goal-task">
              <div class="goal-task-header">
                <p-checkbox
                  [(ngModel)]="task.completed"
                  [binary]="true"
                  inputId="binary"/>
                <span [ngClass]="task.completed ? 'completed-task': ''">{{ task.deadline | date }}</span>
                <p-divider layout="vertical"/>
                <span>{{ task.title }}</span>
              </div>
              <div class="goal-task-body">
                {{ task.description }}
              </div>
            </div>
          }
        </section>
      </section>
    </div>

  `
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
  allTasks: number = this.goal().tasks.length;
  finishedTasks: number = this.goal().tasks.filter(t => t.completed).length;
  kpiTasksString = `${this.finishedTasks}/${this.allTasks}`;
}
