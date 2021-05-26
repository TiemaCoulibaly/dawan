import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoratorRoutingModule } from './decorator-routing.module';
import { DecoratorComponent } from './decorator.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { ViewChildComponent } from './components/view-child/view-child.component';

@NgModule({
  declarations: [DecoratorComponent, TodoComponent, ViewChildComponent],
  imports: [CommonModule, DecoratorRoutingModule, FormsModule],
})
export class DecoratorModule {}
