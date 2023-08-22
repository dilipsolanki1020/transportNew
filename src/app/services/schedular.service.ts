import { Injectable } from '@angular/core';

interface Driver {
  vehicleId: number;
  vehicleNumber: string;
  vehicleDriverName: string;
  vehicleDriverContact: string;
  vehicleCapacity: string;
  assignedOrders: Order[]; // Explicitly type assignedOrders property
}

interface Order {
  orderId: number;
  cityId: number;
  orderWeight: string;
  orderStatus: string;
}

@Injectable({
  providedIn: 'root'
})
export class SchedularService {
  private drivers: any[] = [
    {
      vehicleId: 1,
      vehicleNumber: 'MH-12-DM-6373',
      vehicleDriverName: 'John Alan',
      vehicleDriverContact: '555-123-4567',
      vehicleCapacity: '3000',
      assignedOrders: [1, 3] // Sample assigned orders' IDs
    },
    {
      vehicleId: 2,
      vehicleNumber: 'KA-19-DY-6971',
      vehicleDriverName: 'Brad Musk',
      vehicleDriverContact: '565-183-4787',
      vehicleCapacity: '5000',
      assignedOrders: [2, 4] // Sample assigned orders' IDs
    }
    // ... (other drivers data)
  ];

  private cities: any[] = [
    {
      cityId: 1,
      cityName: 'Mumbai',
      cityTotalOrders: '56',
      cityTotalWeight: '5000',
    },
    {
      cityId: 2,
      cityName: 'Solapur',
      cityTotalOrders: '56',
      cityTotalWeight: '5000',
    }
    // ... (other cities data)
  ];


  private orders: any[] = [
    {
      orderId: 1,
      cityId: 1,
      orderWeight: '200',
      orderStatus: 'Pending',
    },
    {
      orderId: 2,
      cityId: 1,
      orderWeight: '350',
      orderStatus: 'Delivered',
    },
    {
      orderId: 3,
      cityId: 2,
      orderWeight: '150',
      orderStatus: 'Shipped',
    },
    {
      orderId: 4,
      cityId: 2,
      orderWeight: '500',
      orderStatus: 'Pending',
    },
    {
      orderId: 5,
      cityId: 1,
      orderWeight: '500',
      orderStatus: 'Pending',
    },
    // ... (other orders data)
  ];




  constructor() { 

  }
  
getDrivers(): any[] {
    return this.drivers;
  }

  getCities(): any[] {
    return this.cities;
  }

  getOrders(): any[] {
    return this.orders;
  }

  getOrdersForCity(cityId: number): any[] {
    return this.orders.filter(order => order.cityId == cityId);
  }

  setAssignedOrders(driverId: number, orderIds: number[]): void {
    console.log('setAssignedOrders called with driverId:', driverId, 'orderIds:', orderIds);
    const driver = this.drivers.find(driver => driver.vehicleId === driverId);
    if (driver) {
      console.log('Driver found:', driver);
      driver.assignedOrders = orderIds;
      console.log('Driver after assignment:', driver);
    }
  }

  getOrdersByIds(orderIds: number[]): any[] {
    if (!orderIds || !Array.isArray(orderIds)) {
      return []; // Return an empty array if orderIds is not valid
    }
    return this.orders.filter(order => orderIds.includes(order.orderId));
  }
}
