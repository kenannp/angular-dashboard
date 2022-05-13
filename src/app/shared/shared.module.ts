import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiCardComponent } from './components/kpi-card/kpi-card.component';
import { MatCardModule } from '../../../node_modules/@angular/material/card';




@NgModule({
  declarations: [
    KpiCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
    

  ], exports:[KpiCardComponent]
})
export class SharedModule { }
