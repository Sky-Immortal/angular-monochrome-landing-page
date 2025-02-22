import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../shared/constants/shared-imports';
import { TEXTS, ICONS } from '../../../../shared/constants/app-content';

@Component({
  selector: 'app-preview-modal',
  imports: [...SHARED_IMPORTS],
  templateUrl: './preview-modal.component.html',
  styleUrl: './preview-modal.component.scss'
})
export class PreviewModalComponent {

  TEXTS = TEXTS;
  icons = ICONS;

  @Input() name = '';
  @Input() email = '';
  @Input() message = '';
  @Output() editModal = new EventEmitter<void>();
  @Output() confirmModal = new EventEmitter<void>();


  onEdit(): void {
    this.editModal.emit();
  }

  onConfirm(): void {
    this.confirmModal.emit();
  }
}
