import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  // Typescript way
  appTitle: string = "eckig-sieben-app";

  // Javascript way
  //appTitle = "eckig-sieben-app";
  
  constructor() {}

  ngOnInit() {}
}
