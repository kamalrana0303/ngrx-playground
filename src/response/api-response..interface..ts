import { Product } from "src/models/models";

export interface ApiResponse<T> {
    status:    number;
    message:   string;
    timestamp: string;
    body:      T[];
}


