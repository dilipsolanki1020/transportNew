import { Component, OnInit } from '@angular/core';
import { OrdercreationService } from '../ordercreation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-submission',
  templateUrl: './order-submission.component.html',
  styleUrls: ['./order-submission.component.css']
})
export class OrderSubmissionComponent implements OnInit {
  shipmentDetails: any = {};
  senderDetails: any = {}
  receiverDetails: any = {}
  shipmentCosts: any = {}
  costingSummery: any = {}
  orderData: any = {}
  constructor(
    private ordercreationservice: OrdercreationService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.shipmentDetails = this.ordercreationservice.shipmentDetails
    this.senderDetails = this.ordercreationservice.senderDetails
    this.receiverDetails = this.ordercreationservice.receiverDetails
    this.shipmentCosts = this.ordercreationservice.shipmentcost
    this.prepareData();
  }
  prepareData() {
    let orddata = {
      "OrderId": this.shipmentDetails.OrderId ? this.shipmentDetails.OrderId : 0,
      "SenderCustomerId": 0, // TBD
      "ReceiverCustomerId": 0, // TBD
      "UserId": 1, // need to configure
      "PackageType": this.shipmentDetails.goodsType,//need id //need enum
      "Size": 0.0, // TBD noo need to send
      "InoviceNumber": this.shipmentDetails.invoiceNumber,
      "Remarks": this.shipmentDetails.specialRequirements,
      "DimensionL": this.shipmentDetails.dimensionsL,
      "DimensionB": this.shipmentDetails.dimensionsW,
      "DimensionH": this.shipmentDetails.dimensionsH,
      "Weight": this.shipmentDetails.weight,
      "SenderId": this.senderDetails.id,
      "SenderName": this.senderDetails.name,
      "SenderEmail": this.senderDetails.email,
      "SenderAddress1": this.senderDetails.address1,
      "SenderAddress2": this.senderDetails.address2,
      "SenderState": this.senderDetails.state,
      "SenderCity": this.senderDetails.city,
      "SenderPIN": this.senderDetails.pincode,
      "SenderContact1": this.senderDetails.contact,
      "SenderContact2": this.senderDetails.contact,
      "RevieverId": this.receiverDetails.id,
      "RecieverName": this.receiverDetails.name,
      "RecieverEmail": this.receiverDetails.email,
      "RecieverAddress1": this.receiverDetails.address1,
      "RecieverAddress2": this.receiverDetails.address2,
      "RecieverState": this.receiverDetails.state,
      "RecieverCity": this.receiverDetails.city,
      "RecieverPIN": this.receiverDetails.pincode,
      "RecieverContact1": this.receiverDetails.contact,
      "RecieverContact2": this.receiverDetails.contact,
      "ShipmentCost": this.shipmentCosts.ShipmentCost,
      "PackagingCost": this.shipmentCosts.PackagingCost,
      "HandelingCharge": this.shipmentCosts.HandelingCharge,
      "Hamali": this.shipmentCosts.Hamali,
      "PaymentMode": this.shipmentCosts.paymentType, // Need ENUM
      "PaymentType": this.shipmentCosts.paymentMode, // Need ENUM
      "Discount": this.shipmentCosts.discount,
      "AdvancePayment": this.shipmentCosts.advance,
      "FinalAmount": this.shipmentCosts.finalcost,
    }
    this.orderData = orddata;
    console.log(orddata)

  }

  CreateOrder(){
    
    this.ordercreationservice.addOrder(this.orderData).subscribe((resp)=>{
console.log(resp)
    },
    (err) =>{
      console.log(err)
    })
  }

  onPrev() {

    this.router.navigate(['/shipment/costing'])
  }
}
