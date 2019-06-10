import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styleUrls: ['./portfolio-items.component.scss']
})
export class PortfolioItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items: any[] = [
    {
      "itemID": 1,
      "itemName": "WhereToDo",
      "itemTagline": "A to-do list app that geolocates tasks."
    },
    {
      "itemID": 2,
      "itemName": "Sit/Stand Timer",
      "itemTagline": "A timer app used to remind you to change position while working."
    }
  ]

}
