import { Component, OnInit } from '@angular/core';
import {RouteAnimation} from '../../route.animation';

@Component({
  selector: 'app-angular-menu',
  templateUrl: './angular-menu.component.html',
  styleUrls: ['./angular-menu.component.css'],
  animations: [RouteAnimation.slideAnimation]
})
export class AngularMenuComponent implements OnInit {


  angularLinks = [
    {link: 'components-templates', name: 'Components'},
    {link: 'binding', name: 'Binding'},
    {link: 'input-properties', name: 'Input & Output'},
    {link: 'directives', name: 'Directives'},
    {link: 'services', name: 'Services'},
    {link: 'pipes', name: 'Pipes'},
    {link: 'forms', name: 'Forms'},
    {link: 'routing', name: 'Routing'},
    {link: 'modules', name: 'Modules'}
  ];

  constructor() { }

  ngOnInit() {
  }




}
