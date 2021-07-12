import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


/** Own components */

import { HomeHeaderComponent } from '../components/home-header/home-header.component';
import { HomeTabComponent } from '../components/home-tab/home-tab.component';
import { CardComponent } from '../components/card/card.component';
import { CardTransactionComponent } from '../components/card-transaction/card-transaction.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    HomeHeaderComponent,
    HomeTabComponent,
    CardComponent,
    CardTransactionComponent]
})
export class HomePageModule {}
