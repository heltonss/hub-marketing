import { GenerateAdsComponent } from './generate-ads/generate-ads.component';
import { HttpClientModule } from '@angular/common/http';
import { AdsService } from './services/ads.service';
import { MatInputModule } from '@angular/material/input';
import { BannerRoutingModule } from './banner.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads/ads.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AdsComponent, GenerateAdsComponent],
  providers: [AdsService],
  imports: [
    CommonModule,
    HttpClientModule,
    BannerRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ],
})
export class BannerModule {}
