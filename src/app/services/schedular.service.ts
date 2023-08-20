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
  private orders = [
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
      cityId: 1,
      orderWeight: '150',
      orderStatus: 'Shipped',
    },
    {
      orderId: 4,
      cityId: 1,
      orderWeight: '500',
      orderStatus: 'Pending',
    },
    {
      orderId: 5,
      cityId: 1,
      orderWeight: '250',
      orderStatus: 'Delivered',
    },
    {
      orderId: 6,
      cityId: 2,
      orderWeight: '180',
      orderStatus: 'Shipped',
    },
    {
      orderId: 7,
      cityId: 2,
      orderWeight: '300',
      orderStatus: 'Pending',
    },
    // ... and so on
  ];
  private drivers = [
    {
      vehicleId: 1,
      vehicleNumber: 'MH-12-DM-6373',
      vehicleDriverName: 'John Alan',
      vehicleDriverContact: '555-123-4567',
      vehicleCapacity: '3000',
      assignedOrders: [] // Initialize assignedOrders property
    },
    {
      vehicleId: 2,
      vehicleNumber: 'KA-19-DY-6971',
      vehicleDriverName: 'Brad Musk',
      vehicleDriverContact: '565-183-4787',
      vehicleCapacity: '5000',
      assignedOrders: [] // Initialize assignedOrders property
    }
  ];

  private cities = [
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
  ];


  constructor() { 
    this.drivers.forEach(driver => {
      driver.assignedOrders = [];
    });
    this.assignOrdersToDriver(1, [1, 3]); // Assign orders with IDs 1 and 3 to driver with ID 1
    this.assignOrdersToDriver(2, [2, 4]); // Assign orders with IDs 2 and 4 to driver with ID 2
  }
  

  getAllDrivers() {
    return this.drivers;
  }

  getDriverById(id: number) {
    return this.drivers.find(driver => driver.vehicleId === id);
  }

  getAllCities() {
    return this.cities;
  }

  getCityById(id: number) {
    return this.cities.find(city => city.cityId === id);
  }

  getOrdersForCity(cityId: number) {
    return this.orders.filter(order => order.cityId === cityId);
  }

  assignOrdersToDriver(driverId: number, orderIds: number[]) {
    // const driver = this.drivers.find(driver => driver.vehicleId === driverId);
    // if (driver) {
    //   const assignedOrders = this.orders.filter(order => orderIds.includes(order.orderId));
    //   driver.assignedOrders = assignedOrders;
    // }
  }
}
