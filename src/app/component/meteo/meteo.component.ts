import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeteoService } from 'src/app/services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  details: any;
  
  constructor(private activeRoute:ActivatedRoute,private meteo:MeteoService) {
    this.activeRoute.paramMap.subscribe(param => {
      let name=param.get("name");
      this.details=this.meteo.getOnName(name);
    })
   }

  ngOnInit() {
  }

}
