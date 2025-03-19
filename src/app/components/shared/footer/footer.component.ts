import { Component,TemplateRef,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


    @ViewChild('paymentModal') paymentModal!: TemplateRef<any>; // Reference to the modal template

    constructor(private dialog: MatDialog,
    ){ }
  
  openModal(recipient: string) {
       // Open the modal
    const dialogRef = this.dialog.open(this.paymentModal, {
      width: '700px',
      disableClose: true // Prevent closing by clicking outside
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The modal was closed');
    //   // Handle the result if needed
    // });
  }

}
