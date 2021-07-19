import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockchainPage } from './blockchain.page';

const routes: Routes = [
  {
    path: '',
    component: BlockchainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockchainPageRoutingModule {}
