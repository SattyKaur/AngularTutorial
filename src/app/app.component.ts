import {Component, OnInit} from '@angular/core';
import {RouteAnimation} from './route.animation';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [RouteAnimation.slideAnimation]
})
export class AppComponent implements OnInit {
  title = 'Angular Basics';

  angularLinks = [
    {link: '/home', name: 'Home'},
    {link: '/components', name: 'Components'},
    {link: '/binding', name: 'Binding'},
    {link: '/input-properties', name: 'Input & Output'},
    {link: '/directives', name: 'Directives'},
    {link: '/services', name: 'Services'},
    {link: '/pipes', name: 'Pipes'},
    {link: '/forms', name: 'Forms'},
    {link: '/routing', name: 'Routing'},
    {link: '/modules', name: 'Modules'},
    {link: '/quiz', name: 'Quiz'}
  ];



  constructor(private router: Router) {}

  ngOnInit() {

  }

  loadComponent(path: string) {
    this.router.navigate([path]);
    window.scroll(0, 0);
  }

}
