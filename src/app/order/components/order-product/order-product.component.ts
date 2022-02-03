import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '@core/models/product.model';
import { CartService } from '@core/services/cart/cart.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.scss']
})
export class OrderProductComponent implements OnInit {

  @Input() product?: ProductModel;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  deleteProduct() {
    this.cartService.deleteProductCart(this.product?.id ?? '');
  }

}
