import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
msg;
  constructor(private authService:AuthService , private route:Router) { }

  ngOnInit() {
  }

  login(username,password){
    var res = this.authService.checkUser(username,password)
    if (res==true) {
      this.route.navigate(['/product']);
    }else{
       this.msg = 'Invalid User name or Password'
    }
  }

}
