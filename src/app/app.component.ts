import { Component } from '@angular/core';

@Component({
  selector: 'hs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [
    { label: 'Home', href: '' },
    { label: 'VBB', href: 'public-transport' }
  ];
}
