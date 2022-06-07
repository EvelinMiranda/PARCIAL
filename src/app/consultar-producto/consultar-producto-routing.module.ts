import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarProductoPage } from './consultar-producto.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarProductoPageRoutingModule {}
