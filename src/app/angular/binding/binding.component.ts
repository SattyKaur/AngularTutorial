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

  next() {
    this.router.navigate(['/input-properties']);
    window.scroll(0, 0);
  }


  previous() {
    this.router.navigate(['/components']);
    window.scroll(0, 0);
  }

  up() {
    window.scroll(0, 0);
  }

}
