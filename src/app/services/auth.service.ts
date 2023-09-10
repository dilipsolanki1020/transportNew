import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Route } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username:string,password:string){

    console.log(username,password)
    
    // this.http.post('url',{username: username, password:password})
    // .subscribe(
    //   (response:any)=>{
    //     console.log('login success',response)
    //     return true
    //   },
    //   (err) =>{
    //     console.log('error',err)
    //     return false
    //   }
    // )


  }
}
