import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/users/home/home.component';
import { ServicesComponent } from './components/pages/users/services/services.component';
import { BlogsComponent } from './components/pages/users/blogs/blogs.component';
import { ContactComponent } from './components/pages/users/contact/contact.component';
import { AboutComponent } from './components/pages/users/about/about.component';
import { OffersComponent } from './components/pages/users/offers/offers.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DatabundlesComponent } from './components/pages/users/databundles/databundles.component';
import { ElectronicsComponent } from './components/pages/users/electronics/electronics.component';
import { CartComponent } from './components/pages/users/cart/cart.component';
import { authGuard } from './guards/auth.guard';
import { AdminLayoutComponent } from './components/pages/layouts/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './components/pages/admin/admin-dashboard/admin-dashboard.component';
import { OrdersComponent } from './components/pages/admin/orders/orders.component';
import { UserLayoutComponent } from './components/pages/layouts/user-layout/user-layout/user-layout.component';
import { AdminHomeComponent } from './components/pages/admin/admin-home/admin-home.component';
import { PaymentComponent } from './components/pages/admin/payment/payment.component';
import { loginGuard } from './guards/login.guard';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '', component: HomeComponent },
  // { path: 'services', component: ServicesComponent },
  // { path: 'blog', component: BlogsComponent },
  // {path:'contact', component:ContactComponent},
  // {path:'about', component:AboutComponent},
  // {path:'offers', component:OffersComponent},
  // {path:'register', component:RegisterComponent},
  // {path:'login', component:LoginComponent},
  // {path:'databundles', component:DatabundlesComponent},
  // {path:'electronics', component:ElectronicsComponent},
  // {path:'cart', component:CartComponent, canActivate: [authGuard]},

  // Admin staff
  {
    path: 'admin',
    component: AdminLayoutComponent,  // 🟢 Admin layout wrapper
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirect `/admin` to `/admin/dashboard`
      { path: 'dashboard', component: AdminHomeComponent }, // Default admin route
      { path: 'orders', component: OrdersComponent },
      { path: 'payment', component: PaymentComponent },
    ],
  },


  // USERS STUFF

  {
    path: '',
    component: UserLayoutComponent,  // 🟢 Admin layout wrapper
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '', component: HomeComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'blog', component: BlogsComponent },
      {path:'contact', component:ContactComponent},
      {path:'about', component:AboutComponent},
      {path:'offers', component:OffersComponent},
      {path:'register', component:RegisterComponent},
      {path:'login', component:LoginComponent, canActivate:[loginGuard]},
      {path:'databundles', component:DatabundlesComponent},
      {path:'electronics', component:ElectronicsComponent},
      {path:'cart', component:CartComponent, canActivate: [authGuard]},
    ],
  },
  // { path: '**', redirectTo: '/user' } // Redirect unknown routes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
