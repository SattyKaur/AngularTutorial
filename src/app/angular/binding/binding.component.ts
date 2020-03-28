import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  // TWO WAY BINDING FIELD
  input: string = 'Enter New Title...';
  title: string = 'Title';
  answer: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  keyPressed() {
    this.title = this.input;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  answerStyle() {
    if (this.answer) {
      return {color: 'green'};
    } else {
      return {color: 'red'};
    }
  }

  next(el: HTMLElement) {
    this.router.navigate(['angular/input-properties']);
    el.scrollIntoView();
  }


  previous(el: HTMLElement) {
    this.router.navigate(['angular/components-templates']);
    el.scrollIntoView();
  }

}
