import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../Interfaces/iproduct';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: IProduct[], searchText: string): IProduct[] {
    /* if (!items) return [];
     if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.title.toLowerCase().includes(searchText);
    }); */

    return items.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));
  }

}
