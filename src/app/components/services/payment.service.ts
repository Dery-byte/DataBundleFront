import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import baseUrl from './helper';
import { BehaviorSubject, Observable } from 'rxjs';



export interface PaymentStatus {
  txStatus: number;
  statusCode: string;
  statusMessage: string;
  transactionId: number;
  payer: string;
  payee: string;
  amount: number;
  value: number;
  externalRef: string;
  thirdPartyRef: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private stompClient: any = null;
  private paymentStatusSubject = new BehaviorSubject<PaymentStatus | null>(null);
  private connectionStatusSubject = new BehaviorSubject<boolean>(false);
  
  public paymentStatus$ = this.paymentStatusSubject.asObservable();
  public connectionStatus$ = this.connectionStatusSubject.asObservable();
 
  constructor( private http:HttpClient ) {
  }   












































































  



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

  public getPaymentStatus(exteRef:string){
    return this.http.get(`${baseUrl}/payment/status/${exteRef}`)
  }
}
