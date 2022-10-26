import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../models/questionmodel';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: Question[], filterText: string): Question[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((p:Question)=>p.title.toLocaleLowerCase()
    .indexOf(filterText)!==-1):value;
  }

}
