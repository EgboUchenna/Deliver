import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})

export class HowItWorksComponent implements OnInit {
  guides = [
    {
      title: 'Select Your Resturant',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur minus unde ut vero a incidunt? Temporibus exercitationem dignissimos nemo. '
    },
    {
      title: 'Select Your Desired Meal',
      content:
        'iLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur minus unde ut vero a incidunt? Temporibus exercitationem dignissimos nemo.'
    },
    {
      title: 'Get It Delivered Fast',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur minus unde ut vero a incidunt? Temporibus exercitationem dignissimos nemo.'
    }
  ];
  constructor() { }

  ngOnInit() { }
}
