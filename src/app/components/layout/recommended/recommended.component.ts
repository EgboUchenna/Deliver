import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  foods = [
    { name: 'Jollof Etcetera', rating: 4 },
    { name: 'Jollof Etcetera', rating: 4 },
    { name: 'Jollof Etcetera', rating: 4 },
    { name: 'Jollof Etcetera', rating: 4 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
