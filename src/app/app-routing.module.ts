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
import { ManageOrderComponent } from './components/orders/manage-order/manage-order.component';

const routes: Routes = [
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
      { path: 'manage-order', component: ManageOrderComponent },
      
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
