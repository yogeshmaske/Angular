import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {


  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content: 'I swa this tree'
    },
    {
      title: 'Bambu Tree',
      imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content: 'I swa this tree'
    },
    {
      title: 'Mangio Tree',
      imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content: 'I swa this tree'
    },
    {
      title: 'Pam Tree',
      content: 'I swa this tree'
    }
  ]

  showme: boolean = true;

  noPlaylists: boolean = false;
  // playlists: any = [];
  playlists: any = [
     {"name": "Rock", "numberOfSongs": 5},
     {"name": "Contemporary", "numberOfSongs": 9},
     {"name": "Popular", "numberOfSongs": 14},
     {"name": "Acoustic", "numberOfSongs": 3},
     {"name": "Wedding Songs", "numberOfSongs": 25},
     {"name": "Metal", "numberOfSongs": 0},
    ];
  constructor() { }

  ngOnInit() {
    if(this.playlists.length === 0) {
    this.noPlaylists = true;
    }
  }

}
