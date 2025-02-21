import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { BlogsComponent } from './components/pages/blogs/blogs.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutComponent } from './components/pages/about/about.component';
import { OffersComponent } from './components/pages/offers/offers.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DatabundlesComponent } from './components/pages/databundles/databundles.component';
import { ElectronicsComponent } from './components/pages/electronics/electronics.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'blog', component: BlogsComponent },
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent},
  {path:'offers', component:OffersComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'databundles', component:DatabundlesComponent},
  {path:'electronics', component:ElectronicsComponent},
  {path:'cart', component:CartComponent, canActivate: [authGuard]}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
