import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarProductoPageRoutingModule } from './consultar-producto-routing.module';

import { ConsultarProductoPage } from './consultar-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarProductoPageRoutingModule
  ],
  declarations: [ConsultarProductoPage]
})
export class ConsultarProductoPageModule {}
