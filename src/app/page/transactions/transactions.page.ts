import { Component, OnInit } from '@angular/core';

//Services
import { EtherscanService } from 'src/app/services/etherscan.service';
import { IEtherscan } from 'src/app/model/etherscan.model';
import Web3 from 'web3';
import { IMovement } from 'src/app/model/movement.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage {
  private movements: IEtherscan;
  private web3: any;
  private account: IMovement;
  infuraUrl: string =
  'https://mainnet.infura.io/v3/7f1789c7008f4f02b8c53ab149849ccb';
  address: any = '0xEDaE3708C601E7F1b80F2733138150E02ce18eeA';


  constructor(private eth: EtherscanService) {
    this.web3 = new Web3(this.infuraUrl);
    this.getTransactions(this.address);
  }

  getTransactions(address: string) {
    this.eth.getTransactions(this.address).subscribe(
      (data) => {
        data.result.map((a) => {
          a.value = this.web3.utils.fromWei(a.value, 'ether');
          a.timeStamp = a.timeStamp * 1000;
          a.gasUsed = this.web3.utils.fromWei(a.gasUsed, 'gwei');
        });

        this.movements = data;
      },
      (err) => {
        console.warn(`error: ${err}`);
      }
    );
  }
}
