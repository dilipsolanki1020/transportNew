import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
public selectedTab :number = 1;
  constructor() { }
}
