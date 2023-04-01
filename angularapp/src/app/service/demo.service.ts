import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  //  httpInterpreter
  // headers = new HttpHeaders().set('Content-Type','application/json');
  product = [
    {name:'mobile',price:10000},{name:'Lapto',price:20000}
  ]
  
  constructor(private httpClient : HttpClient) { }

  getUsers(){
    return this.httpClient.get(this.apiUrl) //,{headers:this.headers}
  }
}
