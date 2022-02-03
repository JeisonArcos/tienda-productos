import { NgModule } from "@angular/core";
import { HomeComponent } from "./containers/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { BannerComponent } from './components/banner/banner.component';
import { CommonModule } from "@angular/common";
import { CategoriesHomeComponent } from './containers/categories-home/categories-home.component';
import { CategoryHomeComponent } from './components/category-home/category-home.component';
import { ProductModule } from "app/product/producto.module";

@NgModule({
    declarations: [
        HomeComponent,
        BannerComponent,
        CategoriesHomeComponent,
        CategoryHomeComponent,
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        ProductModule
    ],
    exports: []
})

export class HomeModule { }