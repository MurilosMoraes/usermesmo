import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPaymentPage } from './details-payment.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPaymentPageRoutingModule {}
