import { ServicoService } from './../services/servico.service';
import { JsonDTO } from './../dto/JsonDTO';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  constructor(private servicoService: ServicoService) {

  }

  jsonModel: JsonDTO;
  lat: number;
  lon: number;
  cont: number;
  card: string;
  isAvaliable: boolean;

  ngOnInit() {
    this.lat = 0;
    this.lon = 0;
    this.cont = 0;
    this.isAvaliable = false;
    this.card = "card-clima-menor";
    this.getCoord();
  }

  getCoord() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;

      });
    }
    if (this.cont > 0) {
      this.servicoService.obterClima(this.lat, this.lon).subscribe(data => {
        this.jsonModel = data;
        this.isAvaliable = true;
      });
      this.card = "card-clima";
    }
    this.cont++;
  }



}
