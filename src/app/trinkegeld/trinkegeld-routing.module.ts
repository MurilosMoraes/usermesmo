import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrinkegeldPage } from './trinkegeld.page';

const routes: Routes = [
  {
    path: '',
    component: TrinkegeldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrinkegeldPageRoutingModule {}
