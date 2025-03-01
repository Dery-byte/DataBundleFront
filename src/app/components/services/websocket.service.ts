import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';
// import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private client: Client;
  

  constructor() {
    this.client = new Client({
      brokerURL: 'wss://databundlbackend.onrender.com/ws', // Ensure this is correct
      connectHeaders: {},
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
    });

    this.client.onConnect = () => {
      this.client.subscribe('/topic/paymentStatus', (message) => {
        console.log('Received payment update:', JSON.parse(message.body));
      });
    };

    this.client.activate();
  }
}
