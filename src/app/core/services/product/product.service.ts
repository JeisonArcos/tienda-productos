import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '@core/models/product.model';
import { RequestResponseProduct, Result } from '@core/models/request-response-product';
import { environment } from 'environments/environment';
import { catchError, map, Observable, throwError, timeout } from 'rxjs';
import { CheckError } from '../check-error';
import { TIME } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient
  ) { }

  getProductsSearch(searchText: String, idCategory: string): Observable<ProductModel[]> {
    return this.http.get<RequestResponseProduct>(`${environment.urlApi}/search?category=${idCategory}&q=${searchText}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return CheckError.getMessageError(error);
        }),
        timeout({
          each: TIME,
          with: () => throwError(() => new Error('Error de timeout'))
        }),
        map((products) => products.results
          .map((product) => ProductModel.productFromJson(product))
        ),

      );
  }

  getMostWantedProducts(idCategory: string): Observable<ProductModel[]> {
    return this.http.get<RequestResponseProduct>(`${environment.urlApi}/search?category=${idCategory}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return CheckError.getMessageError(error);
        }),
        timeout({
          each: TIME,
          with: () => throwError(() => new Error('Error de timeout'))
        }),
        map((products) =>
          this.getMostWantedProductsOfList(products.results)
            .map((product) => ProductModel.productFromJson(product))
        ),
      );
  }

  private getMostWantedProductsOfList(results: Result[]): Result[] {
    let resultsProducts = results;
    const productsTemp: Result[] = [];
    let randomIndex = 0;
    const quantityProducts = resultsProducts.length > 15 ? 15 : resultsProducts.length;
    for (let index = 0; index < quantityProducts; index++) {
      randomIndex = Math.floor(Math.random() * resultsProducts.length);
      productsTemp.push(resultsProducts[randomIndex]);
      resultsProducts.splice(randomIndex, 1);

    }
    return productsTemp;
  }

}
