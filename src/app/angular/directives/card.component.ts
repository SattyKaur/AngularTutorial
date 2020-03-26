import {Component} from '@angular/core';


@Component({
    selector: 'card-component',
    template: `
        <div class="card">
            <div class="card-header">
                <ng-content select=".heading"></ng-content>
            </div>
            <div class="card-body">
                <ng-content select=".body"></ng-content>
            </div>
        </div>
    `
})

export class CardComponent {

}
