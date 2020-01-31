import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    if(!searchText) {
      return value;
    }
    return value.filter((data) => this.matchValue(data,searchText)); 
  }

  matchValue(data, value) {
    return Object.keys(data).map((key) => {
      // console.log(key)
       return new RegExp(value, 'gi').test(data["title"]);
    }).some(result => result);
  }

}
