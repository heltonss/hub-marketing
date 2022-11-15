import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerRoutes } from './banner.routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BannerRoutes)
  ]
})

export class BannerRoutingModule { }
