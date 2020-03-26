import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {AngularMenuComponent} from './angular/angular-menu/angular-menu.component';
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




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AngularMenuComponent,
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
    ComponentTemplatesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
