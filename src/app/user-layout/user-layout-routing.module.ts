import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserLayoutComponent } from "./user-layout/user-layout.component";
const route: Routes=[
    { 
        path:"",component: UserLayoutComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class UserLayoutRoutingModule{

}