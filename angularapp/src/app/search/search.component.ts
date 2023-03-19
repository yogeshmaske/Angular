import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WikisearchService } from '../service/wikisearch.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dataArr = [];
  spinet;
  constructor(private wikiService:WikisearchService,private sanitizer:DomSanitizer) { }

  ngOnInit() {
  }

  getwikiData(searcVal){
    this.wikiService.getData(searcVal.value).subscribe((res:any)=>{

      console.log('wiki api',res);   
      this.dataArr = res.query.search;
      console.log('query res',this.dataArr);
      console.log(searcVal.value);
      for (const data of this.dataArr) {
        // console.log(data.snippet);
        this.spinet =data.snippet
        console.log(this.spinet);
        // this.spinet.replace('"','');
        this.spinet = this.sanitizer.bypassSecurityTrustHtml(this.spinet)
        console.log(this.spinet);
        
      }
      // this.spinet = res.query.search.snippet;
      // console.log(this.spinet);
      
      
      
    })
  }

}

// pages = [];
//   onTerm(term: string) {
//     this.isLoading = true;
//     this._wikipediaService.search(term).subscribe((res: any) => {
//       this.pages = res.query.search;
//       console.log(this.pages);
//       this.isLoading = false;
//     });