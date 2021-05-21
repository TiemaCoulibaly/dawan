import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TodoComponent } from './components/todo/todo.component';
import { FiltreComponent } from './components/filtre/filtre.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { LocaleComponent } from './components/locale/locale.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { SignupComponent } from './components/signup/signup.component';
import { ServiceComponent } from './components/service/service.component';
import { Observable } from 'rxjs';
import { ObservableComponent } from './components/observable/observable.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { BonusComponent } from './components/bonus/bonus.component';
import { SecureRouteGuard } from './guards/secureRoute/secure-route.guard';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpComponent } from './components/http/http.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'filtre', component: FiltreComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'locale', component: LocaleComponent },
  { path: 'custom-pipe', component: CustomPipeComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'observable', component: ObservableComponent },
  {
    path: 'parameters',
    component: ParametersComponent,
    data: { message: 'hello world' },
  },
  {
    path: 'parameters/:name',
    component: ParametersComponent,
    data: { message: 'hello world' },
    canActivate: [SecureRouteGuard],
  },
  { path: 'bonus', component: BonusComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'http', component: HttpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
