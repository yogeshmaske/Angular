import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogindataService {

  apiUrl = 'http://localhost:3000/login';

  // apiUrl = 'http://localhost:3000/todo';
  
  
  constructor(private httpClient:HttpClient) { }

  // create Data

  create(data:any):Observable<any>{

    return this.httpClient.post(this.apiUrl,data);
  }

  // read data
  getData(){
    return this.httpClient.get(this.apiUrl);
  }
}
