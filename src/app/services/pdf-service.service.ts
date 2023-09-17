// -----------pdfmake start here -----------------
// import { Injectable } from '@angular/core';
// // import pdfMake from 'pdfmake/build/pdfmake';
// // import pdfFonts from 'pdfmake/build/vfs_fonts';

// @Injectable({
//   providedIn: 'root',
// })
// export class PdfService {
//   async generatePdf(assignedOrders: any[], vehicleDetails: any): Promise<void> {
    
//     const pdfMake = await import('pdfmake/build/pdfmake');
//     // const pdfFonts = await import('pdfmake/build/vfs_fonts');
//     // pdfMake.vfs = pdfFonts.pdfMake.vfs;
//     const documentDefinition = {
//       content: [
//         { text: 'Assigned Orders Report', style: 'header' },
//         { text: `Vehicle Number: ${vehicleDetails.vehicleNumber}`, style: 'subheader' },
//         { text: 'Vehicle Details:', style: 'subheader' },
//         {
//           ul: [
//             `Driver Name: ${vehicleDetails.driverName}`,
//             `Driver Contact: ${vehicleDetails.driverContact}`,
//             `Capacity: ${vehicleDetails.vehicleCapacity}`,
//           ],
//         },
//         { text: 'Assigned Orders:', style: 'subheader' },
//         {
//           table: {
//             headerRows: 1,
//             widths: ['auto', '*', 'auto', 'auto'],
//             body: [
//               ['Order ID', 'Order Status', 'Weight (kg)', 'Quantity'],
//               ...assignedOrders.map((order) => [
//                 order.orderId.toString(),
//                 order.orderStatus,
//                 order.orderWeight,
//                 order.quantity.toString(),
//               ]),
//             ],
//           },
//         },
//       ],
//       styles: {
//         header: {
//           // fontSize: 18,
//           bold: true,
//           margin: [0, 0, 0, 10],
//         },
//         subheader: {
//           // fontSize: 14,
//           bold: true,
//           margin: [0, 10, 0, 5],
//         },
//       },
//     };

//     const pdfDoc = pdfMake.createPdf(documentDefinition);
//     pdfDoc.download('assigned_orders_report.pdf'); // This will trigger the download
//   }
// }
// -----------pdfMake ends here -----------------

// ------------------ PDF Lib starts here ----------------
// import { Injectable } from '@angular/core';
// import { PDFDocument, rgb } from 'pdf-lib';

// @Injectable({
//   providedIn: 'root',
// })
// export class PdfService {
//   async generatePdf(assignedOrders: any[], vehicleDetails: any): Promise<void> {
//     try {
//       // Create a new PDF document
//       const pdfDoc = await PDFDocument.create();

//       // Add a new page to the PDF
//       const page = pdfDoc.addPage([600, 400]);

//       // Define font settings
//       // const font = await pdfDoc.embedFont(PDFDocument.Fonts.Helvetica);
//       // const font = await pdfDoc.embedFont(PDFDocument.);
//       // Set text content and styles
//       page.drawText('Assigned Orders Report', {
//         x: 50,
//         y: 350,
//         size: 30,
//         color: rgb(0, 0, 0),
        
//       });

//       // Add vehicle details
//       page.drawText(`Vehicle Number: ${vehicleDetails.vehicleNumber}`, {
//         x: 50,
//         y: 320,
//         size: 16,
        
//       });

//       // Add driver details
//       page.drawText('Vehicle Details:', {
//         x: 50,
//         y: 300,
//         size: 16,
        
//         color: rgb(0, 0, 0),
//       });

//       page.drawText(`Driver Name: ${vehicleDetails.driverName}`, {
//         x: 70,
//         y: 280,
//         size: 14,
//         // font,
//       });

//       page.drawText(`Driver Contact: ${vehicleDetails.driverContact}`, {
//         x: 70,
//         y: 260,
//         size: 14,
//         // font,
//       });

//       page.drawText(`Capacity: ${vehicleDetails.vehicleCapacity}`, {
//         x: 70,
//         y: 240,
//         size: 14,
//         // font,
//       });

//       // Add assigned orders
//     // ...

// // Add assigned orders
// page.drawText('Assigned Orders:', {
//   x: 50,
//   y: 220,
//   size: 16,
//   // font,
//   color: rgb(0, 0, 0),
// });

// // Define table properties
// const tableX = 50;
// const tableY = 120;
// const rowHeight = 20;
// const colWidth = 120;
// const borderWidth = 1;
// const headerBackgroundColor = rgb(0, 0, 0);
// const headerColor = rgb(1, 1, 1);

