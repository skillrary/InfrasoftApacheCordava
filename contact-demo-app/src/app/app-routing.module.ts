import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contact-list',
    loadChildren: () => import('./contact-list/contact-list.module').then( m => m.ContactListPageModule)
  },
  {
    path: '',
    redirectTo: 'contact-list',
    pathMatch: 'full'
  },
  {
    path: 'contact-add',
    loadChildren: () => import('./contact-add/contact-add.module').then( m => m.ContactAddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
