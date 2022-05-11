import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from './product-list-item.component';



@NgModule({
  declarations: [ProductListItemComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductListItemComponent]
})
export class ProductListItemModule { }
