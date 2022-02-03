import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductModel } from '@core/models/product.model';
import { ProductService } from '@core/services/product/product.service';
import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

@Component({
  selector: 'app-most-wanted-product',
  templateUrl: './most-wanted-product.component.html',
  styleUrls: ['./most-wanted-product.component.scss']
})
export class MostWantedProductComponent implements OnInit {
  swiper?: Swiper;
  products: ProductModel[] = [];

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-products', {
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1680: {
          slidesPerView: 5,
        }

      },
      spaceBetween: 40
    });
  }

  obtenerProductos() {
    const animalsPetsCategory = 'MCO1071';
    this.productService.getMostWantedProducts(animalsPetsCategory)
      .subscribe({
        next: (products) => { this.products = products },
        error: (error) => {
          this.openSnackBar(error);
        },
      });
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
