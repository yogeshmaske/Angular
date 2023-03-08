import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  // userName = new Subject<any>();//Observable
  
  userName = new BehaviorSubject<any>('Code');

  cities = new Subject<any>();
  constructor() { }
}
