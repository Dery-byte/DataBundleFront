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
    // Delay the WebSocket initialization to avoid blocking the UI
    setTimeout(() => {
      this.initializeWebSocketConnection();
    }, 1000);
  }


  private initializeWebSocketConnection(): void {
    try {
      // Try to import the libraries dynamically to prevent loading issues
      import('sockjs-client').then(SockJS => {
        import('@stomp/stompjs').then(Stomp => {
          // Create SockJS connection to the WebSocket endpoint
          const socket = new SockJS('/wss');
          this.stompClient = Stomp.Stomp.over(socket);
          
          // Disable debug logging
          this.stompClient.debug = null;

          // Connect with error handling
          this.stompClient.connect({}, 
            (frame: any) => {
              console.log('Connected to payment status WebSocket');
              this.connectionStatusSubject.next(true);
              
              // Subscribe to the payment-status topic
              this.stompClient.subscribe('/topic/payment-status', (message: any) => {
                if (message.body) {
                  try {
                    const paymentStatus = JSON.parse(message.body) as PaymentStatus;
                    console.log('Received payment status update:', paymentStatus);
                    this.paymentStatusSubject.next(paymentStatus);
                  } catch (error) {
                    console.error('Error parsing payment status:', error);
                  }
                }
              });
            }, 
            (error: any) => {
              console.error('Error connecting to WebSocket:', error);
              this.connectionStatusSubject.next(false);
              
              // Attempt to reconnect after a delay
              setTimeout(() => {
                console.log('Attempting to reconnect...');
                this.initializeWebSocketConnection();
              }, 5000);
            }
          );
        }).catch(error => {
          console.error('Failed to load Stomp library:', error);
          this.connectionStatusSubject.next(false);
        });
      }).catch(error => {
        console.error('Failed to load SockJS library:', error);
        this.connectionStatusSubject.next(false);
      });
    } catch (error) {
      console.error('Error initializing WebSocket:', error);
      this.connectionStatusSubject.next(false);
    }
  }

  // Method to manually disconnect
  public disconnect(): void {
    if (this.stompClient && this.stompClient.connected) {
      try {
        this.stompClient.disconnect();
        console.log('Disconnected from WebSocket');
      } catch (error) {
        console.error('Error disconnecting from WebSocket:', error);
      } finally {
        this.connectionStatusSubject.next(false);
      }
    }
  }

  ngOnDestroy(): void {
    this.disconnect();
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
