import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
constructor (private auth :AuthService,private http: HttpClient){}

// onSubmit(form: NgForm): void {
//   console.log("inside form");
//   this.auth.login(this.username, this.password)
 
// }


onSubmit(form: NgForm): void {
  const loginData = {
    username: this.username,
    password: this.password
  };

  // Encode the loginData as a JSON string
  const loginDataJson = JSON.stringify(loginData);

  // Define the HTTP headers (optional)
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  // Include the JSON-encoded loginData in the query parameters
  const params = new HttpParams().set('data', loginDataJson);

  // Make the GET request to the API with the data in the query parameters
  this.http.get('https://transportsystemapi.azurewebsites.net/login', { headers, params })
    .subscribe(
      (response) => {
        // Handle the response from the API here
        console.log('API Response:', response);
      },
      (error) => {
        // Handle errors here
        console.error('API Error:', error);
      }
    );

    // this.http.get('https://apiv3.imocha.io/v2/test', { headers, params })
    // .subscribe(
    //   (response) => {
    //     // Handle the response from the API here
    //     console.log('API Response:', response);
    //   },
    //   (error) => {
    //     // Handle errors here
    //     console.error('API Error:', error);
    //   }
    // );
}
}
