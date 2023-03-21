import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  constructor(private httpClient:HttpClient) { }
    apiUrl="http://localhost:3000/productList"
   getProducts(){
    return this.httpClient.get<any>(this.apiUrl);
  }
}
