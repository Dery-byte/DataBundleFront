import { Component } from '@angular/core';
import { LoginService } from 'src/app/components/services/login.service';
import { StorageService } from 'src/app/components/services/storage.service';

declare var bootstrap: any;  // 👈 Add this at the top
declare var $: any;  // Add this at the top if using jQuery
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../../services/cart.service';
import { Subscription, interval } from 'rxjs';
import { TokenExpirationService } from '../../services/token-expiration.service';
interface TimeDisplay {
	display: string;
	className: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private intervalSubscription!: Subscription;
  paymentForm!: FormGroup;
  username: string | null = null;
  isloggedIn = false;
  user = null;
  isModalOpen =false;
  constructor(private storageService:StorageService, 
    private login: LoginService, 
    private cartService: CartService,
    private tokenexpire: TokenExpirationService,
  ){}
  cartCount: number = 0; // Example: Get this from a cart service dynamically


 ngOnInit(){
 this.username = this.storageService.getUsername();
 this.cartCounts();
//  this.intervalSubscription = interval(2000).subscribe(() => {
//   this.cartCounts(); // Refresh every 3 seconds
// });

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


    ngOnDestroy() {
      if (this.intervalSubscription) {
        this.intervalSubscription.unsubscribe(); // Cleanup to prevent memory leaks
      }
    }


















































    timeLeftDisplay:any;
    intervalId:any;
    



    startCountdown() {
      const token = this.tokenexpire.getTokenFromLocalStorage();
      if (token) {
        this.intervalId = setInterval(() => {
          const timeLeftInSeconds = this.tokenexpire.getTimeLeft(token);
          if (timeLeftInSeconds > 0) {
            const minutesLeft = Math.floor((timeLeftInSeconds % 3600) / 60);
            this.timeLeftDisplay = this.formatTime(timeLeftInSeconds, minutesLeft);
  
            // Check if minutesLeft is 5 or less to trigger alert style
            if (minutesLeft <= 5) {
              this.triggerAlertEffect(); // Trigger alert effect
            }
          } else {
            // Stop countdown and notify the user that the session has expired
            this.logout();
            this.timeLeftDisplay = { display: 'Your session has expired.', className: '' };
            clearInterval(this.intervalId); // Stop the timer
          }
        }, 1000); // Update every second
      } else {
        this.timeLeftDisplay = { display: 'No session token found.', className: '' };
      }
    }
  
    // Add a method to handle alert effect
    private triggerAlertEffect(): void {
      const alertClass = 'alert'; // Define the alert class
      const minutesElement = document.querySelector('.minutes-display'); // Adjust selector based on your HTML structure
  
      if (minutesElement) {
        minutesElement.classList.add(alertClass);
        setTimeout(() => {
          minutesElement.classList.remove(alertClass); // Remove alert class after 1 second
        }, 1000);
      }
    }
  
    private formatTime(timeInSeconds: number, minutesLeft: number): TimeDisplay {
      const hr = Math.floor(timeInSeconds / 3600);
      const mm = Math.floor((timeInSeconds % 3600) / 60);
      const ss = Math.floor(timeInSeconds % 60);
  
      // Format the time string
      let formattedTime = '';
      if (hr > 0) {
        formattedTime += `${this.formatNumber(hr)} hr(s) : `;
      }
  
      // Determine the CSS class based on minutesLeft
      const minutesClass = minutesLeft <= 5 ? 'warning-minutes' : 'normal-minutes';
  
      formattedTime += `${this.formatNumber(mm)} min : ${this.formatNumber(ss)} sec`;
  
      return { display: formattedTime, className: minutesClass };
    }
  
    private formatNumber(num: number): string {
      return num < 10 ? `0${num}` : num.toString();
    }
  
  
  

}
