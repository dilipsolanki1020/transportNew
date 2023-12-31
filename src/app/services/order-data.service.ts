import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  public orders: Order[] = [
    {
      orderId: 1,
      senderName: 'John Doe',
      senderAddress: '123 Main St',
      senderContactNumber: '555-123-4567',
      receiverName: 'Jane Smith',
      receiverAddress: '456 Elm St',
      receiverContactNumber: '555-987-6543',
      city: 'Sampleville',
      title: 'Sample Item',
      weight: '5 lbs',
      dimensions: '10x8x6 inches',
      quantity: 2
    },
    {
      orderId: 2,
      senderName: 'Alice Johnson',
      senderAddress: '789 Oak St',
      senderContactNumber: '555-555-5555',
      receiverName: 'Bob Brown',
      receiverAddress: '101 Pine St',
      receiverContactNumber: '555-111-2222',
      city: 'Testburg',
      title: 'Test Product',
      weight: '2.5 lbs',
      dimensions: '6x6x6 inches',
      quantity: 1
    }
    // Add more sample orders here if needed
  ];

  constructor() { }


  addOrder(order: Order) {
    this.orders.push(order);
  }

  getOrders() {
    return this.orders;
  }

  updateOrder(updatedOrder: Order) {
    const index = this.orders.findIndex(order => order.orderId === updatedOrder.orderId);
    if (index !== -1) {
      this.orders[index] = updatedOrder;
    }
  }

  deleteOrder(orderToDelete: Order) {
    this.orders = this.orders.filter(order => order.orderId !== orderToDelete.orderId);
  }
}

export interface Order {
  orderId: number;
  senderName: string;
  senderAddress: string;
  senderContactNumber: string;
  receiverName: string;
  receiverAddress: string;
  receiverContactNumber: string;
  city: string;
  title: string;
  weight: string;
  dimensions: string;
  quantity: number;
}
