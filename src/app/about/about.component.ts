import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  skills: object; 

  constructor() { 
    this.skills = {
      "HTML" : "90",
      "CSS" :  "90",
      "Angular" : "75",
      "Xamarin" : "75",
      ".NET Core" : "65",
      "React" : "50"
    }
  }

  ngOnInit() {
  }

  sortSkills = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return b.value.localeCompare(a.value);
  }
}
