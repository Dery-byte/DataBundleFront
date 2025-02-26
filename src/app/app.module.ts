import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Import this!
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms'; // ✅ Import this
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './components/services/storage.service';
import { NgOtpInputModule } from  'ng-otp-input';










import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ServicesComponent } from './components/pages/services/services.component';




import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogsComponent } from './components/pages/blogs/blogs.component';
import { AboutComponent } from './components/pages/about/about.component';
import { OffersComponent } from './components/pages/offers/offers.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DatabundlesComponent } from './components/pages/databundles/databundles.component';
import { ElectronicsComponent } from './components/pages/electronics/electronics.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { OrderService } from './components/services/order.service';
import { CartService } from './components/services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    BlogsComponent,
    AboutComponent,
    OffersComponent,
    RegisterComponent,
    LoginComponent,
    DatabundlesComponent,
    ElectronicsComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    NgOtpInputModule
  ],
  providers: [StorageService,OrderService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
