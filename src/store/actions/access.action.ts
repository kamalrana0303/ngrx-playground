import { Token } from "@angular/compiler/src/ml_parser/lexer";
import { createAction, props } from "@ngrx/store";
import { LoginResponse } from "../reducers/access.reducer";

export const logInAction=createAction("[Login] Login Request",props<{phoneNumber:string, password:string}>());
export const logInSuccessAction= createAction("[Login] Success", props<LoginResponse>());
export const logInFailureAction=createAction("[Login] Failure");
export const logOutAction= createAction("[Logout] Logout Request")