import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http:HttpClient ) { }

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
}
