import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from 'src/app/components/logo/logo.component';

@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent
  ]
})
export class SharedModule { }
