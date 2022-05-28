import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
})
export class ProductListItemComponent implements OnInit {
  @Input() product: any;

  constructor() { }

  ngOnInit() {}

  selectProduct(){
    this.product.qty += 1;
  }
}
