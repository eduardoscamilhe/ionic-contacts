import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuPage } from './pages/menu/menu.page';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  {
    path: '',
    component: MenuPage,
    canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule) },
      { path: 'add', loadChildren: () => import('./pages/add/add.module').then(m => m.AddPageModule) }

    ]
  },








];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
