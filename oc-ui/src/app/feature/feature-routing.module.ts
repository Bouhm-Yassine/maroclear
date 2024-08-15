import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutContainerComponent } from "../core/components/layout-container/layout-container.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutContainerComponent,
    children: [
      {
        path: 'transactions',
        loadChildren: () => import('./transactions/transactions.module').then((m) => m.TransactionsModule),
      },
      {
        path: 'theme',
        loadChildren: () => import('./theme/theme.module').then((m) => m.ThemeModule),
      },
      // {
      //   path: '11s',
      //   loadChildren: () => import('./theme/theme.module').then((m) => m.ThemeModule),
      // },
      {
        path: "",
        redirectTo: "/transactions",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule { }
