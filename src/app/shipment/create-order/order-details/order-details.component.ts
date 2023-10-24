import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdercreationService } from '../ordercreation.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})

export class OrderDetailsComponent implements OnInit{
  // Define a property to hold the shipment details
  shipmentDetails: any = {
    goodsType: '',          // Initialize with empty values
    // weight: 0,              // Initialize with zero
    dimensionsL: '',
    dimensionsW: '',
    dimensionsH: '',
    specialRequirements: ''
  };
  public typesOfGoods = ['Box', 'Bag', 'Drum', 'Pipes'];

  // Inject the OrderDetailsService
  constructor(
    private orderDetailsService: OrdercreationService,
    private router : Router
    ) {}
  ngOnInit(): void {
    this.typesOfGoods = this.orderDetailsService.typesOfGoods;
    this.shipmentDetails = this.orderDetailsService.shipmentDetails
  }

  // Function to handle form submission
  submitOrderDetails() {
    // Store the entered shipment details in the service

    this.orderDetailsService.shipmentDetails = this.shipmentDetails;
    this.router.navigate(['/dashboard/shippinginfo'])
    console.log(this.orderDetailsService.shipmentDetails )
  }
  onTypeSelected(event:any){
    
    this.shipmentDetails.goodsType = event.target.value;
  
  }

}

