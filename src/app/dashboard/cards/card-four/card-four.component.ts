import { Component, OnInit } from '@angular/core';
import { ArrayDataSource } from '../../../../../node_modules/@angular/cdk/collections';
import { DashboardService } from '../../../core/api/dashboard.service';


interface ListItem { name: string, dno: string, status: number, entrydate?: string, amount?: number }


@Component({
  selector: 'app-card-four',
  templateUrl: './card-four.component.html',
  styleUrls: ['./card-four.component.scss']
})
export class CardFourComponent implements OnInit {


  list: ListItem[] = [

  ]

  constructor(private _dashboardService: DashboardService) { }

  ngOnInit(): void {
    this._dashboardService.getDrList().subscribe(result => { this.list = result })

  }

  getStatusString(statuscode: number) {
    switch (statuscode) {
      case 0:
        return "completed";
      case 1:
        return "submitted";
      case 2:
        return "saved";
      case 3:
        return "error";
      default:
        return "unknown";
    }
  }

}
