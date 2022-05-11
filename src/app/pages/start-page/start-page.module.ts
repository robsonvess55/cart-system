import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [StartPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: StartPageComponent }]),
  ],
  exports: [StartPageComponent]
})
export class StartPageModule { }
