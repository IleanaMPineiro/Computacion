import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MuseoService {
  obtenerMuseos(): any {
    return fetch('http://192.168.0.100:8000/api/museos',{method: 'GET'})
        .then(response => response.json());
  }
}
