import { Component } from '@angular/core';
import  ScreenState  from "../../models/ScreenState";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {map} from "rxjs/operators";
import { Location } from '@angular/common';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";


export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],



providers: [   {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

{provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
],
})
export class DashboardComponent {
  screenState = ScreenState.DESKTOP_TABLET;

  screenStateObserver = this.breakpointObserver.observe(Breakpoints.Handset).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.screenState = ScreenState.MOBILE;
      } else {
        this.screenState = ScreenState.DESKTOP_TABLET;
      }
    })



  getRowsByScreenState(): number{
    if(this.screenState == ScreenState.DESKTOP_TABLET)
      return 1
    else
      return 2
  }

  goBack(): void {
    this.location.back();
  }

  constructor(private breakpointObserver: BreakpointObserver, private location: Location) {}
}
