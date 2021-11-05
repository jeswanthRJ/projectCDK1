import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddListProjectComponent } from './add-list-project/add-list-project.component';
import { AddDataComponent } from './add-data/add-data.component';
import { InitialsPipe } from './initials.pipe';

@NgModule({
  declarations: [
    InitialsPipe,
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddListProjectComponent,
    AddDataComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
