import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchString: string, property: string): any {
    if(value.length === 0 || searchString === ''){
      return value;
    }
    const foundUsers = [];
    for(const user of value){
      if(user[property] === searchString){
        foundUsers.push(user);
      }
    }
    return foundUsers;
  }
}




