import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductSimplePageRoutingModule } from './product-simple-routing.module';

import { ProductSimplePage } from './product-simple.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductSimplePageRoutingModule
  ],
  declarations: [ProductSimplePage]
})
export class ProductSimplePageModule {}
