import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrediPage } from './uredi.page';

const routes: Routes = [
  {
    path: '',
    component: UrediPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrediPageRoutingModule {}
