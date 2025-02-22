import { Component, HostListener } from '@angular/core';
import { TEXTS } from '../../../shared/constants/app-content';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  texts = TEXTS;

  isMenuOpen = false;
  isSticky = false;

  toggleNavbar() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isSticky = window.scrollY > 50; // Add sticky effect after scrolling 50px
  }
}
