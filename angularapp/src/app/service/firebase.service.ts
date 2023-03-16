import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RapidPost } from '../model/rapid-post';
import { Users } from '../model/users';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url='https://angular2023-8e8c0-default-rtdb.firebaseio.com/';

  postData:Users;
  constructor(private httpClient:HttpClient) { }

   createPosts(){
    this.postData = 
      {
      
      id:102,
      title:'Java',
      content:'Backend',
      database:'Using Firebase'
    }
    //  return this.httpClient.post(this.url + 'posts.json',postData);

    return this.httpClient.post(this.url+'posts.json',this.postData)
  }

  getPostDataFirebase(){
    // return this.httpClient.get(this.url + 'posts.json')
     return this.httpClient.get<Users>(this.url+'posts.json')
     
  }
}
