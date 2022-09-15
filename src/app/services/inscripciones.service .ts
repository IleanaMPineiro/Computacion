import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InscripcionesService {
  obtenerInscripciones(): any {
    return fetch('http://192.168.0.100:8000/api/inscripciones',{method: 'GET'})
        .then(response => response.json());
  }
}
