import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPaymentPageRoutingModule } from './details-payment-routing.module';

import { DetailsPaymentPage } from './details-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPaymentPageRoutingModule
  ],
  declarations: [DetailsPaymentPage]
})
export class DetailsPaymentPageModule {}
