import { Component, OnInit } from '@angular/core';
import { OrderDataService ,Order} from 'src/app/services/order-data.service';
// import { Order } from './order.model';
@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {
  orders!: Order[];
  selectedOrder: Order | null = null;
  isEditMode: boolean = false;
  searchTerm: string = '';
  filteredOrders: Order[] = [];
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private orderService : OrderDataService){}
ngOnInit(): void {
  this.orders = this.orderService.getOrders();
  this.filteredOrders = [...this.orders];
  this.totalPages = Math.ceil(this.orders.length / this.itemsPerPage);
  this.updateFilteredOrders();
}
searchOrders() {
  this.filteredOrders = this.orders.filter(order =>
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
showOrderDetails(order: Order) {
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
    this.orderService.updateOrder(this.selectedOrder);
  }
  this.toggleEditMode();
}

deleteOrder() {
  if (this.selectedOrder) {
    const confirmation = confirm('Are you sure you want to delete this order?');
    if (confirmation) {
      this.orderService.deleteOrder(this.selectedOrder);
      this.selectedOrder = null;
    }
  }
}

}
