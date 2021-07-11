import { Component } from '@angular/core';
import { IMovement } from '../model/movement.model';
import Web3 from 'web3';

//Services
// import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  private movements: IMovement[];
  private web3: any;

  address: any = '0xc8F595E2084DB484f8A80109101D58625223b7C9';
  balance: any;
  ether: number = 0;
  euro: number = 0;

  constructor() {
    //this.movements = this.mockMovements();

  }

  mockMovements(): IMovement[]{
    return [
      {
        cuentaEth: '0xc472983479283749283',
        balance: '123456',
        date: '12/12/2021',
        percentage: '100'
      },
      {
        cuentaEth: '0xc472983479283749283',
        balance: '1234567',
        date: '12/13/2021',
        percentage: '98'

      },
      {
        cuentaEth: '0xc472983479283749283',
        balance: '23442',
        date: '12/15/2021',
        percentage: '101'

      },
      {
        cuentaEth: '0xc472983479283749283',
        balance: '34723',
        date: '12/20/2021',
        percentage: '100'

      },
      {
        cuentaEth: '0xc472983479283749283',
        balance: '19823',
        date: '12/26/2021',
        percentage: '100'
      }
    ];
  }
}
