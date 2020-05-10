import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  film = {
    title: 'Interstellar',
    rating: 4.9745,
    price: 15.99,
    releaseDate: new Date(2014, 10, 7)
  };

  birthday = new Date(1988, 11, 31);
  toggle = false;

  str: string = 'Hello World';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }


  scroll() {
    window.scroll(0, 0);
  }

  next() {
    this.router.navigate(['/forms']);
    window.scroll(0, 0);
  }

  previous() {
    this.router.navigate(['/services']);
    window.scroll(0, 0);
  }



}
