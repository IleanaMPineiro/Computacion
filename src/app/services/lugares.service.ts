import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LugaresService {
  obtenerLugares(): any {
    return fetch('http://192.168.0.100:8000/api/lugares',{method: 'GET'})
        .then(response => response.json());
  }
}
