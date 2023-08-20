import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerDataService } from 'src/app/services/customer-data.service';
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  @ViewChild('orderForm')
  orderForm!: NgForm; 

  selectedCustomerAddress: string = '';
  isNewCustomerSelected: boolean = false;
  customers: any[] = [];
  receivers: any[] = [];
  selectedCustomer: any = null;
  selectedReceiver: any = null;
  selectedCustomerContact: string = '';
  selectedReciverAddress: string =''
  selectedReciverContact: string =''
  selectedCustomerName: string = ''
  selectedReciverName: string = ''
  isnewReciverSelected: boolean = false;
  consignmentTitle: string = '';
  consignmentWeight: string = '';
  consignmentDimensions: string = '';
  consignmentQuantity: number = 0;
  consignmentLength: string = '';
  consignmentHeight: string = '';
  consignmentwidth: string = '';
  city: string = '';

  constructor(private customerData : CustomerDataService){}
  ngOnInit(): void {
    this.fetchCustomers();
  }
  fetchCustomers(): void {
    this.customerData.getCustomers().subscribe((data: any) => {
      this.customers = data;
    });
  }

  fetchReceiversForCustomer(customerId: number): void {
    this.customerData.getReceivers(customerId).subscribe((data: any) => {
      this.receivers = data;
    });
  }


  onCustomerSelected(event: Event): void {
    const customerId = (event.target as HTMLSelectElement).value;
    
    if (customerId) {
      if (customerId === 'new') {
        this.selectedCustomer = null;
        this.selectedCustomerAddress = '';
        this.selectedCustomerName = '';
        this.isNewCustomerSelected = true;
        this.selectedReceiver = null;
        this.selectedCustomerContact =''
      } else {
        this.selectedCustomer = this.customers.find(customer => customer.id === +customerId);
        this.fetchReceiversForCustomer(+customerId);
        this.selectedReceiver = null;
        this.isNewCustomerSelected = false;
        this.selectedCustomerName = this.selectedCustomer?.name;
        this.selectedCustomerAddress = this.selectedCustomer?.address || '';
        this.selectedCustomerContact = this.selectedCustomer?.contactNumber;
        
      }
    }
  }
  

  onReceiverSelected(event: Event): void {
    const receiverId = (event.target as HTMLSelectElement).value;
    if (receiverId) {
      if (receiverId === 'new') {
        this.selectedReceiver = null;
        this.selectedReciverAddress ='';
        this.selectedReciverContact =''
        this.isnewReciverSelected = true;
        this.selectedReciverName = '';
      }
      else{
      this.selectedReceiver = this.receivers.find(receiver => receiver.id === +receiverId);
      this.isnewReciverSelected = false;
      this.selectedReciverName = this.selectedReceiver?.name
      this.selectedReciverAddress = this.selectedReceiver?.address || " ";
      this.selectedReciverContact = this.selectedReceiver?.contactNumber || " " ;
      }
    }
  }

  onSubmit(form: NgForm): void {

    if (this.orderForm.valid) {
      const formData = {
        customerName: this.selectedCustomer.name,
        customerId:this.selectedCustomer.id,
        customerAddress: this.selectedCustomerAddress,
        customerContact: this.selectedCustomerContact,
        receiverName: this.selectedReceiver.name,
        receiverAddress: this.selectedReciverAddress,
        reciverContact: this.selectedReciverContact,
        city: this.city,
        title: this.consignmentTitle,
        weight: this.consignmentWeight,
        length: this.consignmentLength,
        width: this.consignmentwidth,
        height:this.consignmentHeight,
        quantity: this.consignmentQuantity
        
      };

    const jsonData = JSON.stringify(formData);
    console.log("before sending to api ",jsonData)
    this.customerData.sendDataToApi(formData).subscribe(response => {
      console.log('api response',response)
    });
    }
    
  }
}
