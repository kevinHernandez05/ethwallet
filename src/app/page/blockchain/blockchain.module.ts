import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlockchainPageRoutingModule } from './blockchain-routing.module';

import { BlockchainPage } from './blockchain.page';

/** Own components */

import { HomeHeaderComponent } from 'src/app/components/home-header/home-header.component';
import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlockchainPageRoutingModule
  ],
  declarations: [
    BlockchainPage,
    HomeHeaderComponent,
    CardComponent]
})
export class BlockchainPageModule {}
