import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit {
  prenom = 'Tiema';

  product = { name: 'Pomme', price: 12.99 };
  html = '<b>Hello</b>';
  path = 'assets/images/gijoe.jpg';

  /**Model */
  //string, number, boolean
  message: string = '';
  constructor() {}

  ngOnInit(): void {}

  //mettre void lorsque la fonction ne renvoi pas de valeur
  public clicked(): void {
    console.log('cliquer!');
  }

  public confirmation(event: MouseEvent): void {
    // console.log(event.target);
    event.preventDefault();
    confirm('Are You sure?');
  }
  public show(): void {
    alert(this.message);
  }
}
