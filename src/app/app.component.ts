import { Component } from '@angular/core';

@Component({
  selector: 'hs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [
    { label: 'Home', href: 'home' },
    { label: 'VBB Fahrinfo', href: 'public-transport' }
  ];
}
