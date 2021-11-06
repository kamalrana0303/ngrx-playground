import { ActionReducer, ActionReducerMap, createReducer, INIT, MetaReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { logInSuccessAction, logOutAction } from "../actions/access.action";
import { AppState } from "../state/app.state";

export interface LoginResponse {
    headers:Token | null;
}
export class Token {
    private _userId: string | null;
    private _authorization: string | null;

    public get userId(): string |null {
        return this._userId;
    }

    public set userId(userId: string | null
    ) {
        this._userId = userId;
    }

    public get authorization(): string |null {
        return this._authorization;
    }

    public set authorization(authorization: string |null) {
        this._authorization = authorization;
    }
}

export const initialToken=new Token();
export const initialLoginResponse={headers:initialToken}
export const logInReducer=createReducer(
    initialLoginResponse,
    on(logInSuccessAction,(state, {headers})=>{
        return {...state,...headers}
    })
)
const logOutMeta=(reducer:ActionReducer<any>):ActionReducer<any>=>{
    return (state,action)=>{
        if(action.type==logOutAction.type){
            
            return reducer(undefined,{type:INIT})
        }
        return reducer(state,action);
    }
}
export const metaReducer:MetaReducer<AppState>[]=[logOutMeta]
export const reducers:ActionReducerMap<AccessState>={
    logout: logOutAction,
    login :logInReducer,

}
export interface AccessState{
    login:any;
    logout:any;
}