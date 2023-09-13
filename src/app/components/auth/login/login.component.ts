import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { A } from 'src/app/guards/auth.guard';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { Router } from '@angular/router';
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
  // router: any;
constructor (private auth :AuthService,private http: HttpClient, private globalstore : GlobalDataService, private router : Router){}



onSubmit(): void {
  this.auth.login(this.username, this.password)
      .subscribe(response => {
        // Handle the response from the API here
        // console.log(response);
        this.globalstore.userID = response.userId;
        this.globalstore.userRole = response.userRole;
        this.globalstore.userName = response.username;
        window.alert("logged in successfully")
        this.router.navigate(['/dashboard'])
      }, error => {
        // Handle errors here
        console.error(error);
      });
}
}
