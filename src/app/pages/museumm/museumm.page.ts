import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MuseoService } from 'src/app/services/museo.service';

@Component({
  selector: 'app-museumm',
  templateUrl: './museumm.page.html',
  styleUrls: ['./museumm.page.scss'],
})
export class MuseummPage implements OnInit {
  museos: any;

  constructor(private router: Router,private museoService: MuseoService) { }

  async ngOnInit() {
    this.museos = await this.museoService.obtenerMuseos();
  }

  buscarRecorridos(museoId: number) {
    this.router.navigateByUrl(`museos/${museoId}/recorridos`);
  }
}
