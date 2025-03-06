import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient ) { }


  addToOrder(orderId: any) {
    const token = localStorage.getItem('token'); // Retrieve token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Ensure correct format
      'Content-Type': 'application/json' // Specify JSON content
    });
    return this.http.post(`${baseUrl}/order/place/${orderId}`,{}, { headers: headers });
  }



  viewOrder() {
    const token = localStorage.getItem('token'); // Retrieve token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Ensure correct format
      'Content-Type': 'application/json' // Specify JSON content
    });
    return this.http.get(`${baseUrl}/orders/view`, { headers: headers });
  }



  viewAllOrder() {
    return this.http.get(`${baseUrl}/allOrders`);
  }

  public deleteOrder(cartId:number){
    return this.http.delete(`${baseUrl}/order/delete/${cartId}`, { responseType: 'text' })
  }

  public updateOrder(cartId:number){
    return this.http.get(`${baseUrl}/order/update/${cartId}`)
  }
}
