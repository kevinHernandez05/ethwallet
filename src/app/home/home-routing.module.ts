import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'blockchain',
        loadChildren: () =>
          import('../page/blockchain/blockchain.module').then(
            (m) => m.BlockchainPageModule
          ),
      },
      {
        path: 'transaction',
        loadChildren: () =>
          import('../page/transactions/transactions.module').then(
            (m) => m.TransactionsPageModule
          ),
      },
       {
        path: 'about',
        loadChildren: () =>
          import('../page/about/about.module').then((m) => m.AboutPageModule),
      },
      {
        path: '',
        redirectTo: '/home/blockchain',
        pathMatch: 'full',
      },
      {
        path: 'home',
        redirectTo: '/home/blockchain',
        pathMatch: 'full',
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
