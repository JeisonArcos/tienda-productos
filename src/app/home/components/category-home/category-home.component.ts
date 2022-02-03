import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.scss']
})
export class CategoryHomeComponent implements OnInit {

  @Input() imagen: string = '';
  @Input() categoryName?: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.categoryName)
  }

}
