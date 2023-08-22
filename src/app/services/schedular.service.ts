import { Injectable } from '@angular/core';

export class City {
  constructor(
    public cityId: number,
    public cityName: string,
    public cityTotalOrders: number,
    public cityTotalWeight: number
  ) {}
}

export class Driver {
  constructor(
    public vehicleId: number,
    public vehicleNumber: string,
    public vehicleCapacity: string,
    public assignedOrders: number[]
  ) {}
}

export class Order {
  constructor(
    public orderId: number,
    public cityId: number,
    public orderWeight: string,
    public orderStatus: string,
    public selected: boolean = false // Default to false
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class SchedularService {


  private drivers: Driver[] = [
    new Driver(1, 'MH-12-DM-6373', '3000', [1, 3]),
    new Driver(2, 'KA-19-DY-6971', '5000', [2, 4]),
    // Add more drivers as needed
  ];

  private orders: Order[] = [
    new Order(1, 1, '200', 'Pending'),
    new Order(2, 1, '350', 'Delivered'),
    new Order(3, 2, '150', 'Shipped'),
    new Order(4, 2, '500', 'Pending'),
    new Order(5, 1, '150', 'Shipped'),
    new Order(6, 3, '500', 'Pending'),
    // Add more orders as needed
  ];

  private cities: City[] = [
    new City(1, 'City A', 10, 1000),
    new City(2, 'City B', 15, 1500),
    // Add more cities as needed
  ];

  constructor() { }

  getCities(): City[] {
    return this.cities;
  }

  getDrivers(): Driver[] {
    return this.drivers;
  }

  getOrders(): Order[] {
    return this.orders;
  }

  getOrdersForCity(cityId: number): Order[] {
    return this.orders.filter(order => order.cityId == cityId);
  }

  getOrdersByIds(orderIds: number[]): Order[] {
    return this.orders.filter(order => orderIds.includes(order.orderId));
  }

  setAssignedOrders(driverId: number, orderIds: number[]): void {
    const driver = this.drivers.find(driver => driver.vehicleId == driverId);
    if (driver) {
      orderIds.forEach(order =>{
        console.log("assigning order ",order)
        driver.assignedOrders.push(order)
      })
      // driver.assignedOrders.push(orderIds.forEach());
    }
  }
}
