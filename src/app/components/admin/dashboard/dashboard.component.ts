import { Component, OnInit } from '@angular/core';
import { NgxBarcode6Module } from 'ngx-barcode6';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  ngOnInit(): void {
    console.log("dashboard oninit")
  }
  barcodeValue: string = ''; // Initialize with an empty string

  updateBarcodeValue(event: any) {
    this.barcodeValue = event.target.value;
  }
}
