import { Component } from '@angular/core';
import { TEXTS,ICONS } from '../../../shared/constants/app-content';
import { SHARED_IMPORTS } from '../../../shared/constants/shared-imports';

@Component({
  selector: 'app-footer',
  imports: [SHARED_IMPORTS],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  texts = TEXTS
  icons = ICONS
}
