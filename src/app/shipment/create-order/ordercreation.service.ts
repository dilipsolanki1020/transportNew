import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
// import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class OrdercreationService {
  public shipmentDetails: any = {
    goodsType: '',          // Initialize with empty values
    weight: 0,              // Initialize with zero
    dimensionsL: '',
    dimensionsW: '',
    dimensionsH: '',
    specialRequirements: ''
  };

  public typesOfGoods = [
    'Box',
    'Bag',
    'Drum',
    'Pipes',
  ]

  public senderDetails: any = {
    name: '',
    address1: ''

  };

  public savedSenders: any[] = [
    {
      id: 0,
      name: 'yash',
      contact: 9284725649,
      address1: "abc"

    }
  ]; // Array to store saved senders
  public receiverDetails: any = {
    name: '',
    address: ''
    // Add more sender details properties as needed
  };

  public savedReciver: any[] = [
    {
      id: 0,
      name: 'dilip',
      contact: 9284722329,
      address1: "xyz",
      address2: "xyz2",
      state: "MAH",
      city: "Pune",
      pincode: 412308,
      email: "dilip@dilip.in"
    },

  ]; // Array to store saved senders

  public shipmentcost: any = {
    ShipmentCost: 0,
    PackagingCost: 0,
    Hamali: 0,
    HandelingCharge: 0,
    totalcost: 0,
    discount: 0,
    advance: 0,
    finalcost: 0
  }


  constructor(private http: HttpClient) { }

  addOrder(data: any): Observable<any> {
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
  });
    const url = `https://transportsystemapi.azurewebsites.net/add/order`; // Adjust the URL for submitting data
    return this.http.post(url, data,{headers});

  }

}
