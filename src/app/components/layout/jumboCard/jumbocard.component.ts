import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbocard',
  templateUrl: './jumbocard.component.html',
  styleUrls: ['./jumbocard.component.css']
})
export class JumboCardComponent implements OnInit {
  cities = [
    { city: 'Abuja', places: ['Sectariat', 'Senate', 'Aso Villa', 'Headquarters', 'FCT'] },
    { city: 'Lagos', places: ['Ikeja', 'Badagry', 'Lekki', 'Victoria Island', 'Ajah', 'Ikorodu'] },
    { city: 'Rivers', places: ['Diobu', 'Portharcourt', 'Aba Road', 'Rumuokoro', 'Choba ', 'Waterlines', 'Agip', 'Eleme'] },
    { city: 'Enugu', places: ['Agbani', 'Nkanu-East', 'Idodo', 'Ezeagu ', 'Nsukka'] },
    { city: 'Taraba', places: ['Jalingo', 'Wukar', 'Gembu', 'Kashimbila ', 'Takum'] }
  ];
  places = [];
  city = '';
  place = '';
  processIt() {
    this.places = this.cities.find(city => city.city === this.city).places;
  }
  constructor() { }

  ngOnInit() { }

}
