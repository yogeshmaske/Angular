import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwsgenerate',
  templateUrl: './pwsgenerate.component.html',
  styleUrls: ['./pwsgenerate.component.css']
})
export class PwsgenerateComponent implements OnInit {

   letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   number = "0123456789";
   symbol = "@#$&%^*!?";
   validChar = ""; 

   string_length = 9;
   randomstring = '';
   password:string|number ='';
   includeLetter = false;
   includeNumber = false;
   includeSymbol = false;

  constructor() { }

  ngOnInit() {

     
  //   if (condition) {
      
  //   }else if (condition) {
      
  //   }




  //   for (var i=0; i<this.string_length; i++) {
  //     var rnum = Math.floor(Math.random() * this.chars.length);
  //     this.randomstring += this.chars.substring(rnum,rnum+1);
  // }
  // console.log(this.chars.length);
  // console.log(this.randomstring);
  
  
  }
  onChaneLength(val){
    this.string_length = val.target.value;
  }
  onUseLetter(){
   this.includeLetter = !this.includeLetter;
  }

  onUseNumber(){
   this.includeNumber = !this.includeNumber;
  }

  onUseSymbol(){
  this.includeSymbol = !this.includeSymbol;
  }
  
  onClick(){
    this.password ="";
    if (this.includeLetter) {
      this.validChar += this.letter;
    }

    if (this.includeNumber) {
      this.validChar += this.number
    }

    if (this.includeSymbol) {
      this.validChar += this.symbol;
    }
     let randomstring = '';
    for (var i=0; i<this.string_length; i++) {
          var rnum = Math.floor(Math.random() * this.validChar.length);
          randomstring += this.validChar.substring(rnum,rnum+1);
      }
    
      this.password =  randomstring;

  }
  


}


