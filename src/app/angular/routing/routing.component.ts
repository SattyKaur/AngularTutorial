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

  next(el: HTMLElement) {
    this.router.navigate(['angular/modules']);
    el.scrollIntoView();
  }

  previous(el: HTMLElement) {
    this.router.navigate(['angular/forms']);
    el.scrollIntoView();
  }


}
