import { Component, OnInit } from '@angular/core';
import { InscripcionesService } from 'src/app/services/inscripciones.service ';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.page.html',
  styleUrls: ['./inscripciones.page.scss'],
})
export class InscripcionesPage implements OnInit {
  inscripciones: any;
  constructor(private inscripcionesService: InscripcionesService) { }

  async ngOnInit() {
    this.inscripciones = await this.inscripcionesService.obtenerInscripciones();
  }

}
