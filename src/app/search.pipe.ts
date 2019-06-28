import { Pipe, PipeTransform } from '@angular/core';
import { MeteoService } from './services/meteo.service';

@Pipe({
  name: 'search'

})
export class SearchPipe implements PipeTransform {

  transform(meteos: any[], searchText: string): any[] {
    if(!meteos || !searchText){
    
    return meteos;
    }
    searchText=searchText.toLowerCase();
  
  return meteos.filter( it => 
     it.name.toLowerCase().includes(searchText));
    

  }

}
