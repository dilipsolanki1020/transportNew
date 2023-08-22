import { Component, OnInit } from '@angular/core';
import { SchedularService } from 'src/app/services/schedular.service';
@Component({
  selector: 'app-schedule-order',
  templateUrl: './schedule-order.component.html',
  styleUrls: ['./schedule-order.component.css']
})
export class ScheduleOrderComponent implements OnInit {
  drivers!: any[];
  cities!: any[];
  selectedDriver: any;
  selectedCity: any;
  selectedOrders: any[] = [];
  ordersForSelectedCity: any[] = [];
  selectedDriverId: any;

  constructor(public dataService: SchedularService) { }

  ngOnInit() {
    this.drivers = this.dataService.getDrivers();
    this.cities = this.dataService.getCities();
  }


  onDriverSelected(): void {
    if (this.selectedDriverId) {
      
      const selectedDriver = this.drivers.find(driver => driver.vehicleId == this.selectedDriverId);
      this.selectedDriver = selectedDriver;
      console.log(selectedDriver);
      if (selectedDriver) {
        const assignedOrderIds = selectedDriver.assignedOrders;
        this.selectedOrders = this.dataService.getOrdersByIds(assignedOrderIds);
      }
    }
  }
  

  onCitySelected(): void {
    if (this.selectedCity) {
      this.ordersForSelectedCity = this.dataService.getOrdersForCity(this.selectedCity);
    }
  }


  

  assignOrdersToVehicle(): void {
    console.log("inside assign",this.ordersForSelectedCity)
    if (this.selectedDriver && this.selectedOrders.length > 0) {
      const selectedCheckedOrders = this.selectedOrders.filter(order => order.selected);
      console.log("inside assign selectedCheckedOrders ",selectedCheckedOrders,this.ordersForSelectedCity)
      if (selectedCheckedOrders.length > 0) {
        const selectedOrderIds = selectedCheckedOrders.map(order => order.orderId);
        
        console.log("Before assignment:", this.selectedDriver);
        console.log(selectedOrderIds);
        
        this.dataService.setAssignedOrders(this.selectedDriver.vehicleId, selectedOrderIds);
    
        // Update the selected orders for the selected driver
        this.selectedDriver.assignedOrders = selectedOrderIds;
        
        console.log("After assignment:", this.selectedDriver);
      }
  
      this.selectedDriver = null;
      this.ordersForSelectedCity = [];
    }
  }

  printDetails(): void {
    if (this.selectedDriver) {
      const driverDetails = `Driver Name: ${this.selectedDriver.vehicleDriverName}\n`
                          + `Driver Contact: ${this.selectedDriver.vehicleDriverContact}`;
  
      const assignedOrders = this.selectedOrders.map(order => `Order ${order.orderId} - Status: ${order.orderStatus}`).join('\n');
  
      const contentToPrint = `${driverDetails}\n\nAssigned Orders:\n${assignedOrders}`;
  
      // Create a temporary hidden element to hold the content
      const printWindow = window.open('', '_blank');
  
      if (printWindow) { // Check if the window was opened successfully
        printWindow.document.write(`<pre>${contentToPrint}</pre>`);
        printWindow.document.close();
  
        // Print the window
        printWindow.print();
      } else {
        console.error("Failed to open print window. Please allow pop-ups and try again.");
      }
    }
  }
  
  
}
