import { HotelComponent } from './hotel/hotel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeconnecterComponent } from './seconnecter/seconnecter.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChoisimenbreComponent } from './choisimenbre/choisimenbre.component';
import { TableauReservationComponent } from './tableau-reservation/tableau-reservation.component';

const routes: Routes = [
  {path:"seconnecter",component:SeconnecterComponent},
  {path:"footer",component:FooterComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"choisimenbre/:id",component:ChoisimenbreComponent},
  {path:"hotel", component:HotelComponent},
  {path:"tableau_reservation",component:TableauReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
