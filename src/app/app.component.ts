import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { LoginDetailsService } from './login-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectCDK';

  constructor( private LoginDetailsService:LoginDetailsService) {
  }
  email=this.LoginDetailsService.email;  
  temp=this.email.split("@")[0];
  name=this.temp.replace(/.*$/,"");
  
}
