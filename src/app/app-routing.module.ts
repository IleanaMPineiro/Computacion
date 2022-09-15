import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./pages/customers/customers.module').then(
        (m) => m.CustomersPageModule
      ),
  },
  {
    path: 'museumm',
    loadChildren: () =>
      import('./pages/museumm/museumm.module').then((m) => m.MuseummPageModule),
  },
  {
    path: 'inscripciones',
    loadChildren: () => import('./pages/inscripciones/inscripciones.module').then( m => m.InscripcionesPageModule)
  },
  {
    path: 'museos/:museoId/recorridos',
    loadChildren: () => import('./pages/recorridos/recorridos.module').then( m => m.RecorridosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
