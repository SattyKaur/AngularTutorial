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

  next() {
    this.router.navigate(['angular/pipes']);
    window.scrollTo(0, 0);
  }

  previous() {
    this.router.navigate(['angular/directives']);
    window.scrollTo(0, 0);
  }

  top() {
    window.scrollTo(0, 0);
  }


}
