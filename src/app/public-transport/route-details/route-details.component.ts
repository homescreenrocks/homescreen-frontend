import { Component, OnInit, Input } from '@angular/core';

import { IRoute } from '../shared/route';

@Component({
  selector: 'hs-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.css']
})
export class RouteDetailsComponent implements OnInit {
  @Input() route: IRoute;

  constructor() { }

  ngOnInit() {
    console.log(this.route);
  }

}
