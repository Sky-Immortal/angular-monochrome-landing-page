import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-landing',
  imports: [
    NavComponent,
    HeaderComponent,
    StatsCardComponent,
    InfiniteScrollComponent,
    GalleryComponent,
    ProductsComponent,
    ContactUsComponent,
    FooterComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
