import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

   apiUrl = 'http://localhost:3000/todo';
   

  //  httpInterpreter
  //  headers = new HttpHeaders().set('Content-Type','application/json');
    
  //DI 
  constructor(private httpClient: HttpClient) { }

  // Create method 

  create(data: any) : Observable<any> {
    return this.httpClient.post(this.apiUrl, data);
  }

  // read 

  list() {
   return this.httpClient.get(this.apiUrl);//,{headers:this.headers}
  }

  // update 

  update(id: any, data: any) {
    let API_URL = `${this.apiUrl}/${id}`;
   return this.httpClient.put(API_URL, data);//,{headers:this.headers}
  }

  // delete 

  delete(id: any) {
    let API_URL = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(API_URL);
  }
}
