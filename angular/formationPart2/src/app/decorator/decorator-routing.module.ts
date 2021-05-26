import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentChildComponent } from './components/content-child/content-child.component';
import { TodoComponent } from './components/todo/todo.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { DecoratorComponent } from './decorator.component';
//Ajouter children:[] => pour créer des routes dans un composant enfant
const routes: Routes = [
  {
    path: '',
    component: DecoratorComponent,
    children: [
      { path: 'todo', component: TodoComponent },
      { path: 'view-child', component: ViewChildComponent },
      { path: 'content-child', component: ContentChildComponent },
      { path: '', redirectTo: '/decorator/todo' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecoratorRoutingModule {}
