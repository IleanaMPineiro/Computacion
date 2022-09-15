import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecorridosPageRoutingModule } from './recorridos-routing.module';

import { RecorridosPage } from './recorridos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecorridosPageRoutingModule
  ],
  declarations: [RecorridosPage]
})
export class RecorridosPageModule {}
