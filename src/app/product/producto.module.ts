import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './containers/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { MostWantedProductComponent } from './containers/most-wanted-product/most-wanted-product.component';
import { MaterialModule } from '@material/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    MostWantedProductComponent
  ],
  imports: [
    ProductRoutingModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    MostWantedProductComponent
  ]
})
export class ProductModule {

}
