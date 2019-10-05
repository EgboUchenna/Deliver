import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ratingscard',
  templateUrl: './ratingsCard.component.html',
  styleUrls: ['./ratingsCard.component.css']
})
export class RatingsCardComponent implements OnInit {
  @Input() food;
  constructor() { }

  ngOnInit() { }
}
