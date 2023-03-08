import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient : HttpClient) { }

  getUsers(){
    return this.httpClient.get(this.apiUrl)
  }
}
