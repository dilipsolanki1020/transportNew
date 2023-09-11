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
  console.log("inside form");
  this.auth.login(this.username, this.password)
  // .subscribe((loggedIn: boolean) => {
  //   if (loggedIn) {
  //     // Handle successful login, e.g., navigate to a new page.
  //     console.log("Login successful");
  //   } else {
  //     // Handle login failure, e.g., show an error message.
  //     console.log("Login failed");
  //   }
  // });
}

}
