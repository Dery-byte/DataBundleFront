import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import baseUrl from './helper';
import { Observable,Subscription  } from 'rxjs';
import { PaymentService, PaymentStatus } from './payment.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  paymentStatusR: PaymentStatus | null = null;
  isConnected = false;
  
  private statusSubscription: Subscription | null = null;
  private connectionSubscription: Subscription | null = null;

  constructor(
    private http:HttpClient ,
    private paymentService: PaymentService
  ) { }


  ngOnInit(): void {
  }
    addToCart(cart: any) {
      const token = localStorage.getItem('token'); // Retrieve token
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`, // Ensure correct format
        'Content-Type': 'application/json' // Specify JSON content
      });
      return this.http.post(`${baseUrl}/cart/add`, cart, { headers: headers });
    }

  cartCount() {
    const token = localStorage.getItem('token'); // Retrieve token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Ensure correct format
      'Content-Type': 'application/json' // Specify JSON content
    });
    return this.http.get(`${baseUrl}/cart/count`, { headers: headers });
  }
 
  viewCart() {
    const token = localStorage.getItem('token'); // Retrieve token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Ensure correct format
      'Content-Type': 'application/json' // Specify JSON content
    });
    return this.http.get(`${baseUrl}/cart/view`, { headers: headers });
  }

  public deleteCart(cartId:number){
    return this.http.delete(`${baseUrl}/cart/delete/${cartId}`, { responseType: 'text' })
  }

  public updateCart(cartId:number){
    return this.http.get(`${baseUrl}/cart/update/${cartId}`)
  }


  public paymentStatus(transactionId:number){
    return this.http.get(`${baseUrl}/payment/status/${transactionId}`)
  }

  //PAYMENT STATUS

  // getPaymentStatus(payload: any): Observable<any> {
  //   return this.http.post<any>(`${baseUrl}/payment/statusWebhook/`, payload);
  // }
}
