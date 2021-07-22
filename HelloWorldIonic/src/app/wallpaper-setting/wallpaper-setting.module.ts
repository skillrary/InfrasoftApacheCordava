import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WallpaperSettingPageRoutingModule } from './wallpaper-setting-routing.module';

import { WallpaperSettingPage } from './wallpaper-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WallpaperSettingPageRoutingModule
  ],
  declarations: [WallpaperSettingPage]
})
export class WallpaperSettingPageModule {}
