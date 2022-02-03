import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-home',
  templateUrl: './categories-home.component.html',
  styleUrls: ['./categories-home.component.scss']
})
export class CategoriesHomeComponent implements OnInit {
  categoryName1: string = 'MODA INFANTIL';
  categoryName2: string = 'PROTECCIÓN';
  constructor() { }

  ngOnInit(): void {
  }

}
