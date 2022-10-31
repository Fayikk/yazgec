import { Commment } from "./comment"
import { Image } from "./image"
export class QuestionDetailDto{
    questionId:number
    questionDescription:string
    title:string
    comment:Commment[]
    imagee:Image[]
    
}