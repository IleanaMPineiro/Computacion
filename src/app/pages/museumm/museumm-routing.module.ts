import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseummPage } from './museumm.page';

const routes: Routes = [
  {
    path: '',
    component: MuseummPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseummPageRoutingModule {}
