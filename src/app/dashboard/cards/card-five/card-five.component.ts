import { Component, OnInit, ViewChild } from '@angular/core';
import  { single } from '../../../data';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { DashboardService } from '../../../core/api/dashboard.service';

@Component({
  selector: 'app-card-five',
  templateUrl: './card-five.component.html',
  styleUrls: ['./card-five.component.scss']
})
export class CardFiveComponent implements OnInit {

  single: any[] = []
  view = void 0;
  @ViewChild('chart') chartReference: any

  width:undefined
  height=250
  
  colorScheme: Color = {
      name: 'myScheme',
      selectable: true,
      group: ScaleType.Ordinal,
      domain: ['#FFA500', '#000', '#FFD300'],
    };
  
  

  schemeType: string = 'ordinal'; 
  gradient: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  legendTitle: string = 'Products';
  legendPosition: string = 'below';
  legend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Sales';
  xAxisLabel: string = 'products';
  animations: boolean = true;
  showGridLines: boolean = true;
  showDataLabel: boolean = true;
  barPadding: number = 5
  tooltipDisabled: boolean = false;
  roundEdges: boolean = false;
  


  constructor(private _dashboardService: DashboardService) { }

  ngOnInit(): void {
    this._dashboardService.getReturn().subscribe(result => { this.single = result })
  }

  

 

}
