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
    public driverName: string,
    public driverConatct: string,
    public assignedOrders: number[],
    public splitQuantity?: number
  ) {}
}

export class Order {
  [x: string]: any;
  constructor(
    public orderId: number,
    public cityId: number,
    public orderWeight: string,
    public quantity : number,
    public orderStatus: string,
    public selected: boolean = false // Default to false
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class SchedularService {


  private drivers: Driver[] = [
    new Driver(1, 'MH-12-DM-6373', '3000','dilip','123456789', [1, 3]),
    new Driver(2, 'KA-19-DY-6971', '5000','yash','87846789', [2, 4]),
    // Add more drivers as needed
  ];

  private orders: Order[] = [
    new Order(1, 1, '200', 150,'Pending'),
    new Order(2, 1, '350', 200,'Delivered'),
    new Order(3, 2, '150', 300,'Shipped'),
    new Order(4, 2, '500',50, 'Pending'),
    new Order(5, 1, '150',60, 'Shipped'),
    new Order(6, 3, '500', 70,'Pending'),
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
  addOrders(newOrders: Order[]): void {
    // You can add additional logic here, such as checking for duplicates
    // before adding the orders to the array.
    
    this.orders.push(...newOrders);
  }

  getOrdersForCity(cityId: number): Order[] {
    return this.orders.filter(order => order.cityId == cityId);
  }

  getOrdersByIds(orderIds: number[]): Order[] {
    return this.orders.filter(order => orderIds.includes(order.orderId));
  }


  getAssignedOrder(cityId:Number):Order[]{
    return this.orders.filter(order => order.cityId == cityId);
  }

  setAssignedOrders(driverId: number, orderIds: number[]): void {
    console.log(driverId,orderIds)
    const driver = this.drivers.find(driver => driver.vehicleId == driverId);
    console.log(driver)
    if (driver) {
      orderIds.forEach(order =>{
        driver.assignedOrders.push(order)
      })
     
    }
  }

  assignOrdersToVehicle(driverId: number, orderIds: number[]): void {
    const driver = this.drivers.find(driver => driver.vehicleId === driverId);
    if (driver) {
      driver.assignedOrders = [...new Set([...driver.assignedOrders, ...orderIds])];
    }
  }

  // New method to unassign orders from a vehicle
  unassignOrdersFromVehicle(driverId: number, orderIds: number[]): void {
    const driver = this.drivers.find(driver => driver.vehicleId === driverId);
    if (driver) {
      driver.assignedOrders = driver.assignedOrders.filter(orderId => !orderIds.includes(orderId));
    }
  }
}
