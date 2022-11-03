import { Commment } from "./comment"
import { CommentDetail } from "./commentDetail"
import { Image } from "./imagee"
export interface QuestionDetailDto{
    questionId:number
    questionDescription:string
    title:string
    userId:number
    firstName:string
    lastName:string
    date:Date 
    questionImage:Image[]
    commentDetail:CommentDetail[]
    
}