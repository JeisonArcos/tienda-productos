import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  swiper?: Swiper;

  imagenes: string[] = [
    "assets/imagenes/banner.png",
    "assets/imagenes/banner.png",
    "assets/imagenes/banner.png",
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('iniciciando..');
  }
  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      
    });
  }

}
