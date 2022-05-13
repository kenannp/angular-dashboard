import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss']
})
export class KpiCardComponent implements OnInit {

@Input() totalCount: number
@Input() cardName: string
@Input() description: string="Hallo ich bin ein default text"
@Input() productValue: number
@Input() bothValue: number
@Input() serviceItemValue: number


  constructor() { }

  ngOnInit(): void {
    
  }

  calculatePercentage(val: number): number {
    return (val/this.totalCount)*100;
  }
}
