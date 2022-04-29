import { Component, OnInit } from '@angular/core';
import { ArrayDataSource } from '../../../../../node_modules/@angular/cdk/collections';


interface ListItem { name: string, dno: string, status: number, entrydate?: string, amount?: number }


@Component({
  selector: 'app-card-four',
  templateUrl: './card-four.component.html',
  styleUrls: ['./card-four.component.scss']
})
export class CardFourComponent implements OnInit {


  list: ListItem[] = [
    { name: 'test1', dno: '234234', status: 0, entrydate: '22.04.2022', amount: 3000 },
    { name: 'test2', dno: '254664', status: 1, entrydate: '12.04.2022', amount: 4000 },
    { name: 'test3', dno: '304734', status: 2, entrydate: '20.04.2022', amount: 5000 },
    { name: 'test4', dno: '400055', status: 3, entrydate: '28.04.2022', amount: 2000 }
  ]

  constructor() { }

  ngOnInit(): void {
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
