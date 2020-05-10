import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {BindingComponent} from './angular/binding/binding.component';
import { InputPropertiesComponent } from './angular/input-properties/input-properties.component';
import {ParentComponent} from './angular/input-properties/parent.component';
import {ChildComponent} from './angular/input-properties/child.component';
import { DirectivesComponent } from './angular/directives/directives.component';
import {CardComponent} from './angular/directives/card.component';
import { HighlightDirectiveDirective } from './angular/directives/highlight-directive.directive';
import { ServicesComponent } from './angular/services/services.component';
import { PipesComponent } from './angular/pipes/pipes.component';
import { ReversePipePipe } from './angular/pipes/reverse-pipe.pipe';
import { FormsComponent } from './angular/forms/forms.component';
import { RoutingComponent } from './angular/routing/routing.component';
import { ModulesComponent } from './angular/modules/modules.component';
import { ComponentTemplatesComponent } from './angular/component-templates/component-templates.component';
import {FilterPipe} from './angular/pipes/filter.pipe';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRippleModule} from '@angular/material/core';
import { HomepageComponent } from './homepage/homepage.component';





@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BindingComponent,
    InputPropertiesComponent,
    ParentComponent,
    ChildComponent,
    DirectivesComponent,
    CardComponent,
    FilterPipe,
    HighlightDirectiveDirective,
    ServicesComponent,
    PipesComponent,
    ReversePipePipe,
    FormsComponent,
    RoutingComponent,
    ModulesComponent,
    ComponentTemplatesComponent,
    HomepageComponent
  ],
  imports: [
    MatRippleModule,
    MatMenuModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatTabsModule,
    ScrollingModule,
    MatToolbarModule
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
