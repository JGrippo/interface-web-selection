import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchString: string): any {
    if(value.length === 0 || searchString === ''){
      return value;
    }
    const foundUsers = [];
    for(const user of value){
      if(user.name.first.toLowerCase().includes(searchString) || user.name.last.toLowerCase().includes(searchString)){
        foundUsers.push(user);
      }
    }
    return foundUsers;
  }
}




