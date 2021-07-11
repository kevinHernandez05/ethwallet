import { Component } from '@angular/core';
import { IMovement } from '../model/movement.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  movements: IMovement[] = [
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

  constructor() {}

}