// // Draw table header
// page.drawRectangle({
//   x: tableX,
//   y: tableY,
//   width: colWidth * 4,
//   height: rowHeight,
//   color: headerBackgroundColor,
// });
// page.drawText('Order ID', {
//   x: tableX + 5,
//   y: tableY + 5,
//   size: 12,
//   color: headerColor,
//   // font,
// });
// page.drawText('Order Status', {
//   x: tableX + colWidth,
//   y: tableY + 5,
//   size: 12,
//   color: headerColor,
//   // font,
// });
// page.drawText('Weight (kg)', {
//   x: tableX + colWidth * 2,
//   y: tableY + 5,
//   size: 12,
//   color: headerColor,
//   // font,
// });
// page.drawText('Quantity', {
//   x: tableX + colWidth * 3,
//   y: tableY + 5,
//   size: 12,
//   color: headerColor,
//   // font,
// });

// // Draw table rows
// assignedOrders.forEach((order, index) => {
//   const rowY = tableY - (index + 1) * rowHeight;
//   page.drawRectangle({
//     x: tableX,
//     y: rowY,
//     width: colWidth * 4,
//     height: rowHeight,
//     borderColor: rgb(0, 0, 0),
//     borderWidth,
//   });
//   page.drawText(order.orderId.toString(), {
//     x: tableX + 5,
//     y: rowY + 5,
//     size: 12,
//     // font,
//   });
//   page.drawText(order.orderStatus, {
//     x: tableX + colWidth,
//     y: rowY + 5,
//     size: 12,
//     // font,
//   });
//   page.drawText(order.orderWeight, {
//     x: tableX + colWidth * 2,
//     y: rowY + 5,
//     size: 12,
//     // font,
//   });
//   page.drawText(order.quantity.toString(), {
//     x: tableX + colWidth * 3,
//     y: rowY + 5,
//     size: 12,
//     // font,
//   });
// });

// // ...


//       // Serialize the PDF to bytes
//       const pdfBytes = await pdfDoc.save();

//       // Create a blob from the PDF bytes
//       const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

//       // Create a URL for the blob
//       const pdfUrl = URL.createObjectURL(pdfBlob);

//       // Create a link to trigger the download
//       const link = document.createElement('a');
//       link.href = pdfUrl;
//       link.download = 'assigned_orders_report.pdf';
//       link.click();

//       // Clean up the URL and blob
//       URL.revokeObjectURL(pdfUrl);
//     } catch (error) {
//       console.error('Error generating and downloading PDF:', error);
//     }
//   }
// }
// ------------------- PDF-lib End here -----------------


// --------------JSPDF start from here ----------------
// export class Order {
//   orderId: number;
//   cityId: number;
//   orderWeight: string;
//   quantity: number;
//   orderStatus: string;

//   constructor(
//     orderId: number,
//     cityId: number,
//     orderWeight: string,
//     quantity: number,
//     orderStatus: string
//   ) {
//     this.orderId = orderId;
//     this.cityId = cityId;
//     this.orderWeight = orderWeight;
//     this.quantity = quantity;
//     this.orderStatus = orderStatus;
//   }
// }


// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })

// export class PdfService {
//   async generatePdf(assignedOrders: Order[], vehicleDetails: any): Promise<void> {
//     const module = await import('jspdf');
    
// const jsPDF = module.default;
//     const doc = new jsPDF();
    

// // Add assigned orders
// doc.setFontSize(16);
// doc.text('Assigned Orders Report', 10, 20);

// // Add vehicle details
// doc.setFontSize(14);
// doc.text(`Vehicle Number: ${vehicleDetails.vehicleNumber}`, 10, 30);
// doc.text('Vehicle Details:', 10, 40);
// doc.text(`Driver Name: ${vehicleDetails.driverName}`, 20, 50);
// doc.text(`Driver Contact: ${vehicleDetails.driverContact}`, 20, 60);
// doc.text(`Capacity: ${vehicleDetails.vehicleCapacity}`, 20, 70);

   
// // Create a table for assigned orders
// const tableHeaders = [['Order ID', 'Order Status', 'Weight (kg)', 'Quantity']];
// const tableData = assignedOrders.map((order) => [
//   order.orderId.toString(),
//   order.orderStatus,
//   order.orderWeight,
//   order.quantity.toString(),
// ]);

// const startY = 80; // Adjust the starting Y-coordinate as needed

// // Draw table headers
// const headerX = 10;
// const headerY = startY;
// const cellWidth = 40;
// const cellHeight = 10;
// const lineHeight = 7;

// tableHeaders[0].forEach((header, index) => {
//   doc.rect(headerX + index * cellWidth, headerY, cellWidth, cellHeight, 'S');
//   doc.text(header, headerX + index * cellWidth + 5, headerY + cellHeight - lineHeight);
// });

// // Draw table data
// tableData.forEach((rowData, rowIndex) => {
//   rowData.forEach((cell, cellIndex) => {
//     const x = headerX + cellIndex * cellWidth + 5;
//     const y = startY + (rowIndex + 1) * cellHeight - lineHeight;
//     doc.text(cell, x+15, y+15);
//   });
// });

//     // Save the PDF
//     doc.save('assigned_orders_report.pdf');
//   }
// }
