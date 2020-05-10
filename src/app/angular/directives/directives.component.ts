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

  up() {
    window.scroll(0, 0);
  }

  next() {
    this.router.navigate(['/services']);
    window.scroll(0, 0);
  }

  previous() {
    this.router.navigate(['/input-properties']);
    window.scroll(0, 0);
  }


}
