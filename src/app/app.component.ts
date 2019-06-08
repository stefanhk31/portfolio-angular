import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private isWelcome: boolean = false;

  constructor(private location: Location) { }

  ngOnInit() {
      this.isWelcome = this.location.isCurrentPathEqualTo("");
  }
}



