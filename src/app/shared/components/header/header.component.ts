import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { CartService } from '@core/services/cart/cart.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() drawer?: MatDrawer;
  searchText: String = '';
  total$ = new Observable<number>();

  constructor(
    private cartService: CartService,
  ) {
    this.cartService.loadProductsToCart();
    this.total$ = this.cartService.cart$
      .pipe(
        map(products => products.length)
      )
  }

  ngOnInit(): void {
  }

}
