import { Component, OnInit } from '@angular/core';
import { SchedularService } from 'src/app/services/schedular.service';
@Component({
  selector: 'app-schedule-order',
  templateUrl: './schedule-order.component.html',
  styleUrls: ['./schedule-order.component.css']
})
export class ScheduleOrderComponent implements OnInit {
  vehicles!: any[];
  cities!: any[];
  selectedVehicleId!: number;
  selectedVehicle: any = {};
  selectedCity: any;
  selectedCityOrders: any[] = [];
  constructor(private dataService: SchedularService) { }

  ngOnInit() {
    this.vehicles = this.dataService.getAllDrivers();
    this.cities = this.dataService.getAllCities();
  }

  onVehicleChange() {
    this.selectedVehicle = this.dataService.getDriverById(this.selectedVehicleId);

    // Initialize assignedOrders if it doesn't exist
    // if (!this.selectedVehicle.assignedOrders) {
    //   this.selectedVehicle.assignedOrders = [];
    // }

    // this.selectedCityOrders = this.selectedVehicle.assignedOrders;
  }

  onCitySelect(city: any) {
    this.selectedCity = city;
    this.selectedCityOrders = this.dataService.getOrdersForCity(city.cityId);
    this.selectedCityOrders.forEach(order => order.selected = false);
  }

  toggleOrderSelection(order: any) {
    order.selected = !order.selected;
  }

  assignSelectedOrders() {
    const selectedOrders = this.selectedCityOrders.filter(order => order.selected);
    this.selectedVehicle.assignedOrders = [...(this.selectedVehicle.assignedOrders || []), ...selectedOrders];
    selectedOrders.forEach(order => {
      const index = this.selectedCityOrders.indexOf(order);
      if (index !== -1) {
        this.selectedCityOrders.splice(index, 1);
      }
    });
  }
}
