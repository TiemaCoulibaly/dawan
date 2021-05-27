import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomPreloadStrategyService } from './services/customPreloadStrategy/custom-preload-strategy.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'decorator',
    loadChildren: () =>
      import('./decorator/decorator.module').then((m) => m.DecoratorModule),
    data: { preload: true },
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
    data: { preload: true },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      // preloadingStrategy: PreloadAllModules,
      preloadingStrategy: CustomPreloadStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
