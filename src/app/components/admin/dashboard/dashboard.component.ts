import { Component, OnInit } from '@angular/core';
// import { NgxBarcode6Module } from 'ngx-barcode6';
import { GlobalDataService } from 'src/app/services/global-data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    public globalstore: GlobalDataService
  ){

  }
  ngOnInit(): void {
   
  }
  barcodeValue: string = ''; // Initialize with an empty string

  // 
}
