import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  products: any;
  constructor(private productService: ProductService, public modalCtrl: ModalController) { }
  
  // @Input() modal: Components.IonModal

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.productService.getMenu().subscribe(
      (res) => {
        this.products = res;
        this.products = this.products.map((p) =>{
          p.qty = 0;
          return p;
        });
      },
      (err) => {
        alert(err)
      })
  }

  dismissModal(modalId: number) {
    this.modalCtrl.dismiss(modalId)
  }
}
