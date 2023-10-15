import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdercreationService } from '../ordercreation.service';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit{
  senderDetails: any = {
    name: '',
    address: ''
    // Add more sender details properties as needed
  };
  savedSenders: any[] = []; // Array to store saved senders

  receiverDetails: any = {
    name: '',
    address: ''
    // Add more sender details properties as needed
  };
  savedReceiver: any[] = []; // Array to store saved senders
  
  shippingRow:number = 1 ;
  stateList = ['RAJ','MAH','UP']

  constructor(
    private orderDetailsService: OrdercreationService,
    private router : Router
  ){}
  ngOnInit(): void {
    this.senderDetails = this.orderDetailsService.senderDetails
    this.savedSenders = this.orderDetailsService.savedSenders
    this.receiverDetails = this.orderDetailsService.receiverDetails;
    this.savedReceiver = this.orderDetailsService.savedReciver;
    
  }
 
  onPrev(){
    this.router.navigate(['/shipment/create-order'])
  }

  // Function to handle form submission for saving a sender
  saveDetails() {
    this.orderDetailsService.senderDetails = this.senderDetails;
    this.orderDetailsService.receiverDetails = this.receiverDetails;
    this.router.navigate(['/shipment/costing'])
  }

  // Function to select a sender from the list
  selectSender(selectedSender: any) {
    // Set the selected sender details in the senderDetails object
    this.senderDetails = { ...selectedSender };
  }
  selectReceiver(selectReciver: any) {
    // Set the selected sender details in the senderDetails object
    this.receiverDetails = { ...selectReciver };
  }

  toggleRow(row:number){
    // console.log("sav",this.reciverDetails)
    this.shippingRow = row;
    this.orderDetailsService.senderDetails = this.senderDetails;
    this.orderDetailsService.receiverDetails = this.receiverDetails;
  }
}
