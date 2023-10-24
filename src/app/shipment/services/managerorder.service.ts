import { Injectable } from '@angular/core';
import { OrdercreationService } from '../create-order/ordercreation.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerorderService {
  public orders: any = [
    {
      OrderId: 21,
      SenderName: 'John Doe',
      SenderAddress1: '123 Main St',
      SenderContact1: '555-123-4567',
      RecieverName: 'Jane Smith',
      RecieverAddress1: '456 Elm St',
      RecieverContact1: '555-987-6543',
      RecieverCity: 'Sampleville',
      PackageType: 'Sample Item',
      Weight: '5 lbs',
      Quantity: 2
    }
    // {
    //   orderId: 4,
    //   senderName: 'Grace Lee',
    //   senderAddress: '678 Birch St',
    //   senderContactNumber: '555-999-0000',
    //   receiverName: 'David Turner',
    //   receiverAddress: '909 Maple St',
    //   receiverContactNumber: '555-123-7890',
    //   city: 'Test Springs',
    //   title: 'Testing Item',
    //   weight: '1.5 lbs',
    //   dimensions: '5x5x5 inches',
    //   quantity: 1
    // },
    // {
    //   orderId: 5,
    //   senderName: 'Oliver White',
    //   senderAddress: '111 Pine St',
    //   senderContactNumber: '555-444-3333',
    //   receiverName: 'Emma Davis',
    //   receiverAddress: '222 Oak St',
    //   receiverContactNumber: '555-222-1111',
    //   city: 'Sample City',
    //   title: 'Sample Product',
    //   weight: '4 lbs',
    //   dimensions: '9x7x5 inches',
    //   quantity: 2
    // },
    // {
    //   orderId: 6,
    //   senderName: 'Sophia Adams',
    //   senderAddress: '333 Oak St',
    //   senderContactNumber: '555-666-7777',
    //   receiverName: 'Liam Harris',
    //   receiverAddress: '444 Elm St',
    //   receiverContactNumber: '555-888-9999',
    //   city: 'Testington',
    //   title: 'Test Item 1',
    //   weight: '2.2 lbs',
    //   dimensions: '7x5x4 inches',
    //   quantity: 1
    // },
    // {
    //   orderId: 7,
    //   senderName: 'Ava Clark',
    //   senderAddress: '555 Pine St',
    //   senderContactNumber: '555-777-1111',
    //   receiverName: 'Noah Baker',
    //   receiverAddress: '777 Birch St',
    //   receiverContactNumber: '555-333-0000',
    //   city: 'Sample Springs',
    //   title: 'Sample Widget',
    //   weight: '3.8 lbs',
    //   dimensions: '8x6x6 inches',
    //   quantity: 3
    // },
    // {
    //   orderId: 8,
    //   senderName: 'Olivia Turner',
    //   senderAddress: '888 Cedar St',
    //   senderContactNumber: '555-222-4444',
    //   receiverName: 'Ethan Coleman',
    //   receiverAddress: '999 Willow St',
    //   receiverContactNumber: '555-111-9999',
    //   city: 'Testville',
    //   title: 'Testing Gizmo',
    //   weight: '1.7 lbs',
    //   dimensions: '6x5x3 inches',
    //   quantity: 2
    // },
    // {
    //   orderId: 9,
    //   senderName: 'Lucas Hill',
    //   senderAddress: '222 Elm St',
    //   senderContactNumber: '555-999-8888',
    //   receiverName: 'Mia Rogers',
    //   receiverAddress: '111 Oak St',
    //   receiverContactNumber: '555-444-7777',
    //   city: 'Example Springs',
    //   title: 'Example Tool',
    //   weight: '4.5 lbs',
    //   dimensions: '9x7x6 inches',
    //   quantity: 1
    // },
    // {
    //   orderId: 10,
    //   senderName: 'Harper Price',
    //   senderAddress: '333 Birch St',
    //   senderContactNumber: '555-666-5555',
    //   receiverName: 'Logan Powell',
    //   receiverAddress: '444 Pine St',
    //   receiverContactNumber: '555-888-6666',
    //   city: 'Sampletown',
    //   title: 'Sample Device',
    //   weight: '2.9 lbs',
    //   dimensions: '7x6x5 inches',
    //   quantity: 1
    // }

    // Add more sample orders here if needed
  ];


  constructor(
    private ordercreationService: OrdercreationService
  ) { }

  getOrders() {
    return this.orders;
  }

  updateOrder(updatedOrder: any) {
    const index = this.orders.findIndex((order: { orderId: any; }) => order.orderId === updatedOrder.orderId);
    console.log(index)
    console.log("before prepareing Update")
    console.log(this.ordercreationService.shipmentcost,this.ordercreationService.shipmentDetails,this.ordercreationService.senderDetails)
    this.prepareUpdate(updatedOrder)
    console.log("After prepareing Update")
    console.log(this.ordercreationService.shipmentcost,this.ordercreationService.shipmentDetails,this.ordercreationService.senderDetails)
  }

  prepareUpdate(order: any) {
    this.ordercreationService.shipmentDetails.OrderId = order.OrderId;
    this.ordercreationService.shipmentDetails.goodsType = order.PackageType;
    this.ordercreationService.shipmentDetails.quantity = order.Quantity;
    this.ordercreationService.shipmentDetails.invoiceNumber = order.InoviceNumber;
    this.ordercreationService.shipmentDetails.specialRequirements = order.Remarks
    this.ordercreationService.shipmentDetails.dimensionsL = order.DimensionL
    this.ordercreationService.shipmentDetails.dimensionsW = order.DimensionB
    this.ordercreationService.shipmentDetails.dimensionsH = order.DimensionH
    this.ordercreationService.shipmentDetails.weight = order.Weight
    this.ordercreationService.senderDetails.id = order.SenderId
    this.ordercreationService.senderDetails.name = order.SenderName
    this.ordercreationService.senderDetails.email = order.SenderEmail
    this.ordercreationService.senderDetails.address1 = order.SenderAddress1
    this.ordercreationService.senderDetails.address2 = order.SenderAddress2
    this.ordercreationService.senderDetails.state = order.SenderState
    this.ordercreationService.senderDetails.city = order.SenderCity
    this.ordercreationService.senderDetails.pincode = order.SenderPIN
    this.ordercreationService.senderDetails.contact = order.SenderContact1
    this.ordercreationService.senderDetails.contact = order.SenderContact2
    this.ordercreationService.receiverDetails.id = order.RevieverId
    this.ordercreationService.receiverDetails.name = order.RecieverName
    this.ordercreationService.receiverDetails.email = order.RecieverEmail
    this.ordercreationService.receiverDetails.address1 = order.RecieverAddress1
    this.ordercreationService.receiverDetails.address2 = order.RecieverAddress2
    this.ordercreationService.receiverDetails.state = order.RecieverState
    this.ordercreationService.receiverDetails.city = order.RecieverCity
    this.ordercreationService.receiverDetails.pincode = order.RecieverPIN
    this.ordercreationService.receiverDetails.contact = order.RecieverContact1
    this.ordercreationService.receiverDetails.contact = order.RecieverContact2
    this.ordercreationService.shipmentcost.ShipmentCost = order.ShipmentCost
    this.ordercreationService.shipmentcost.PackagingCost = order.PackagingCost
    this.ordercreationService.shipmentcost.HandelingCharge = order.HandelingCharge
    this.ordercreationService.shipmentcost.Hamali = order.Hamali
    this.ordercreationService.shipmentcost.paymentMode = order.PaymentMode
    this.ordercreationService.shipmentcost.paymentType = order.PaymentType
    this.ordercreationService.shipmentcost.discount = order.Discount
    this.ordercreationService.shipmentcost.advance = order.AdvancePayment
    this.ordercreationService.shipmentcost.finalcost = order.FinalAmount
  }

  deleteOrder(orderToDelete: any) {
    this.orders = this.orders.filter((order: { orderId: any; }) => order.orderId !== orderToDelete.orderId);
  }

  addOrder(orderData: any) {
    this.orders.push(orderData);
    console.log(this.orders)
  }


}
