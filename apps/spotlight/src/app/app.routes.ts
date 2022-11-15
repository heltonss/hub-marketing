import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "banner",
  },
  {
    path: "banner",
    loadChildren: () => import('./banner/banner.routing.module').then(m => m.BannerRoutingModule)
  }
];
