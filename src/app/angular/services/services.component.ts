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

  scroll() {
    window.scroll(0, 0);
  }

  next() {
    this.router.navigate(['/pipes']);
    window.scroll(0, 0);
  }

  previous() {
    this.router.navigate(['/directives']);
    window.scroll(0, 0);
  }



}
