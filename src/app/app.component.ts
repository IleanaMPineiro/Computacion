import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '', icon: 'home' },
    { title: 'Pinturas Famosas', url: '/customers', icon: 'color-palette' },
    { title: 'Museos', url: '/museumm', icon: 'location' },
    { title: 'Inscripciones', url: '/inscripciones', icon: 'musical-notes' },
  ];
  constructor() {}
}
