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

  next() {
    this.router.navigate(['angular/directives']);
    window.scrollTo(0, 0);
  }

  previous() {
    this.router.navigate(['angular/binding']);
    window.scrollTo(0, 0);
  }

  top() {
    window.scrollTo(0, 0);
  }

}
