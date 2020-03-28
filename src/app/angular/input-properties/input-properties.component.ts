import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-input-properties',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css']
})
export class InputPropertiesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next(el: HTMLElement) {
    this.router.navigate(['angular/directives']);
    el.scrollIntoView();
  }

  previous(el: HTMLElement) {
    this.router.navigate(['angular/binding']);
    el.scrollIntoView();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
