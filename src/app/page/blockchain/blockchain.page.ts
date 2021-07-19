import { Component, OnInit } from '@angular/core';
import { IMovement } from 'src/app/model/movement.model';
import Web3 from 'web3';

//Services
import { EtherscanService } from 'src/app/services/etherscan.service';
import { IEtherscan } from 'src/app/model/etherscan.model';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.page.html',
  styleUrls: ['./blockchain.page.scss'],
})
export class BlockchainPage {
  private movements: IEtherscan;
  private web3: any;

  private account: IMovement;

  infuraUrl: string =
    'https://mainnet.infura.io/v3/7f1789c7008f4f02b8c53ab149849ccb';
  address: any = '0xEDaE3708C601E7F1b80F2733138150E02ce18eeA';
  balance: any;
  ether: number = 0;
  euro: number = 0;
  transactLoaded = false;

  constructor(private eth: EtherscanService) {
    //this.movements = this.mockMovements();
    let conn = this.web3jsInit(this.infuraUrl);
    console.log(`Connetion state: ${conn}`);
  }

  web3jsInit(infuraUrl: string): boolean {
    this.web3 = new Web3(infuraUrl);
    this.getBalance(this.address);
    return true;
  }

  getBalance(address: string) {
    this.web3.eth.getBalance(this.address, (err, bal) => {
      if (bal !== undefined) {
        let balance = this.web3.utils.fromWei(bal, 'ether');

        this.account = {
          cuentaEth: this.address,
          balance: balance,
          date: '',
          percentage: '',
        };
      }
    });
  }

  async checkBlock() {
    let block = await this.web3.eth.getBlock('latest');
    let latestNumber = block.number;

    for (let i = 1; i <= latestNumber; i++) {
      console.log(`searching block: #${i}`);
      if (block != null && block.transactions != null) {
        for (let txHash of block.transactions) {
          let tx = await this.web3.eth.getTransaction(txHash);

          if (
            this.account.cuentaEth == tx.to ||
            this.account.cuentaEth == tx.from
          ) {
            console.log(`Transaction found on block: ${i}`);
            console.log({
              address: tx.from,
              value: this.web3.util.fromWei(tx.value, 'ether'),
            });
          } else {
            console.log(`Not found on block #${i}`);
          }
        }
      }
    }
  }
}
