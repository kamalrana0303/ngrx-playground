export interface Product {
    productId:     string;
    name:          string;
    variantId:     number;
    variantName:   string;
    mrp:           number;
    offeredPrice:  number;
    onelapScore:   string;
    starRating:    number;
    recommended:   string;
    discountValue: number;
    images:        Image[];
    categories:    any[];
}

export interface Image {
    path: string;
}
export interface User{
    username:string;
    password:string;
}