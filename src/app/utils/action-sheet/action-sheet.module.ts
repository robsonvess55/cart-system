import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionSheetComponent } from './action-sheet.component';



@NgModule({
  declarations: [ActionSheetComponent],
  imports: [
    CommonModule
  ],
  exports:[ActionSheetComponent]
})
export class ActionSheetModule { }
