import { Component } from '@angular/core';

import { LoginService } from 'src/app/components/services/login.service';

import { StorageService } from 'src/app/components/services/storage.service';

declare var bootstrap: any;  // 👈 Add this at the top
declare var $: any;  // Add this at the top if using jQuery
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  paymentForm!: FormGroup;

  username: string | null = null;
  isloggedIn = false;
  user = null;
  isModalOpen =false;

  


  constructor(private storageService:StorageService, private login: LoginService, private cartService: CartService){}
  cartCount: number = 0; // Example: Get this from a cart service dynamically


 ngOnInit(){
 this.username = this.storageService.getUsername();
 this.cartCounts();

  }


  openModal(recipient: string) {
    let modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      let modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  sendMessage() {
    // Show modal when conditions are met
   if (this.paymentForm.valid) {
     console.log("🚀 Payment Details:", this.paymentForm.getRawValue());
     // Process payment here...
     console.log(`Payment Processing ....`);

   } else {
     console.error("⚠️ Form is invalid!");
   }
 }

 disableField() {
  this.paymentForm.get('amount')?.disable(); // Disable input field
}

  closeModal() {
    const activeElement = document.activeElement as HTMLElement | null;
    if (activeElement) {
      activeElement.blur();
    }
    this.isModalOpen = false;
    $('#exampleModal').modal('hide');
  }

  public logout() {
		this.login.logout();
		this.isloggedIn = false;
		this.user = null;
		window.location.reload();
		// window.location.href = "/login";
	}

  cartCounts(){
      this.cartService.cartCount().subscribe((data:any)=>{
        //success
        this.cartCount = data;
        console.log(data);
      
              });
    }
  

}
