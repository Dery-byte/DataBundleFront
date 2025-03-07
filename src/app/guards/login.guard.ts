import { CanActivateFn , Router} from '@angular/router';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {

  
  const router = inject(Router); // Inject Router
  const isLoggedIn = !!localStorage.getItem('token'); // Check if the user has a token
  if (isLoggedIn) {
    router.navigate(['/admin/dashboard']); // 🔒 Redirect to the dashboard if logged in
    return false;
  }
  return true;
};
