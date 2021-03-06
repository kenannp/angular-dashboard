import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { singletwo } from '../../../data';
import { Color, ScaleType, LegendPosition } from '@swimlane/ngx-charts';
import { DashboardService } from '../../../core/api/dashboard.service';

@Component({
  selector: 'app-card-eight',
  templateUrl: './card-eight.component.html',
  styleUrls: ['./card-eight.component.scss']
})
export class CardEightComponent implements OnInit {
  singletwo: any[] = [];
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition = LegendPosition.Below;

  colorScheme: any = {
    
    
    
    domain: ['#0000FF', '#FFA500', '#000000'],
  };

  constructor(private _dashboardService: DashboardService) {Object.assign(this, { singletwo });}

  ngOnInit(): void {
    this._dashboardService.getPieChart().subscribe(result => { this.singletwo = result })
  }

}
