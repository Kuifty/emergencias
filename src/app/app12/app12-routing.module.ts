import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { App12Page } from './app12.page';

const routes: Routes = [
  {
    path: '',
    component: App12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class App12PageRoutingModule {}
