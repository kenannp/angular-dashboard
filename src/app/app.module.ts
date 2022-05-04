import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { OverviewComponent } from './overview/overview.component';
import { CardOneComponent } from './dashboard/cards/card-one/card-one.component';
import {MatRadioModule} from '@angular/material/radio';
import { CardTwoComponent } from './dashboard/cards/card-two/card-two.component';
import {MatInputModule} from '@angular/material/input';
import { CardThreeComponent } from './dashboard/cards/card-three/card-three.component';
import { CardFourComponent } from './dashboard/cards/card-four/card-four.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import { CardFiveComponent } from './dashboard/cards/card-five/card-five.component';
import { CardSixComponent } from './dashboard/cards/card-six/card-six.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    routingComponents,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent,
    CardFourComponent,
    CardFiveComponent,
    CardSixComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatInputModule,
    NgxChartsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
