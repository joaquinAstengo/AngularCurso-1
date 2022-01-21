import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './history-page/history-page.component';
import { HistoryPagesComponent } from './pages/history-pages/history-pages.component';


@NgModule({
  declarations: [
    HistoryPageComponent,
    HistoryPagesComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
