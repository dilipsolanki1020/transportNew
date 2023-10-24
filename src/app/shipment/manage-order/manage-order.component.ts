import { Component, OnInit } from '@angular/core';
import { ManagerorderService } from '../services/managerorder.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})

export class ManageOrdersComponent  implements OnInit {
  orders: any;
  selectedOrder: any;;
  isEditMode: boolean = false;
  searchTerm: string = '';
  filteredOrders: any;
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;
constructor(
private manageorder:ManagerorderService,
private router : Router
){}
  ngOnInit(): void {
    this.orders = this.manageorder.getOrders();
    console.log(this.orders)
    this.filteredOrders = [...this.orders];
    this.totalPages = Math.ceil(this.orders.length / this.itemsPerPage);
    this.updateFilteredOrders();
  }

  searchOrders() {
    this.filteredOrders = this.orders.filter((order: { senderName: string; receiverName: string; city: string; }) =>
      order.senderName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      order.receiverName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      order.city.toLowerCase().includes(this.searchTerm.toLowerCase())
      
    );
  }
  updateFilteredOrders() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.filteredOrders = this.orders.slice(startIndex, endIndex);
  }
  
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateFilteredOrders();
    }
  }
  
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateFilteredOrders();
    }
  }

  showOrderDetails(order: any) {
    this.selectedOrder = order;
  }
  
  clearSelectedOrder() {
    this.selectedOrder = null;
  }
  
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
  
  saveOrderDetails(order: any) {
    // Perform save logic using your manageorder service
    // For example: this.manageorder.updateOrder(order);
  
    order.editing = false;
  }
  

  deleteOrder(order: any) {
    const confirmation = confirm('Are you sure you want to delete this order?');
    if (confirmation) {
      // Perform delete logic using your manageorder service
      // For example: this.manageorder.deleteOrder(order);
  
      this.selectedOrder = null;
    }
  }
  
  toggleOrderDetails(index: number) {
    this.filteredOrders[index].showDetails = !this.filteredOrders[index].showDetails;
  }

  editOrder(order: any) {
    this.manageorder.updateOrder(order)
    
  }

  cancelEdit(order: any) {
    order.editing = false;
  }

  navigate(){
    this.router.navigate(['/shipment/create-order'])
  }

}
