import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuseummPageRoutingModule } from './museumm-routing.module';

import { MuseummPage } from './museumm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuseummPageRoutingModule
  ],
  declarations: [MuseummPage]
})
export class MuseummPageModule {}
