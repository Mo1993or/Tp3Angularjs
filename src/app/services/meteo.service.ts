import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  
  meteos:any=[
    {source:"carted.jpg",name:'Dakar',temp:20,Superficie:'400km2',Densite:'20/km2',Climat:'apaiser'},
    {source:"cartet.jpg",name:'Thies',temp:25,Superficie:'400km2',Densite:'20/km2',Climat:'apaiser'},
    {source:"cartedbl.jpg",name:'Diourbel',temp:31,Superficie:'400km2',Densite:'20/km2',Climat:'apaiser'},
    {source:"carteS.jpg",name:'Saint-louis',temp:20,Superficie:'400km2',Densite:'20/km2',Climat:'apaiser'},
    {source:"carteL.jpg",name:'Louga',temp:35,Superficie:'400km2',Densite:'20/km2',Climat:'apaiser'},
    {source:"carteFat.jpg",name:'Fatick',temp:25,Superficie:'400km2',Densite:'20/km2',Climat:'apaiser'},
    {source:"carteM.jpg",name:'Matam',temp:45,Superficie:'400km2',Densite:'20/km2',Climat:'apaiser'},
    {source:"carteKoa.jpg",name:'Koalack',temp:43,Superficie:'400km2',Densite:'20/km2',Climat:'apaiser'},
    {source:"carteTa.jpg",name:'Tamba',temp:50,Superficie:'400km2',Densite:'20/km2',Climat:'apaiser'},
    {source:"carteZig.jpg",name:'Zinguinchor',temp:33,Superficie:'400km2',Densite:'20/km2',Climat:'apaiser'},
    {source:"carteKol.jpg",name:'Kolda',temp:33,Superficie:'400km2',Densite:'20/km2',Climat:'apaiser'},
    {source:"carteKed.jpg",name:'Kedougou',temp:53,Superficie:'400km2',Densite:'20/km2',Climat:'apaiser'},
    {source:"carteZig.jpg",name:'Oussouye',temp:33,Superficie:'400km2',Densite:'20/km2',Climat:'apaiser'},
    {source:"carteFat.jpg",name:'Kafrine',temp:45,Superficie:'400km2',Densite:'20/km2',Climat:'apaiser'},
  ]
getMEteos(){
 return this.meteos
}

public getOnName(name){
  let meteo=null;
  this.meteos.forEach(met => {
    if(met.name === name ){
      meteo = met; 
    }
  });
  return meteo;
}

public getOnNameL(name){
  let meteo=null;
  this.meteos.forEach(met => {
    if(met.name === name ){
      meteo = met; 
    }
  });
  return meteo;
}
  constructor() { }
}
