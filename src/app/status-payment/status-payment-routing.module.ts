import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusPaymentPage } from './status-payment.page';

const routes: Routes = [
  {
    path: '',
    component: StatusPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusPaymentPageRoutingModule {}
