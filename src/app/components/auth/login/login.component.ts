import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { A } from 'src/app/guards/auth.guard';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginForm')
  loginForm!: NgForm; 
  username:string = '';
  password:string = '';
constructor (private auth :AuthService){}

  onSubmit(form: NgForm): void {
    console.log("inside form")
    // console.log(this.password)
    this.auth.login(this.username,this.password)
  }
}
