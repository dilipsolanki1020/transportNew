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


  isSubmitting = false; 
  isModalOpen = false;
  constructor(private customerData : CustomerDataService){}
 

  closeModal(): void {
    this.isModalOpen = false;
  }
  ngOnInit(): void {
    this.fetchCustomers();
  }
  fetchCustomers(): void {
    this.customerData.getCustomers().subscribe((response: any) => {
      console.log(response)
      // this.customers = data;
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
  this.isSubmitting = true;
  this.isModalOpen = true;

    //   const formData = {
    //     "CustomerId": 1,
    //     "UserId": 101,
    //     "Source": "New York",
    //     "Destination": "Los Angeles",
    //     "PackageType": 1,
    //     "Size": 20.5,
    //     "DimensionL": 30.0,
    //     "DimensionB": 10.0,
    //     "DimensionH": 15.0,
    //     "Weight": 5.5,
    //     "Status": 1,
    //     "CreatedBy": 201,
    //     "CreatedOn": "2023-09-06T10:30:00",
    //     "ModifiedBy": null,
    //     "ModifiedOn": null
    // };


    const formData = {
      // customerName: this.selectedCustomer.name,
      CustomerId:this.selectedCustomer.id,
      UserId : 201,
      Source: this.selectedCustomerAddress,
      // customerContact: this.selectedCustomerContact,
      // receiverName: this.selectedReceiver.name,
      // Destination: this.selectedReciverAddress,
      // reciverContact: this.selectedReciverContact,
      Destination: this.city,
      title: this.consignmentTitle,
      Weight: this.consignmentWeight,
      DimensionL: this.consignmentLength,
      DimensionB: this.consignmentwidth,
      DimensionH:this.consignmentHeight,
      quantity: this.consignmentQuantity
      
    };




    this.customerData.addOrder(formData).subscribe(
      (response) => {
        console.log('API response', response);
        setTimeout(() => {
          this.isModalOpen = false;
        }, 1000);
        // Optionally, handle success here and close the modal
        // You can add code to close the modal here
      },
      (error) => {
        console.error('API error', error);
        // Optionally, handle errors here
        this.isModalOpen = false;
      },
      () => {
        // Enable the submit button
        this.isSubmitting = false;
      }
    );
    }
    
  }
}
