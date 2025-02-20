import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  getUsername(): string | null {
    const userString = localStorage.getItem('user'); // Get user data from local storage
    if (userString) {
      const user = JSON.parse(userString); // Convert JSON string to object
      return user.username; // Return the username
    }
    return null; // Return null if user is not found
  }
}
