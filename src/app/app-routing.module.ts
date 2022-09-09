import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'app1',
    loadChildren: () => import('./app1/app1.module').then( m => m.App1PageModule)
  },
  {
    path: 'app12',
    loadChildren: () => import('./app12/app12.module').then( m =>m.App12PageModule)
  },
  {
    path: 'folder2',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'app3',
    loadChildren: () => import('./app1/app1.module').then( m => m.App1PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
