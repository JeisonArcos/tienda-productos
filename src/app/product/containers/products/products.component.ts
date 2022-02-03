import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductModel } from '@core/models/product.model';
import { ProductService } from '@core/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  loading: boolean = false;
  products: ProductModel[] = [];

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const searchText = params['searchText'];
      this.obtenerProductos(searchText);
    });
  }

  obtenerProductos(searchText: String) {
    const clothingAccesoriesCategory = 'MCO1430';
    this.products = [];
    this.loading = true;
    this.productService.getProductsSearch(searchText, clothingAccesoriesCategory)
      .subscribe({
        next: (products) => { this.products = products; this.loading = false; },
        error: (error) => {
          this.loading = false;
          this.openSnackBar(error);
        }
      });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
