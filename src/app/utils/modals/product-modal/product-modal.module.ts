import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModalComponent } from './product-modal.component';



@NgModule({
  declarations: [ProductModalComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductModalComponent]
})
export class ProductModalModule { }
