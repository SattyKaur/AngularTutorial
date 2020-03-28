import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  next(el: HTMLElement) {
    this.router.navigate(['angular/pipes']);
    el.scrollIntoView();
  }

  previous(el: HTMLElement) {
    this.router.navigate(['angular/directives']);
    el.scrollIntoView();
  }



}
