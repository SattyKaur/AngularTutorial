import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  previous() {
    this.router.navigate(['angular/routing']);
    window.scrollTo(0, 0);
  }

  top() {
    window.scrollTo(0, 0);
  }


}
