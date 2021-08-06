import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foot',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  public currentYear: number;

  constructor() { }

  ngOnInit() {
    let currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
  }

}
