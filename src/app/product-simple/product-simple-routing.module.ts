import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductSimplePage } from './product-simple.page';

const routes: Routes = [
  {
    path: '',
    component: ProductSimplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductSimplePageRoutingModule {}
