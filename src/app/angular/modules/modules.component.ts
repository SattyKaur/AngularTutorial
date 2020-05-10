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

  scroll() {
    window.scroll(0, 0);
  }


  previous() {
    this.router.navigate(['/routing']);
    window.scroll(0, 0);
  }



}
