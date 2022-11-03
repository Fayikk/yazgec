import { Image } from "./imagee"


export class QuestionDto{
    questionId?:number
    questionDescription?:string
    title?:string
    questionImage?:Image[]
    userId?:number
    firstName?:string
    lastName?:string
    date?:Date

}