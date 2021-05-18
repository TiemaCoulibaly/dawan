import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  lists = ['Buy some milk', 'Go to the barberShop'];
  newTodo: string = '';
  constructor() {}

  ngOnInit(): void {}

  public addTodo() {
    if ('' != this.newTodo.trim()) {
      this.lists.push(this.newTodo);
      this.newTodo = '';
    }
  }
  public deleteTodo(index: number) {
    this.lists.splice(index, 1);
  }
}
