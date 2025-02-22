import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/constants/shared-imports';
import { PreviewModalComponent } from './preview-modal/preview-modal.component';
import { SuccessfulComponent } from './successful/successful.component';
import AOS from 'aos';
import { TEXTS, IMAGES, ICONS } from '../../../shared/constants/app-content';

@Component({
  selector: 'app-contact-us',
  imports: [
    ...SHARED_IMPORTS,
    PreviewModalComponent,
    SuccessfulComponent,

  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit {
  texts = TEXTS;
  icons = ICONS;
  images = IMAGES;
  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }

  name = '';
  email = '';
  message = '';

  // Modal states
  showPreviewModal = false;
  showSuccess = false;

  constructor() {}

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Form submitted:', this.name, this.email, this.message);
    this.showPreviewModal = true;
  }

  onEditModal(): void {
    this.showPreviewModal = false;
  }

  onConfirmModal(): void {
    // Close the preview modal and display the success overlay
    this.showPreviewModal = false;
    this.showSuccess = true;
  }
  onSuccessClose(): void {
    // Hide the success overlay (return to contact form)

    this.showSuccess = false;
    this.name = '';
    this.email = '';
    this.message = '';
  }
}

