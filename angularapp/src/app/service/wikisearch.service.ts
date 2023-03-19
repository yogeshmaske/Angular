import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikisearchService {
  wikiApi = 'https://en.wikipedia.org/w/api.php';

  // params={
  //   action: 'query',
  //   format: 'json',
  //   list: 'search',
  //   utf8: '1',
  //   // srsearch: space,
  //   origin: '*'
  //   }
  constructor(private httpClient:HttpClient) { }
// searchVal
  getData(searchVal){
    return this.httpClient.get(this.wikiApi,{
      params: {
       action:'query',
       format:'json',
       list:'search',
       utf8:'1',
       srsearch: searchVal,
       origin: '*'
      }
      
     })
  }

}
