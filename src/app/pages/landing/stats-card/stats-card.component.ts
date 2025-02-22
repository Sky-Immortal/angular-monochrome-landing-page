import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { SHARED_IMPORTS } from '../../../shared/constants/shared-imports';
import { TEXTS, ICONS, IMAGES } from '../../../shared/constants/app-content';
@Component({
  selector: 'app-stats-card',
  imports: [...SHARED_IMPORTS],
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss'],
})
export class StatsCardComponent implements OnInit {
  texts = TEXTS.STATS;
  icons = ICONS;
  images = IMAGES;
  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100, // Trigger animation slightly earlier
    });
  }
  stats = [
    {
      icon: this.icons.users,
      number: this.texts.stats[0].number,
      text: this.texts.stats[0].text,
    },
    {
      icon: this.icons.projectDiagram,
      number: this.texts.stats[1].number,
      text: this.texts.stats[1].text,
    },
    {
      icon: this.icons.download,
      number: this.texts.stats[2].number,
      text: this.texts.stats[2].text,
    },
    {
      icon: this.icons.award,
      number: this.texts.stats[3].number,
      text: this.texts.stats[3].text,
    },
  ];
}
