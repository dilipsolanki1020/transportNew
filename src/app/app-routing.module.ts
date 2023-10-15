import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { MarkDeliveredComponent } from './components/forwarder/mark-delivered/mark-delivered.component';
import { MarkReceivedComponent } from './components/forwarder/mark-received/mark-received.component';
import { HomeComponent } from './components/home/home.component';
import { CreateOrderComponent } from './components/load-creator/create-order/create-order.component';
import { ManageCustomersComponent } from './components/load-creator/manage-customers/manage-customers.component';
import { ManageDriversComponent } from './components/load-creator/manage-drivers/manage-drivers.component';
import { ScheduleOrderComponent } from './components/load-creator/schedule-order/schedule-order.component';
import { VerifyDeliveryComponent } from './components/load-scheduler/verify-delivery/verify-delivery.component';
import { TrackOrderComponent } from './components/track-order/track-order.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ManageOrdersComponent } from './shipment/manage-order/manage-order.component';
import { AppComponent } from './app.component';
import { CostCalculationComponent } from './shipment/create-order/cost-calculation/cost-calculation.component';
import { OrderDetailsComponent } from './shipment/create-order/order-details/order-details.component';
import { OrderSubmissionComponent } from './shipment/create-order/order-submission/order-submission.component';
import { ShippingInfoComponent } from './shipment/create-order/shipping-info/shipping-info.component';
import { ScheduleorderComponent } from './shipment/scheduleorder/scheduleorder.component';
const routes: Routes = [
  {
    path: 'shipment',
    component: AppComponent,
    // canActivate: [AuthGuard], // Add authentication guard if needed
    children: [
      { path: 'create-order', component: OrderDetailsComponent },
      { path: 'shippinginfo', component: ShippingInfoComponent },
      { path: 'costing', component: CostCalculationComponent },
      { path: 'order-submission', component: OrderSubmissionComponent },
      { path: 'schedule-order', component: ScheduleorderComponent },
      { path: 'manage-order', component: ManageOrdersComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'track-order', component: TrackOrderComponent },
  { path: 'login', component: LoginComponent },
  
  // Load Creator Routes
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard], // Add authentication guard if needed
    children: [
      { path: 'create-order', component: CreateOrderComponent },
      { path: 'manage-customers', component: ManageCustomersComponent },
      { path: 'schedule-order', component: ScheduleOrderComponent },
      { path: 'manage-drivers', component: ManageDriversComponent },
      // { path: 'manage-order', component: ManageOrderComponent },
      
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  
  // Load Scheduler Routes
  {
    path: 'load-scheduler',
    // canActivate: [AuthGuard],
    children: [
      { path: 'verify-delivery', component: VerifyDeliveryComponent },
      { path: '', redirectTo: 'verify-delivery', pathMatch: 'full' },
    ]
  },
  
  // Forwarder Routes
  {
    path: 'forwarder',
    // canActivate: [AuthGuard],
    children: [
      { path: 'mark-received', component: MarkReceivedComponent },
      { path: 'mark-delivered', component: MarkDeliveredComponent },
      { path: '', redirectTo: 'mark-received', pathMatch: 'full' },
    ]
  },
  
  // Admin Routes
  // {
  //   path: 'admin',
  //   // canActivate: [AuthGuard],
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //   ]
  // },
  
  // Fallback for invalid routes
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
