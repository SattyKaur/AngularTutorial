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

  next(el: HTMLElement) {
    this.router.navigate(['angular/services']);
    el.scrollIntoView();
  }

  previous(el: HTMLElement) {
    this.router.navigate(['angular/input-properties']);
    el.scrollIntoView();
  }


}
