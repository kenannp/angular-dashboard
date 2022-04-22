import { Component, OnInit } from '@angular/core';
import { ArrayDataSource } from '../../../../../node_modules/@angular/cdk/collections';


interface ListItem {name: string, dno: string, completed: boolean,  entrydate?: string, amount?: number

}


@Component({
  selector: 'app-card-four',
  templateUrl: './card-four.component.html',
  styleUrls: ['./card-four.component.scss']
})
export class CardFourComponent implements OnInit {

  list: ListItem[] = [{name: 'test', dno:'234234', completed: true, entrydate: '22.04.2022',  amount: 3000}, 
  {name: 'test2', dno:'234234', completed: true}, 
  {name: 'test3', dno:'234234', completed: true}, 
  {name: 'test4', dno:'234234', completed: true}] 
  constructor() { }

  ngOnInit(): void {
  }

}
