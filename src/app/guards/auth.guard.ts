import { CanActivateFn, Router  } from '@angular/router';
import { LoginService } from '../components/services/login.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {

  const logInService = inject(LoginService);
  const router = inject(Router);

  if (logInService.isLoggedIn()) {
    return true; // ✅ Allow access if user is logged in
  } else {
    router.navigate(['/login']); // 🔒 Redirect to login page
    return false;
  }
};
