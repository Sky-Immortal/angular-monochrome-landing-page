import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { SHARED_IMPORTS } from '../../../shared/constants/shared-imports';
import { TEXTS, IMAGES, ICONS } from '../../../shared/constants/app-content';

@Component({
  selector: 'app-products',
  imports: [...SHARED_IMPORTS],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent implements OnInit {

  texts = TEXTS.PRODUCTS;
  images = IMAGES;
  icons = ICONS;
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  offers = [
    {
      title: this.texts.offers[0].title,
      description: this.texts.offers[0].description,
      image: this.images.svg6,
      icon: this.icons.lightBulb
    },
    {
      title: this.texts.offers[1].title,
      description: this.texts.offers[1].description,
      image: this.images.svg2,
      icon: this.icons.checkCircle
    },
    {
      title: this.texts.offers[2].title,
      description: this.texts.offers[2].description,
      image: this.images.svg3,
      icon: this.icons.headset
    },
    {
      title: this.texts.offers[3].title,
      description: this.texts.offers[3].description,
      image: this.images.svg1,
      icon: this.icons.cogs
    }
  ];
}