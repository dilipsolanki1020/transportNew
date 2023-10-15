import { Component, OnInit } from '@angular/core';
import { OrderDataService ,Order} from 'src/app/services/order-data.service';
// import { Order } from './order.model';
import { ManagerorderService } from '../services/managerorder.service';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})




// @Component({
//   selector: 'app-manage-orders',
//   templateUrl: './manage-orders.component.html',
//   styleUrls: ['./manage-orders.component.css']
// })
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

){}
  ngOnInit(): void {
    this.orders = this.manageorder.getOrders();
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
  
  saveOrderDetails() {
  
    if (this.selectedOrder) {
      // this.manageorder.updateOrder(this.selectedOrder);
    }
    this.toggleEditMode();
  }

  deleteOrder() {
    if (this.selectedOrder) {
      const confirmation = confirm('Are you sure you want to delete this order?');
      if (confirmation) {
        // this.manageorder.deleteOrder(this.selectedOrder);
        this.selectedOrder = null;
      }
    }
  }


}
