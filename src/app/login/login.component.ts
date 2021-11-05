import { Component, OnInit } from '@angular/core';
import { LoginDetailsService } from '../login-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private LoginDetalisService:LoginDetailsService) { }

  ngOnInit(): void {
  }
  email!: string;
  sendOtp(mail:string){
    this.LoginDetalisService.sendOtp(mail);
  }
}
