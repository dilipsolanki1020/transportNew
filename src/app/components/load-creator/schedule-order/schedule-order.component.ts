import { Component } from '@angular/core';
import { SchedularService, City, Driver, Order } from 'src/app/services/schedular.service';

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
  
  // assignedOrder: Order | undefined;
  constructor(public dataService: SchedularService) {
    this.cities = this.dataService.getCities();
    this.vehicles = this.dataService.getDrivers();
    
  }

  onCitySelected(): void {
    this.selectedVehicle = undefined;
    this.assignedOrder = undefined;
    let id:any = this.selectedCity
    console.log("cty selected",this.selectedCity)
    // Fetch orders for the selected city
    this.ordersForSelectedCity = this.dataService.getOrdersForCity(id);
    console.log(this.ordersForSelectedCity)
  }

  onVehicleSelected(): void {
    // Fetch vehicle details
    // this.selectedVehicle1 = this.selectedVehicle;
    this.assignedOrder = undefined;
    let id: any =  this.selectedVehicle ;
    const selectedVehicle = this.vehicles.find(vehicle => vehicle.vehicleId == id);
    console.log("vehicle selected",selectedVehicle)
    // if (selectedVehicle) {
    //   this.selectedVehicle = selectedVehicle;
    //   // Fetch assigned order for the selected vehicle
    //   this.assignedOrder = this.dataService.getOrdersByIds(selectedVehicle.assignedOrders)[0];
    // }

    if (selectedVehicle) {
      this.selectedVehicle = selectedVehicle;
      // Fetch assigned orders for the selected vehicle
      this.assignedOrders = this.dataService.getOrdersByIds(selectedVehicle.assignedOrders);
    }
  }
  

  getCityName(cityId: number): string {
    const city = this.cities.find(city => city.cityId === cityId);
    return city ? city.cityName : '';
  }


  assignOrdersToVehicle(): void {
    // this.selectedOrders = this.ordersForSelectedCity;

    
    console.log("length",this.selectedOrders,JSON.stringify(this.ordersForSelectedCity))
    if (this.selectedVehicle  ) {
      console.log("inside assign order")
      const selectedOrderIds = this.ordersForSelectedCity
    .filter(order => order.selected === true)
    .map(order => order.orderId);
    
      console.log(selectedOrderIds)
      // Update assigned orders for the selected vehicle
      this.dataService.setAssignedOrders(this.selectedVehicle.vehicleId, selectedOrderIds);
      
      // Remove selected orders from ordersForSelectedCity
      this.ordersForSelectedCity = this.ordersForSelectedCity.filter(order => !selectedOrderIds.includes(order.orderId));
  
      // Clear selectedOrders array
      this.selectedOrders = [];
    }
  }

  
  
 
}
