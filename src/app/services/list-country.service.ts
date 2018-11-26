import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class ListCountryService {

  constructor( private http: Http) { }

  getcitiesByCountryId(): Promise<any> {
    return this.http.get('http://gateway.amtv.id/iwantuua/api/city/countryId/101?page=0&size=1000')
      .toPromise()
      .then(response => {
        response = response.json();
        return response;
      })
      .catch(err => {
        return err;
      });
  }
}
