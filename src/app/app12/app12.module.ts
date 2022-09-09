import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { App12PageRoutingModule } from './app12-routing.module';

import { App12Page } from './app12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    App12PageRoutingModule
  ],
  declarations: [App12Page]
})
export class App12PageModule {}
