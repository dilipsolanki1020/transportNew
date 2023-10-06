import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdercreationService } from '../ordercreation.service';
import { ChangeDetectionStrategy } from '@angular/core';
// import { Order } from 'src/app/shared/models/order';
@Component({
  selector: 'app-cost-calculation',
  templateUrl: './cost-calculation.component.html',
  styleUrls: ['./cost-calculation.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CostCalculationComponent implements OnInit{

  shipmentCosts:any ={
    cost1: 50,
    cost2: 0,
    cost3 :0
  }
  
  costingSummery:any ={
    totalcost:0,
    discount:0,
    advance:0,
    finalcost:0
  }

  public paymentModes = ['Online', 'cash', 'To Be Billed', 'Others'];
  public paymentTypes = ['To Pay', 'Sender', 'Receiver', 'Other'];
  constructor(
    private router : Router,
    private ordercreationservice:OrdercreationService
  ){}

  ngOnInit(): void {
this.shipmentCosts = this.ordercreationservice.shipmentcost;
// this.costingSummery = this.ordercreationservice.costingSummery;
    // throw new Error('Method not implemented.');
  }
  
  submitShipmentDetails(){
    this.ordercreationservice.shipmentcost = this.shipmentCosts ;
    //  this.ordercreationservice.costingSummery = this.costingSummery ;
    this.router.navigate(['/shipment/order-submission'])
  }
  

  
  updateFinalCost(){
  
    this.shipmentCosts.totalcost = (this.shipmentCosts.ShipmentCost  + this.shipmentCosts.PackagingCost  + this.shipmentCosts.HandelingCharge + this.shipmentCosts.Hamali);  
    this.shipmentCosts.finalcost = this.shipmentCosts.totalcost - this.shipmentCosts.discount - this.shipmentCosts.advance

  }
  onPrev(){
     this.ordercreationservice.shipmentcost = this.shipmentCosts ;
    //  this.ordercreationservice.shipmentCost = this.shipmentCosts ;
    this.router.navigate(['/shipment/shippinginfo'])
  }


  onPaymentTypeSelected(event:any){
    
    this.shipmentCosts.paymentType = event.target.value;
  
  }
  onPaymentModeSelected(event:any){
    
    this.shipmentCosts.paymentMode = event.target.value;
  
  }

}
