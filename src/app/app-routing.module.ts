import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartDeliveryReceiptComponent } from './start-delivery-receipt/start-delivery-receipt.component';
import { NationalAccountProgramsComponent } from './national-account-programs/national-account-programs.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'Overview', pathMatch: 'full'},
  { path: 'Overview', component: OverviewComponent},
  { path: 'National-Account-Programs', component: NationalAccountProgramsComponent},
  { path: 'Start-Delivery-Receipt', component: StartDeliveryReceiptComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OverviewComponent, NationalAccountProgramsComponent, StartDeliveryReceiptComponent]
