import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '@core/models/product.model';
import { CartService } from '@core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product?: ProductModel;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  addCart() {
    if (this.product) {
      this.cartService.addCart(this.product);
    }
  }

}
