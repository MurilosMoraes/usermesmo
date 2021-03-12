import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusPaymentPageRoutingModule } from './status-payment-routing.module';

import { StatusPaymentPage } from './status-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusPaymentPageRoutingModule
  ],
  declarations: [StatusPaymentPage]
})
export class StatusPaymentPageModule {}
