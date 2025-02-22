import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TEXTS, IMAGES } from '../../../shared/constants/app-content';

@Component({
  selector: 'app-infinite-scroll',
  imports: [CommonModule],
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent {
  testimonials = [
    {
      img: IMAGES.user1,
      name: TEXTS.SCROLL.testimonials[0].name,
      text: TEXTS.SCROLL.testimonials[0].text,
    },
    {
      img: IMAGES.user2,
      name: TEXTS.SCROLL.testimonials[1].name,
      text: TEXTS.SCROLL.testimonials[1].text,
    },
    {
      img: IMAGES.user3,
      name: TEXTS.SCROLL.testimonials[2].name,
      text: TEXTS.SCROLL.testimonials[2].text,
    },
    {
      img: IMAGES.user4,
      name: TEXTS.SCROLL.testimonials[3].name,
      text: TEXTS.SCROLL.testimonials[3].text,
    },
  ];
}
