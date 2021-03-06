import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-component-templates',
  templateUrl: './component-templates.component.html',
  styleUrls: ['./component-templates.component.css'],
})
export class ComponentTemplatesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  next() {
    this.router.navigate(['/binding']);
    window.scroll(0, 0);
  }

  scroll() {
    window.scroll(0, 0);
  }

}
