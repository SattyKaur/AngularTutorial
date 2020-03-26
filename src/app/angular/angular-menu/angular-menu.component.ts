import { Component, OnInit } from '@angular/core';
import {RouteAnimation} from '../../route.animation';

@Component({
  selector: 'app-angular-menu',
  templateUrl: './angular-menu.component.html',
  styleUrls: ['./angular-menu.component.css'],
  animations: [RouteAnimation.slideAnimation]
})
export class AngularMenuComponent implements OnInit {

  menuToggle = true;

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
