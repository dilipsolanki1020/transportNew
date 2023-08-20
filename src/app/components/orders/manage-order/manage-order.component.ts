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
  constructor(private orderService : OrderDataService){}
ngOnInit(): void {
  this.orders = this.orderService.getOrders();
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
