
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduleorder',
  templateUrl: './scheduleorder.component.html',
  styleUrls: ['./scheduleorder.component.css']
})
export class ScheduleorderComponent implements OnInit {
  vehicles: any[] = []; // Array to store vehicles
  unassignedOrders: any[] = []; // Array to store unassigned orders
  selectedVehicle: any = null; // To store the selected vehicle
  temporarilyAssignedOrders: any[] = []; // Array to store temporarily assigned orders
  validationMessage: string = ''; // Validation message
  filterOption: string = 'all'; // Default filter option
  searchQuery: string = ''; // Search query input

  ngOnInit(): void {
    // Initialize vehicles and orders data (you can fetch this data from your API)
    this.vehicles = [
      { id: 1, vehicleNumber: 'V-001', capacity: '10 tons', assignedOrders: [] },
      { id: 2, vehicleNumber: 'V-002', capacity: '5 tons', assignedOrders: [] },
      // Add more vehicles as needed
    ];

    this.unassignedOrders = [
      { id: 1, customerName: 'Customer 1', priority: 'High', selected: false },
      { id: 2, customerName: 'Customer 2', priority: 'Medium', selected: false },
      // Add more orders as needed
    ];
  }

  
  createSchedule(): void {
    if (this.selectedVehicle && this.temporarilyAssignedOrders.length > 0) {
      // Move temporarily assigned orders to the selected vehicle's assignedOrders
      this.selectedVehicle.assignedOrders.push(...this.temporarilyAssignedOrders);
  
      // Remove the assigned orders from the unassignedOrders list
      this.unassignedOrders = this.unassignedOrders.filter(order => !order.selected);
  
      // Clear the temporarily assigned orders array
      this.temporarilyAssignedOrders = [];
  
      // Clear the validation message when the schedule is created
      this.clearValidationMessage();
  
      // Clear the selection after scheduling
      this.selectedVehicle = null;
    } else {
      // Display a validation message
      this.displayValidationMessage();
    }
  }


  // Handle assigning an order to the scheduling board
  assignOrder(order: any): void {
    if (order.selected) {
      // Add the order to the temporarily assigned orders
      this.temporarilyAssignedOrders.push(order);
    } else {
      // Remove the order from the temporarily assigned orders if unchecked
      this.temporarilyAssignedOrders = this.temporarilyAssignedOrders.filter(
        assignedOrder => assignedOrder.id !== order.id
      );
    }
  }


  get filteredUnassignedOrders(): any[] {
    return this.unassignedOrders.filter(order => {
      // Filter by filter option
      if (this.filterOption === 'all') {
        return true; // Show all orders
      } else if (this.filterOption === 'priorityHigh') {
        return order.priority === 'High';
      } else if (this.filterOption === 'priorityMedium') {
        return order.priority === 'Medium';
      } else if (this.filterOption === 'priorityLow') {
        return order.priority === 'Low';
      }
  
      // Filter by search query (customerName contains the search query)
      return order.customerName.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }



  clearValidationMessage(): void {
    this.validationMessage = '';
  }

  displayValidationMessage(): void {
    this.validationMessage = 'Please select a vehicle before assigning orders.';
  }
}
