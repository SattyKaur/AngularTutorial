import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  toggleDisplay: boolean = true;
  basket: string[];

  constructor(private router: Router) {
    this.basket = ['Apples', 'Milk', 'Bread', 'Shampoo'];
  }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  next() {
    this.router.navigate(['angular/services']);
    window.scrollTo(0, 0);
  }

  previous() {
    this.router.navigate(['angular/input-properties']);
    window.scrollTo(0, 0);
  }

  top() {
    window.scrollTo(0, 0);
  }

}
