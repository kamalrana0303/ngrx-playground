import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserLayoutComponent } from "./user-layout/user-layout.component";
const route: Routes=[
    { 
        path:"",component: UserLayoutComponent , children:[
            //TODO implement routes
            /*
          { path: 'sign-in', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
          { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }
          */
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class UserLayoutRoutingModule{

}