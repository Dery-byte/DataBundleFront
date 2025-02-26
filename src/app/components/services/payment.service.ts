import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor( private http:HttpClient ) {}




  initPayment(paymentRequest: any) {
    const token = localStorage.getItem('token'); // Retrieve token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Ensure correct format
      'Content-Type': 'application/json' // Specify JSON content
    });
    return this.http.post(`${baseUrl}/payment/initiate`, paymentRequest, { headers: headers });
  }

  verifyOtpAndPay(data:any) {
    const token = localStorage.getItem('token'); // Retrieve token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Ensure correct format
      'Content-Type': 'application/json' // Specify JSON content
    });
    return this.http.post(`${baseUrl}/payment/verifyOtp`,data, { headers: headers });
  }
}
