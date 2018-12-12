import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSelect',
  pure: true,
})
export class FilterSelectPipe implements PipeTransform {

  transform(value: any,
            filterCode?: string,
            filterRefArt?: string,
            filterRefHeu?: string,
            filterDes?: string,
            filterCat?: string): any {
    let listData = null;
    if (undefined === filterCode) { filterCode = ''; }
    if (undefined === filterRefArt) { filterRefArt = ''; }
    if (undefined === filterRefHeu) { filterRefHeu = ''; }
    if (undefined === filterDes) { filterDes = ''; }
    if (undefined === filterCat) { filterCat = ''; }
    console.log('Valeur :', value, '- FilterSelectPipe :', filterCode, filterRefArt, filterRefHeu, filterDes, filterCat);
    if (value) {
      listData = value.filter(p => p.code.includes(filterCode)
                                && p.refarticle.includes(filterRefArt)
                                && p.refheulin.includes(filterRefHeu)
                                && p.designation.includes(filterDes)
                                && p.categorie.includes(filterCat));
    }
    return listData;
  }

}
