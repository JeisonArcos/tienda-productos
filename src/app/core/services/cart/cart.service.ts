import { Injectable } from '@angular/core';
import { ProductModel } from '@core/models/product.model';
import { BehaviorSubject, map, throwError } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: ProductModel[] = [];
  private cart = new BehaviorSubject<ProductModel[]>([]);
  private keyCart: string =  'products';

  cart$ = this.cart.asObservable();

  constructor(private storageService: StorageService) { }

  addCart(product: ProductModel) {
    this.products = [...this.products, product];

    this.storageService.saveData(this.keyCart, this.products);
    this.cart.next(this.products);
  }

  loadProductsToCart() {
    this.products = [];
    const data = this.storageService.getData(this.keyCart);
    if(data != null){
      this.products = data as ProductModel[];
    }
    this.cart.next(this.products);
  }

  deleteProductCart(idProduct: string){
    const products = this.storageService.getData(this.keyCart) as ProductModel[];
    this.products = products.filter((product) => product.id != idProduct);
    this.storageService.saveData(this.keyCart, this.products);
    this.cart.next(this.products);
  }
}
