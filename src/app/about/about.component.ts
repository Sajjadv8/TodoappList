import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <p>
    This app is for registering your profile in the list
    </p>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
