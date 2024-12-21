import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [NgClass],
  template: `<div class="label-wrapper" [ngClass]="varriant" >
{{label}}
  </div>`,
  styleUrl: './label.component.scss'
})
export class LabelComponent {
  @Input() label: string = 'label';
  @Input() varriant!: 'error' | 'warnning' | 'info' | 'success';
}
