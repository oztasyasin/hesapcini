import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterText?: any): any[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null
    return filterText ? value.filter((p: any) => p.searchText
      .toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
