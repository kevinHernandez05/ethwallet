import { Component, Input, OnInit } from '@angular/core';
import { IEtherResult } from 'src/app/model/etherResult.model';

@Component({
  selector: 'app-card-transaction',
  templateUrl: './card-transaction.component.html',
  styleUrls: ['./card-transaction.component.scss'],
})
export class CardTransactionComponent {

  constructor() { }

  @Input() transact: IEtherResult;

}
