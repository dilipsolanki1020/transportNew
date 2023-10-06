import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './create-order/order-details/order-details.component';
import { ShippingInfoComponent } from './create-order/shipping-info/shipping-info.component';
import { CostCalculationComponent } from './create-order/cost-calculation/cost-calculation.component';
import { OrderSubmissionComponent } from './create-order/order-submission/order-submission.component';
import { FormsModule } from '@angular/forms';
import { ScheduleorderComponent } from './scheduleorder/scheduleorder.component';
import { BrowserModule } from '@angular/platform-browser';
import { ManageOrdersComponent } from './manage-order/manage-order.component';
@NgModule({
  declarations: [
    OrderDetailsComponent,
    ShippingInfoComponent,
    CostCalculationComponent,
    OrderSubmissionComponent,
    ScheduleorderComponent,
    ManageOrdersComponent
  ],
  imports: [
    
    CommonModule,
    FormsModule,
    BrowserModule,
  ]
})
export class ShipmentModule { }
