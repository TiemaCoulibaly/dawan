import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TodoComponent } from './components/todo/todo.component';
import { FiltreComponent } from './components/filtre/filtre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'filtre', component: FiltreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
