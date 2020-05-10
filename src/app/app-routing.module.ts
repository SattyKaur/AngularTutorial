import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found.component';
import {HomepageComponent} from './homepage/homepage.component';
import {RoutingComponent} from './angular/routing/routing.component';
import {ComponentTemplatesComponent} from './angular/component-templates/component-templates.component';
import {BindingComponent} from './angular/binding/binding.component';
import {InputPropertiesComponent} from './angular/input-properties/input-properties.component';
import {DirectivesComponent} from './angular/directives/directives.component';
import {ServicesComponent} from './angular/services/services.component';
import {PipesComponent} from './angular/pipes/pipes.component';
import {FormsComponent} from './angular/forms/forms.component';
import {ModulesComponent} from './angular/modules/modules.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'home', component: HomepageComponent},
      {path: 'components', component: ComponentTemplatesComponent},
      {path: 'binding', component: BindingComponent},
      {path: 'input-properties', component: InputPropertiesComponent},
      {path: 'directives', component: DirectivesComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'pipes', component: PipesComponent},
      {path: 'forms', component: FormsComponent},
      {path: 'routing', component: RoutingComponent},
      {path: 'modules', component: ModulesComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
