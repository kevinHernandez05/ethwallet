import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionsPageRoutingModule } from './transactions-routing.module';
import { TransactionsPage } from './transactions.page';
import { CardTransactionComponent } from 'src/app/components/card-transaction/card-transaction.component';
import { HomeHeaderNoTextboxComponent } from 'src/app/components/home-header-no-textbox/home-header-no-textbox.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionsPageRoutingModule,

  ],
  declarations: [TransactionsPage, CardTransactionComponent, HomeHeaderNoTextboxComponent]
})
export class TransactionsPageModule {}
