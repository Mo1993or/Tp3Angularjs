import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/services/meteo.service';
import { SearchPipe } from 'src/app/search.pipe';

@Component({
  selector: 'app-liste-meteo',
  templateUrl: './liste-meteo.component.html',
  styleUrls: ['./liste-meteo.component.css']
})
export class ListeMeteoComponent implements OnInit {
searchText="";
meteos: any;


  constructor(private meteo: MeteoService) {
    this.meteos=this.meteo.getMEteos();
   
   }
getSeach(){
 
  this.searchText;
  
}
  ngOnInit() {
  }

}
