import { ResponseModel } from "./ResponseModel"

export interface Question extends ResponseModel{
    questionId:number
    description:string
    categoryId:number
    title:string
    message:string
    
}