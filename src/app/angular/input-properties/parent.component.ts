import {Component} from '@angular/core';


@Component({
    selector: 'parent-component',
   template: `
       <div><em>parent.component.html</em> <br>
          <div class="borderBox">
              <h4>{{title}}</h4>
              <child-component (newTitleEvent)="changeTitle($event)" [quoteOfTheDay]="currentQuote"></child-component>
          </div>
       </div>
       
   `
})

export class ParentComponent {

    title: string = 'Quotes of the Day' ;

    currentQuote: string = 'Be the change you want to see';

    changeTitle(value) {
        this.title = value;
    }

}
