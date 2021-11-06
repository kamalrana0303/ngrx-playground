import { createSelector } from "@ngrx/store";
import { LoginResponse, Token } from "../reducers/access.reducer";
import { AppState } from "../state/app.state";

export const logInSelector= createSelector(
    (state:AppState)=>{return state.headers},
    (headers:LoginResponse)=> headers)