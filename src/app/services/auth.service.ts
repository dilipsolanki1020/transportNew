import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
// import { Route } from '@angular/router';
declare var $:any;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username:string,password:string){

    console.log(username,password)
    const body = {
      username: username,
      password: password
    };
    
    this.http.post('https://transportsystemapi.azurewebsites.net/login', body)
      .subscribe(
        (response: any) => {
          console.log('login success', response);
          return true;
        },
        (err) => {
          console.log('error', err);
          return false;
        }
      );



  }
 
//   login(username: string, password: string) {
//     const rurl = 'https://transportsystemapi.azurewebsites.net/login';
//     const body = { usernam: username, passwor: password };
//     const headerss = { 'Content-Type': 'application/json' };
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', rurl,true);
// return new Promise(function(resolve,reject){
//   $.ajax({
// url:rurl,
// type:"GET",
// headers: headerss
//   })
// }).then(function(result){
//   console.log(result)
// })
//     // return new Observable<boolean>((observer) => {
//     //   

//     //   xhr.open('POST', url, true);

//     //   // Set request headers
//     //   for (const header in headers) {
//     //     if (headers.hasOwnProperty(header)) {
//     //       xhr.setRequestHeader(header, headers[header]);
//     //     }
//     //   }

//     //   xhr.onload = () => {
//     //     if (xhr.status === 200) {
//     //       const response = JSON.parse(xhr.responseText);
//     //       console.log('login success', response);
//     //       observer.next(true);
//     //       observer.complete();
//     //     } else {
//     //       console.log('error', xhr.statusText);
//     //       observer.error(false);
//     //     }
//     //   };

//     //   xhr.onerror = () => {
//     //     console.log('error', xhr.statusText);
//     //     observer.error(false);
//     //   };

//     //   xhr.send(JSON.stringify(body));
//     // });
//   }

}
