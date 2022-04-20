import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import ScreenState from "../../models/ScreenState";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  breakpointState = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return ScreenState.MOBILE;
      } else {
        return ScreenState.DESKTOP_TABLET;
      }
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
