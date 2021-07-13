import { Component } from '@angular/core';
import { IMovement } from '../model/movement.model';
import Web3 from 'web3';

//Services
import { EtherscanService } from '../services/etherscan.service';
import { IEtherscan } from '../model/etherscan.model';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  private movements: IEtherscan;
  private web3: any;

  private account: IMovement;

  infuraUrl:string = "https://mainnet.infura.io/v3/7f1789c7008f4f02b8c53ab149849ccb"
  address: any = '0xEDaE3708C601E7F1b80F2733138150E02ce18eeA';
  balance: any;
  ether: number = 0;
  euro: number = 0;
  transactLoaded = false;

  constructor(private eth:EtherscanService) {
    //this.movements = this.mockMovements();
    let conn = this.web3jsInit(this.infuraUrl);
    console.log(`Connetion state: ${conn}`);
  }

  web3jsInit(infuraUrl:string): boolean{
    this.web3 = new Web3(infuraUrl);
    this.getBalance(this.address);
    this.getTransactions(this.address);
    return true;
  }

  getBalance(address: string){
    this.web3.eth.getBalance(this.address, (err, bal)=>{
      if(bal !== undefined){

        let balance = this.web3.utils.fromWei(bal, 'ether');

        this.account =
          {
            cuentaEth: this.address,
            balance: balance,
            date: '',
            percentage: ''
          }
        ;
      }
    });
  }

  getTransactions(address: string){

    this.eth.getTransactions(this.address).subscribe(
      data =>{

        data.result.map((a) =>{
          a.value = this.web3.utils.fromWei(a.value, 'ether');
          a.timeStamp = a.timeStamp * 1000;
          a.gasPrice = this.web3.utils.fromWei(a.gasPrice, 'gwei');
        });

        this.movements = data;
      },
      (err)=>{
        console.warn(`error: ${err}`);
      }
    );
  }

  async checkBlock() {
    let block = await this.web3.eth.getBlock('latest');
    let latestNumber = block.number;

    for(let i = 1; i <= latestNumber; i++){
      console.log(`searching block: #${i}`);
      if(block != null && block.transactions != null){
        for(let txHash of block.transactions){
          let tx = await this.web3.eth.getTransaction(txHash);

          if(this.account.cuentaEth == tx.to || this.account.cuentaEth == tx.from){
            console.log(`Transaction found on block: ${i}`);
            console.log({address: tx.from, value: this.web3.util.fromWei(tx.value, 'ether')});
          }
          else{
            console.log(`Not found on block #${i}`);
          }
        }
      }
    }
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

