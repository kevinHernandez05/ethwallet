import { Injectable } from '@angular/core';
import { HttpClient } from "@Angular/common/http";
import { Observable } from "rxjs";
import { IEtherscan } from '../model/etherscan.model';

@Injectable({
  providedIn: 'root'
})
export class EtherscanService {

  private apiKey: string = "RN67DNFKG1SB5WD25I5NCPFKUUJKBT2MDB";
  private baseUrl: string = `https://api.etherscan.io/api?`;
  private module: string;
  private action: string;

  constructor(private http: HttpClient) {}

  getTransactions(address: string):Observable<IEtherscan>{
    this.module = "account";
    this.action = "txlist";
    let url = `${this.baseUrl}module=${this.module}&action=${this.action}&address=${address}&startblock=0&endblock=99999999&offset=10&sort=asc&apikey=${this.apiKey};`
    return this.http.get<IEtherscan>(url);
  }
}
