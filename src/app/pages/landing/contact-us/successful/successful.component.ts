import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { SHARED_IMPORTS } from '../../../../shared/constants/shared-imports';
import { TEXTS } from '../../../../shared/constants/app-content';
import AOS from 'aos';

@Component({
  selector: 'app-successful',
  imports: [...SHARED_IMPORTS],
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.scss'],
})
export class SuccessfulComponent implements OnInit {
  TEXTS = TEXTS.CONTACT;

  @Output() closeSuccess = new EventEmitter<void>();
  isFadingOut = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    AOS.init();

    setTimeout(() => {
      this.isFadingOut = true;  // Trigger fade-out animation
      
      setTimeout(() => {
        this.closeSuccess.emit(); // Close component after fade-out animation
      }, 1000); // Match the fade-out duration
    }, 2000);
  }
}
