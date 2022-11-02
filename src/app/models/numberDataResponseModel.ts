import { ResponseModel } from "./ResponseModel";

export interface NumberDataResponseModel<T> extends ResponseModel{
    data:number
}