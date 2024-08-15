import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "not-found",
    loadComponent: () =>
      import("./core/components/not-found/not-found.component").then(
        (c) => c.NotFoundComponent
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./feature/feature.module').then((c) => c.FeatureModule),
  },
];
