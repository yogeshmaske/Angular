import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movies';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

    title:string = "Top 3 Movies";
    movies:Movie[]=[
      {title:'3 Idiots',director:'rj',cast:'amir',releaseDate:'2009'},
      {title:'RRR',director:'RRR',cast:'RRR',releaseDate:'2022'},
      {title:'Kantra',director:'Rishab',cast:'Rishab',releaseDate:'2023'},
      
    ]
  constructor() { }

  ngOnInit() {
  }

}
