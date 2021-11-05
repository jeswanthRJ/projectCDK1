import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailsService {

  constructor() { }

  email!: string;
  sendOtp(mail: string){
    this.email=mail;
  }
}
