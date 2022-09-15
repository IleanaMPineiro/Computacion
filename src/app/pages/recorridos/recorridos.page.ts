import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecorridosService } from 'src/app/services/recorridos.service';

@Component({
  selector: 'app-recorridos',
  templateUrl: './recorridos.page.html',
  styleUrls: ['./recorridos.page.scss'],
})
export class RecorridosPage implements OnInit {
  museoId: number;
  recorridos: any;

  constructor(private activatedRoute:ActivatedRoute, private recorridoService: RecorridosService ) { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(async params => {
        this.museoId = params.museoId;
        this.recorridos = await this.recorridoService.obtenerRecorridos(this.museoId);
        console.log(this.recorridos)
    });
  }

}
