import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  private apiUrl = 'your_api_endpoint_here';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any> {
    console.log('get customer called')
    // const url = `${this.apiUrl}/customers`; // Adjust the URL for fetching customers
    // return this.http.get(url);
    return of(sampleCustomers);
  }

  getReceivers(customerId: number): Observable<any> {
    console.log('get reciver called')
    // const url = `${this.apiUrl}/receivers/${customerId}`; // Adjust the URL for fetching receivers
    // return this.http.get(url);

    const selectedReceiver = sampleReceivers.find(receiver => receiver.id === customerId);
    return of(selectedReceiver ? [selectedReceiver] : []); // Return selected receiver or an empty array
  }

  sendDataToApi(data: any): Observable<any> {
    console.log("data before api call",data)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
  });
    const url = `https://6652-103-151-185-76.ngrok.io/addorder`; // Adjust the URL for submitting data
    return this.http.post(url, data,{headers});
    // return of({ success: true, message: 'Data submitted successfully' });
  }



}
export const sampleCustomers = [
  { id: 1, name: 'Customer A', address: 'Address A', contactNumber: '123-456-7890' },
  { id: 2, name: 'Customer B', address: 'Address B', contactNumber: '987-654-3210' },
  // Add more customer objects here
];

export const sampleReceivers = [
  { 
    id: 1, 
    name: 'Receiver X', 
    address: 'Receiver Address X', 
    contactNumber: '111-222-3333',
    cities: ['City A', 'City B', 'City C']
  },
  { 
    id: 2, 
    name: 'Receiver Y', 
    address: 'Receiver Address Y', 
    contactNumber: '444-555-6666',
    cities: ['City D', 'City E', 'City F']
  },
  // Add more receiver objects here
];
