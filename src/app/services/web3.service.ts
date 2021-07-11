import { Injectable } from '@angular/core';
import Web3 from 'web3';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  infuraUrl: string = 'https://mainnet.infura.io/v3/7f1789c7008f4f02b8c53ab149849ccb';

  private web3: any;

  constructor() {
    this.web3 = new Web3(
      new Web3.providers.HttpProvider(this.infuraUrl)
    );

    this.getInfoFromAccount('');
  }

  getInfoFromAccount(account: string){
    account = '0xc8F595E2084DB484f8A80109101D58625223b7C9';

    let balance;

    this.web3.eth.getBalance(account, (err, bal) => {
      balance = bal;
    });

    console.log(balance);
  }
}


