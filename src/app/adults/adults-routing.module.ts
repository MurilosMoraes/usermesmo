import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdultsPage } from './adults.page';

const routes: Routes = [
  {
    path: '',
    component: AdultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdultsPageRoutingModule {}
