import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WallpaperSettingPage } from './wallpaper-setting.page';

const routes: Routes = [
  {
    path: '',
    component: WallpaperSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WallpaperSettingPageRoutingModule {}
