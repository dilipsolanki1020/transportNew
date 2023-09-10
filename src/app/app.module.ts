import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TrackOrderComponent } from './components/track-order/track-order.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CreateOrderComponent } from './components/load-creator/create-order/create-order.component';
import { ManageCustomersComponent } from './components/load-creator/manage-customers/manage-customers.component';
import { ScheduleOrderComponent } from './components/load-creator/schedule-order/schedule-order.component';
import { ManageDriversComponent } from './components/load-creator/manage-drivers/manage-drivers.component';
import { VerifyDeliveryComponent } from './components/load-scheduler/verify-delivery/verify-delivery.component';
import { MarkReceivedComponent } from './components/forwarder/mark-received/mark-received.component';
import { MarkDeliveredComponent } from './components/forwarder/mark-delivered/mark-delivered.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardMenuComponent } from './components/admin/dashboard-menu/dashboard-menu.component';
import { ManageOrderComponent } from './components/orders/manage-order/manage-order.component';
import { NgxBarcode6Module } from 'ngx-barcode6';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackOrderComponent,
    LoginComponent,
    CreateOrderComponent,
    ManageCustomersComponent,
    ScheduleOrderComponent,
    ManageDriversComponent,
    VerifyDeliveryComponent,
    MarkReceivedComponent,
    MarkDeliveredComponent,
    DashboardComponent,
    DashboardMenuComponent,
    ManageOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxBarcode6Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
