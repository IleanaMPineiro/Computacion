import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecorridosService {
  obtenerRecorridos(museoId: number): any {
    return fetch('http://192.168.0.100:8000/api/museos/number/recorridos',{method: 'GET'})
        .then(response => response.json());
  }
}
