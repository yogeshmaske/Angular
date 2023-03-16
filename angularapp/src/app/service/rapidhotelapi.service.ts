import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidhotelapiService {
   url='';
  constructor(private httpClient:HttpClient) { }

  getHotelData(){
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': 'c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177',
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
    });

    return this.httpClient.get(this.url,{headers:headers});
  }
}
