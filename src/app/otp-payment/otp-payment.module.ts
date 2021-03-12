import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpPaymentPageRoutingModule } from './otp-payment-routing.module';

import { OtpPaymentPage } from './otp-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpPaymentPageRoutingModule
  ],
  declarations: [OtpPaymentPage]
})
export class OtpPaymentPageModule {}
