import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrajetsPage } from './trajets';

@NgModule({
  declarations: [
    TrajetsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrajetsPage),
  ],
  exports: [
    TrajetsPage
  ]
})
export class TrajetPageModule {}
