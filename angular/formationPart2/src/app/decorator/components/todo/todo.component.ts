import {
  asNativeElements,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  lists = ['Buy some milk', 'Go to the Barber'];
  newTodo: string = '';
  // static: true => permet de faire référence à l'element avant le chargement de la vue
  @ViewChild('inputElement', { static: true }) inputRef?: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  public addTodo() {
    if ('' != this.newTodo.trim()) {
      this.lists.push(this.newTodo);
      this.newTodo = '';
      //va permettre de replacer le focus sur l'input onsubmit
      this.inputRef!.nativeElement.focus();
    }
  }
  public deleteTodo(index: number) {
    this.lists.splice(index, 1);
  }
}
