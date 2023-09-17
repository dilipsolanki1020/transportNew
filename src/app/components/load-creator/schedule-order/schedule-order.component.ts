import { Component } from '@angular/core';
import { SchedularService, City, Driver, Order } from 'src/app/services/schedular.service';
import { PdfService } from 'src/app/services/pdf-service.service';
@Component({
  selector: 'app-schedule-order',
  templateUrl: './schedule-order.component.html',
  styleUrls: ['./schedule-order.component.css']
})
export class ScheduleOrderComponent {
  cities: City[] = [];
  vehicles: Driver[] = [];
  selectedCity: City | undefined;
  selectedVehicle: Driver | undefined;
  assignedOrder: Order | undefined;
  ordersForSelectedCity: Order[] = [];
  assignedOrders!: Order[];
  selectedVehicle1: Driver | undefined;
  selectedOrders: Order[] = [];
  cityData: City | undefined;
  selectedVehicleData: Driver | undefined;
  
  // assignedOrder: Order | undefined;
  constructor(public dataService: SchedularService,
    public pdfService : PdfService
    ) {
    this.cities = this.dataService.getCities();
    this.vehicles = this.dataService.getDrivers();
    
  }

  onCitySelected(): void {
    this.selectedVehicle = undefined;
    this.assignedOrder = undefined;
    let id:any = this.selectedCity
    this.cityData = this.cities.find(city => city.cityId == id)
   
    this.ordersForSelectedCity = this.dataService.getOrdersForCity(id);
  }

  onVehicleSelected(): void {
    let id: any =  this.selectedVehicle ;
    console.log("on vs",id)
    this.selectedVehicleData = this.vehicles.find(vehicle => vehicle.vehicleId == id);
    if (this.selectedVehicleData) {
      this.assignedOrders = this.dataService.getOrdersByIds(this.selectedVehicleData.assignedOrders);
      this.ordersForSelectedCity.forEach(order =>{
         order.selected = this.assignedOrders.includes(order);
      })
    }
  }

  unassignOrdersFromVehicle(): void {
    const unassignedOrderIds = this.ordersForSelectedCity
      .filter(order => !order.selected)
      .map(order => order.orderId);
  
    if (unassignedOrderIds.length > 0 && this.selectedVehicleData?.vehicleId) {
      this.dataService.unassignOrdersFromVehicle(Number(this.selectedVehicleData.vehicleId), unassignedOrderIds);
      this.onVehicleSelected();
    }
  }

  // getCityIdByOrderId(orderId: number): number | undefined {
  //   const order = this.orders.find(order => order.orderId === orderId);
  //   return order ? order.cityId : undefined;
  // }
  
  // getOrderWeightById(orderId: number): string | undefined {
  //   const order = this.orders.find(order => order.orderId === orderId);
  //   return order ? order.orderWeight : undefined;
  // }
  

  // splitOrder(order: Order): void {
  //   const userProvidedQuantity = order['splitQuantity']; // Access splitQuantity with square brackets
  //   const totalOrderQuantity = order.quantity;
  
  //   if (userProvidedQuantity === undefined || userProvidedQuantity <= 0 || userProvidedQuantity >= totalOrderQuantity) {
  //     // Invalid quantity or undefined, do not split the order
  //     return;
  //   }
  
  //   // Check if selectedVehicleData is defined
  //   if (this.selectedVehicleData) {
  //     // Calculate the number of sub-orders required
  //     const numberOfSubOrders = Math.ceil(totalOrderQuantity / userProvidedQuantity);
  
  //     // Split the order into sub-orders
  //     const subOrders: Order[] = [];
  //     let remainingQuantity = totalOrderQuantity;
  
  //     for (let i = 0; i < numberOfSubOrders; i++) {
  //       const subOrderQuantity = Math.min(userProvidedQuantity, remainingQuantity);
  //       const subOrder: Order = {
  //         ...order,
  //         quantity: subOrderQuantity,
  //       };
  
  //       // Create a new Order ID or generate a unique identifier
  //       // Assign this subOrder to a specific vehicle using setAssignedOrders
  //       this.dataService.setAssignedOrders(this.selectedVehicleData.vehicleId, [subOrder.orderId]);
  
  //       subOrders.push(subOrder);
  //       remainingQuantity -= subOrderQuantity;
  //     }
  
  //     // Update the list of orders with the sub-orders
  //     this.dataService.addOrders(subOrders);
  //   }
  // }

  
  // onVehicleSelected(): void {
  //   if (this.selectedVehicleData?.vehicleId) {
  //     this.assignedOrders = this.dataService.getOrdersByIds(this.selectedVehicleData.assignedOrders);
  //     this.ordersForSelectedCity.forEach(order => {
  //       order.selected = this.assignedOrders.some(assignedOrder => assignedOrder.orderId === order.orderId);
  //     });
  //   }
  // }
  
  

  getCityName(cityId: number): string {
    const city = this.cities.find(city => city.cityId === cityId);
    return city ? city.cityName : '';
  }


  assignOrdersToVehicle(): void {
    const selectedOrderIds = this.ordersForSelectedCity
      .filter(order => order.selected)
      .map(order => order.orderId);
  
    if (selectedOrderIds.length > 0 && this.selectedVehicleData?.vehicleId) {
      // Get the currently assigned order IDs for the selected vehicle
      const assignedOrderIds = this.selectedVehicleData.assignedOrders || [];
  
      // Identify newly selected orders and orders to be unassigned
      const ordersToAssign = selectedOrderIds.filter(orderId => !assignedOrderIds.includes(orderId));
      const ordersToUnassign = assignedOrderIds.filter(orderId => !selectedOrderIds.includes(orderId));
  
      // Assign newly selected orders to the vehicle
      this.dataService.setAssignedOrders(Number(this.selectedVehicleData.vehicleId), ordersToAssign);
  
      // Unassign orders that were deselected
      this.dataService.unassignOrdersFromVehicle(Number(this.selectedVehicleData.vehicleId), ordersToUnassign);
  
      // Update the list of selected orders
      this.ordersForSelectedCity = this.ordersForSelectedCity.map(order => {
        if (ordersToAssign.includes(order.orderId)) {
          order.selected = true;
        } else if (ordersToUnassign.includes(order.orderId)) {
          order.selected = false;
        }
        return order;
      });
  
      this.onVehicleSelected();
      //to generate pdf
      // this.pdfService.generatePdf(this.assignedOrders, this.selectedVehicleData);
      
      // let html = this.pdfService.generateHtmlPdf(this.assignedOrders, this.selectedVehicleData);
      // this.pdfService.downloadPdf(html);
    }
  }
  
}
