import { Component, OnInit } from '@angular/core';
import { ProductModel } from '@core/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product?: ProductModel;
  constructor() { }

  ngOnInit(): void {
  }

}
