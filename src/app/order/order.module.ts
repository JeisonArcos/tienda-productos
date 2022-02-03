import { NgModule } from '@angular/core';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './containers/order/order.component';
import { OrderProductComponent } from './components/order-product/order-product.component';
import { MaterialModule } from '@material/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        OrderComponent,
        OrderProductComponent
    ],
    imports: [
        OrderRoutingModule,
        MaterialModule,
        CommonModule,
    ],
    exports: [
    ]
})
export class OrderModule {

}
