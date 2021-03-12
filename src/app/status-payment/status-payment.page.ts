import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-payment',
  templateUrl: './status-payment.page.html',
  styleUrls: ['./status-payment.page.scss'],
})
export class StatusPaymentPage implements OnInit {

  success = true
  declined = false


  constructor() { }

  ngOnInit() {
  }

  

}
