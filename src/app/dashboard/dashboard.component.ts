import { Component } from '@angular/core';
import ScreenState from "../../models/ScreenState";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
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

  constructor(private breakpointObserver: BreakpointObserver) {}
}
