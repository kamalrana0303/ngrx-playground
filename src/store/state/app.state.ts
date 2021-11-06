import { Product } from "../../models/models";
import { LoginResponse } from "../reducers/access.reducer";

export interface AppState{
    readonly headers: LoginResponse,
    
}