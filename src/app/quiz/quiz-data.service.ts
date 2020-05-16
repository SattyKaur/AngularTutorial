import { Injectable } from '@angular/core';
import {Quiz} from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {


  data: Quiz [] = [
    {
      id: 1,
      question: 'When using the Output() property which direction does the data flow?',
      options: {
        option1: 'A) Parent --> Child',
        option2: 'B) Child --> Parent',
        option3: 'C) Parent <--> Child'
      },
      correct: 'B'
    },
    {
      id: 2,
      question: 'How do you define two-way binding also known as ‘banana in a box’?',
      options: {
        option1: 'A) [ngClass]= “”',
        option2: 'B) {{ obj }}',
        option3: 'C) [(ngModel)]'
      },
      correct: 'C'
    },
    {
      id: 3,
      question: 'Which lifecycle would you use to initialize a variable?',
      options: {
        option1: 'A) ngOnAfterViewInit()',
        option2: 'B) ngOnInit()',
        option3: 'C) ngDoCheck()'
      },
      correct: 'B'
    },
    {
      id: 4,
      question: 'What colour will the text be inside <p>?',
      code: 'componet.css \n' +
        '\t.blue { colour: blue; }\n' +
        '\t.orange { color: orange; }\n' +
        '\n' +
        'component.ts\n' +
        '\tselected: boolean = false;\n' +
        '\n' +
        'component.html\n' +
        '\t<p [ngClass]="selected? \'blue\' : \'orange\'">Option 1</p>\n',
      options: {
        option1: 'A) Blue',
        option2: 'B) Orange',
        option3: 'C) Neither'
      },
      correct: 'B'
    },
    {
      id: 5,
      question: 'What would you type in the CLI to create a new component called ‘Menu’?',
      options: {
        option1: 'A) ng generate component menu',
        option2: 'B) ng create component menu',
        option3: 'C) ng build component menu'
      },
      correct: 'A'
    },
    {
      id: 6,
      question: 'After creating the component, you need to declare it in your Module, which array does it get declared in?',
      options: {
        option1: 'A) providers[ ]',
        option2: 'B) imports[ ]',
        option3: 'C) declarations[ ]'
      },
      correct: 'C'
    },
    {
      id: 7,
      question: 'In a *ngSwitch statement how would you define a default value?',
      options: {
        option1: 'A) *ngSwitchDefault',
        option2: 'B) *ngDefault',
        option3: 'C) *ngDefaultSwitch'
      },
      correct: 'A'
    },
    {
      id: 8,
      question: 'In routing what is the correct HTML tag to display the routed components?',
      options: {
        option1: 'A) <router-output> </router-output>',
        option2: 'B) <router></router>',
        option3: 'C) <router-outlet></router-outlet>'
      },
      correct: 'C'
    },
    {
      id: 9,
      question: 'In the module file, what would you place in the imports[ ] array?',
      options: {
        option1: 'A) Components',
        option2: 'B) Services',
        option3: 'C) Other Modules'
      },
      correct: 'C'
    },
    {
      id: 10,
      question: 'What is the correct pipe to format a date so that is displays like this? ‘Wednesday, April 8, 2003’',
      options: {
        option1: 'A) <p> {{ birthdate | date: ‘fullDate’ }} </p>\n',
        option2: 'B) <p> {{ birthdate | date: ‘full’ }} </p>',
        option3: 'C) <p> {{ birthdate | date: ‘long’ }} </p>'
      },
      correct: 'A'
    },
    {
      id: 11,
      question: 'In template-driven forms, which directive would we use to access form fields and check the form validation?',
      options: {
        option1: 'A) ngModel',
        option2: 'B) ngForm',
        option3: 'C) ngGroup'
      },
      correct: 'B'
    },
    {
      id: 12,
      question: 'What is the correct decorator for a service class?',
      options: {
        option1: 'A) @Component()',
        option2: 'B) @Directive()',
        option3: 'C) @Injectable()'
      },
      correct: 'C'
    },
    {
      id: 13,
      question: 'Below we have declared a reactive form, how do we apply a validation of required and of max length - 200 characters, on the summary input field?',
      code: 'feedbackForm = new FormGroup({\n' +
        '        summary: new FormControl(\'\')\n' +
        '             )}\n',
      options: {
        option1: 'A) feedbackForm = new FormGroup({\n' +
          '        \t\tsummary: new FormControl(\'\', [Validators.required, Validators.maxLength(200)])\n' +
          '             \t)}',
        option2: 'B) feedbackForm = new FormGroup({\n' +
          '        \t\tsummary: new FormControl(\'\', required, maxLength(200))\n' +
          '             \t)}',
        option3: 'C) feedbackForm = new FormGroup({\n' +
          '        \t\tsummary: new FormControl(\'\', Validators.required, Validators.maxLength(200))\n' +
          '             \t)}'
      },
      correct: 'A'
    },
    {
      id: 14,
      question: 'What service would you use to read a route parameter from the url path?',
      options: {
        option1: 'A) Router',
        option2: 'B) ActivatedRoute',
        option3: 'C) ActivatedRouteSnapshot'
      },
      correct: 'B'
    },
    {
      id: 15,
      question: 'What route guard would you use to prefetch data before activating a route?',
      options: {
        option1: 'A) canActivate',
        option2: 'B) canLoad',
        option3: 'C) resolve'
      },
      correct: 'C'
    },
    {
      id: 16,
      question: 'When creating a custom pipe what interface do you need to implement?',
      options: {
        option1: 'A) Pipe',
        option2: 'B) Transform',
        option3: 'C) PipeTransform'
      },
      correct: 'C'
    },
    {
      id: 17,
      question: 'Which is the correct way to use ng-template?',
      options: {
        option1: 'A) <ng-template id= “content”> ….. </ng-template>',
        option2: 'B) <ng-template #content> ….. </ng-template>',
        option3: 'C) <ng-template class= “content”> ….. </ng-template>'
      },
      correct: 'B'
    },
    {
      id: 18,
      question: 'In the component decorators metadata, what is the selector property?',
      options: {
        option1: 'A) An array of any services used in the component',
        option2: 'B) A reference to the CSS used in the component',
        option3: 'C) A custom HTML tag which references the component.'
      },
      correct: 'C'
    },
    {
      id: 19,
      question: 'What method can we use for both reactive and template-driven forms to collect the field values?',
      options: {
        option1: 'A) (ngSubmit)',
        option2: 'B) [ngFormGroup]',
        option3: 'C) [(ngModel)]'
      },
      correct: 'A'
    },
    {
      id: 20,
      question: 'What property would we use to incorporate lazy loading for feature modules?',
      options: {
        option1: 'A) preloadingStrategy',
        option2: 'B) loadChildren',
        option3: 'C) canLoad'
      },
      correct: 'B'
    },



  ];

  constructor() { }
}
