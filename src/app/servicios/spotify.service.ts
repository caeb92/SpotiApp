import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {


  //SPOTIFY APPI TOKEN =" BQB7rOjOB8I5CiLiHiZsLUtA0s51b7TP5s7fC_IZCIRW3P0Fwt-Vcm_LcXg-iwOreq7-0aT7w47ojJfpW6W7_Q "
  artistas:any[] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";

  constructor( private http:Http ) { }

  getArtistas( termino:string ){

    let query = `q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url ).map( res =>{
      console.log(res);
    })

  }// FIN GET ARTISTAS

}
