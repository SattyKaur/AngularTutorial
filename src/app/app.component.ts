import {Component, OnInit} from '@angular/core';
import {RouteAnimation} from './route.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [RouteAnimation.slideAnimation]
})
export class AppComponent implements OnInit {
  title = 'Angular Basics';


  constructor() {}

  ngOnInit() {

  }

}
