import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
    selector: 'child-component',
    template: `
        <div> <em>child.component.ts</em> <br>
    <div class="borderBox col-md-8">
        <h6>Today's Quote is : {{quoteOfTheDay}}</h6>
        <label>Change the Title: <input #newTitle></label>
        <button class="btn-sm btn-outline-info b1" (click)="changeTitle(newTitle.value)">Change the parents title</button>  
    </div>
    </div>
    `
})

export class ChildComponent {

    @Input() quoteOfTheDay: string;

    @Output() newTitleEvent = new EventEmitter<string>();


    changeTitle(value: string) {
        this.newTitleEvent.emit(value);
    }
}
