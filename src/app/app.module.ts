import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HouseholdsComponent } from './households/households.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { FashionComponent } from './fashion/fashion.component';
import { CartComponent } from './cart/cart.component';
import { GroceryComponent } from './grocery/grocery.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SigninComponent,
    ElectronicsComponent,
    HouseholdsComponent,
    MobilesComponent,
    FashionComponent,
    CartComponent,
    GroceryComponent,
    SearchComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
