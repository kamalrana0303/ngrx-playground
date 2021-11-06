import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { AccessManagerService } from "src/app/zservice/access-manager.service";
import { logInAction, logInSuccessAction } from "../actions/access.action";
import { catchError, exhaustMap, map } from "rxjs/operators"
import { LoginResponse } from "../reducers/access.reducer";
import { EmptyError } from "rxjs";

@Injectable()
export class LoginEffect {
    login$ = createEffect(() => {
        return this.actions.pipe(
            ofType(logInAction),
            
            exhaustMap((payload) => {
                const {type, ...rest}=payload
                return this.access.login(rest).pipe(map((response:LoginResponse)=>{
                   return  logInSuccessAction(response)
                }))
            })
        )
    })
    constructor(private actions: Actions, private access: AccessManagerService) { }
}