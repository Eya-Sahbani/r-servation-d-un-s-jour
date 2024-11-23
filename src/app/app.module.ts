import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeconnecterComponent } from './seconnecter/seconnecter.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChoisimenbreComponent } from './choisimenbre/choisimenbre.component';
import{HttpClientModule} from '@angular/common/http';
import { HotelComponent } from './hotel/hotel.component';
import { TableauReservationComponent } from './tableau-reservation/tableau-reservation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    SeconnecterComponent,
    FooterComponent,
    NavbarComponent,
    ChoisimenbreComponent,
    HotelComponent,
    TableauReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
