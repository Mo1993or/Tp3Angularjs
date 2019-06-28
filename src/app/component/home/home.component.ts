import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/services/meteo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
meteos;
  constructor(private meteo:MeteoService) { }

  ngOnInit() {
    this.meteos=this.meteo.getMEteos()
  }

}
