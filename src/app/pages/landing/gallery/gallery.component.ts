import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { IMAGES } from '../../../shared/constants/app-content';
import { SHARED_IMPORTS } from '../../../shared/constants/shared-imports';
import { faChevronDown as down } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gallery',
  imports: [...SHARED_IMPORTS],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  images: string[] = [
    IMAGES.user1,
    IMAGES.user2,
    IMAGES.user5,
    IMAGES.pic1,
    IMAGES.pic2,
    IMAGES.pic3,
    IMAGES.pic4,
    IMAGES.user3,
    IMAGES.user4,
    IMAGES.pic5,
    IMAGES.pic6,

    IMAGES.user4,
    IMAGES.user2,
    IMAGES.user5,
    IMAGES.pic4,
    IMAGES.user3,
    IMAGES.user1,
    IMAGES.pic5,
    IMAGES.pic6,
    IMAGES.pic1,
    IMAGES.pic2,
    IMAGES.pic3,

    IMAGES.user1,
    IMAGES.user2,
    IMAGES.user5,
    IMAGES.pic1,
    IMAGES.pic2,
    IMAGES.pic3,
    IMAGES.pic4,
    IMAGES.user3,
    IMAGES.user4,
    IMAGES.pic5,
    IMAGES.pic6,

  ];

  hasMore = false;
  downIcon = down;

  @ViewChild('galleryContent') galleryContent!: ElementRef;

  ngAfterViewInit(): void {
    // Use a slight delay to allow content to render
    setTimeout(() => {
      const el = this.galleryContent.nativeElement;
      // If the content height exceeds container height, mark that there is more content.
      if (el.scrollHeight > el.clientHeight) {
        this.hasMore = true;
      }
    });
  }
}
