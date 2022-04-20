import { Component } from '@angular/core';
import ScreenState from "../../../../models/ScreenState";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.scss']
})
export class CardOneComponent {

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
      return 2
    else
      return 1
  }

  constructor(private breakpointObserver: BreakpointObserver) {}

}
