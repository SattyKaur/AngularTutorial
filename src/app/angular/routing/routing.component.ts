import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  next() {
    this.router.navigate(['/modules']);
    window.scroll(0, 0);
  }

  previous() {
    this.router.navigate(['/forms']);
    window.scroll(0, 0);
  }

  up() {
    window.scroll(0, 0);
  }


}
