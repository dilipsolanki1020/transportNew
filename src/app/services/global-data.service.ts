import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
public selectedTab :number = 1;
public userName: string = '';
public userID : number = 0;
public userRole:number =0;
  constructor() { }
}
