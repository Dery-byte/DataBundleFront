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
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


 












import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/users/home/home.component';
import { ServicesComponent } from './components/pages/users/services/services.component';




import { ContactComponent } from './components/pages/users/contact/contact.component';
import { BlogsComponent } from './components/pages/users/blogs/blogs.component';
import { AboutComponent } from './components/pages/users/about/about.component';
import { OffersComponent } from './components/pages/users/offers/offers.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DatabundlesComponent } from './components/pages/users/databundles/databundles.component';
import { ElectronicsComponent } from './components/pages/users/electronics/electronics.component';
import { CartComponent } from './components/pages/users/cart/cart.component';
import { OrderService } from './components/services/order.service';
import { CartService } from './components/services/cart.service';
import { WebSocketService } from './components/services/websocket.service';
import { CustomSnackbarComponent } from './components/pages/users/custom-snackbar/custom-snackbar.component';
import { PaymentService } from './components/services/payment.service';
import { AdminHomeComponent } from './components/pages/admin/admin-home/admin-home.component';
import { AdminLayoutComponent } from './components/pages/layouts/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './components/pages/admin/admin-dashboard/admin-dashboard.component';
import { OrdersComponent } from './components/pages/admin/orders/orders.component';
import { AdminHeaderComponent } from './components/pages/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './components/pages/admin/admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './components/pages/admin/admin-sidebar/admin-sidebar.component';
import { UserLayoutComponent } from './components/pages/layouts/user-layout/user-layout/user-layout.component';
import { PaymentComponent } from './components/pages/admin/payment/payment.component';
import { SoftwareSolutionsComponent } from './components/pages/users/software-solutions/software-solutions.component';

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
    CustomSnackbarComponent,
    AdminHomeComponent,
    AdminLayoutComponent,
    AdminDashboardComponent,
    OrdersComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    UserLayoutComponent,
    PaymentComponent,
    SoftwareSolutionsComponent,
    
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
    NgOtpInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [StorageService,OrderService,CartService,WebSocketService,PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
