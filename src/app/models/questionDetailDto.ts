import { Commment } from "./comment"
import { Image } from "./image"
export class QuestionDetailDto{
    questionId:number
    questionDescription:string
    title:string
    userId:number
    firstName:string
    lastName:string
    date:Date
    comment:Commment[]
    questionImage:Image[]
    
}