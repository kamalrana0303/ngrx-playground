import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page/home-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { MainSiteComponent } from './main-site.component';

const routes: Routes = [
  {
    path: '', component: MainSiteComponent, children: [
      {
        path:'', redirectTo:'/home', pathMatch: 'full'
      },
      {
        path:'home', loadChildren:()=> import("../home-page/home-page.module").then(m=>m.HomePageModule)
      },
      {
        path:"user", loadChildren: ()=>import("../user-layout/user-layout.module").then(m=>m.UserLayoutModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainSiteRoutingModule { }
