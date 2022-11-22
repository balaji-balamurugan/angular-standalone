import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <p>
      home works!
    </p>
  `,
  styles:[
    `
    p {
      color: red;
    }
    `
  ]

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
