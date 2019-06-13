import { Component, OnInit } from '@angular/core';
import { IPortfolioItem } from './portfolioItem';

@Component({
  selector: 'portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styleUrls: ['./portfolio-items.component.scss']
})
export class PortfolioItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items: IPortfolioItem[] = [
    {
      "itemID": "whereToDo",
      "itemName": "WhereToDo",
      "itemTagline": "A to-do list app that geolocates tasks.",
      "itemDescription": {
        "project": "A short overview of what it does and why I did it.",
        "tech": "The frameworks I used and things I learned from the experience.",
        "future": "What I'd like to do in the future and/or what I would've done differently."
      },
      "itemImage": "This will be an image URL."
    },
    {
      "itemID": "sitStandTimer",
      "itemName": "Sit/Stand Timer",
      "itemTagline": "A timer app used to remind you to change position while working.",
      "itemDescription": {
        "project": "A short overview of what it does and why I did it.",
        "tech": "The frameworks I used and things I learned from the experience.",
        "future": "What I'd like to do in the future and/or what I would've done differently."
      },
      "itemImage": "This will be an image URL."
    }
  ]

}
