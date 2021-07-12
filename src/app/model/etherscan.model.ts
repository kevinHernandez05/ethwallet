import { IEtherResult } from "./etherResult.model";

export interface IEtherscan{
  status: number;
  message: string;
  result: IEtherResult[]

}
