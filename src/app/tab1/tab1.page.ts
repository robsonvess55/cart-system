import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  products: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.productService.getMenu().subscribe(
      (res) => {
        this.products = res;
      },
      (err) => {
        alert(err)
      })
  }
}
