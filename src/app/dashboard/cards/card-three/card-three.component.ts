import { Component, OnInit, ViewChild } from '@angular/core';
import  { single } from '../../../data';
import { Color, ScaleType } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-card-three',
  templateUrl: './card-three.component.html',
  styleUrls: ['./card-three.component.scss']
})
export class CardThreeComponent implements OnInit {

  single: any[] = single
  view: [number, number] = [700, 250];
  
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
  

  constructor() { }

  ngOnInit(): void {
  }

}
