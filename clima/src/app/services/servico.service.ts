import { Injectable } from '@angular/core';
const weatherAPIKey = require('../../../APIKey.json').Key;

@Injectable({ 
  providedIn: 'root'
})
export class ServicoService {

  constructor() { }

  /*

    POSSÍVEIS CHAMADAS
  
    api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}

    api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}

    &lang=pt_br - Tradução pra ptbr
    &units=metric - Conversão para metros
    
    Exemplo:
    https://api.openweathermap.org/data/2.5/find?q=Belo%20Horizonte&lang=pt_br&units=metric&appid=APIKey

  */

    



}
