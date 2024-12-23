import {ChangeDetectionStrategy, Component, EventEmitter, inject, input, Input, model, Output} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {ConfirmationService} from '../../services/confirmation.service';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  template: `
    <p-dialog header="Header" [modal]="true" [closeOnEscape]="true" [(visible)]="isVisible" [style]="{ width: '25rem' }">
      <ng-template pTemplate="header">
        <i class="pi pi-exclamation-circle" style="color: red"></i>
        <span class="font-bold white-space-nowrap">Confimation dialog</span>
      </ng-template>

      <div class="text-base m-4">are you sure you want to do this action, this action can not be undone</div>

      <ng-template pTemplate="footer">
        <div class="flex justify-end gap-2">
          <p-button label="Cancel" severity="secondary" (onClick)="closeModal()" />
          <p-button label="Save" (onClick)="confirmModal()" />
        </div>
      </ng-template>
    </p-dialog>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationDialogComponent {
  private readonly _confirmationService = inject(ConfirmationService);
  isVisible = this._confirmationService.confirmationModelIsOpenedWritable;
  itemId = this._confirmationService.itemIdToDelete;

  title= input<string>('');
  itemToDelete= input<string>('');
  @Output() onCancel = new EventEmitter<void>();
  @Output() onConfirm = new EventEmitter<number>();

  closeModal(): void {
    this.onCancel.emit();
  }

  confirmModal(): void {
    this.onConfirm.emit(this.itemId());
  }
}
