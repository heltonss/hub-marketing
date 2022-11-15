import { GenerateAdsComponent } from './generate-ads/generate-ads.component';
import { HomeComponent } from './home/home.component';
import { Route } from '@angular/router';

export const BannerRoutes: Route[] = [{
  path: "",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: GenerateAdsComponent
    }
  ]
}];
