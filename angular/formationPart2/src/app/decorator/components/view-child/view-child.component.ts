import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { ListUserComponent } from '../list-user/list-user.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  //{static: false} => le composant enfant n'est pas accessible dans la method ngOnInit
  //{static: true} => le composant enfant est pas accessible dans la method ngOnInit
  @ViewChild(ListUserComponent, { static: false }) listUser?: ListUserComponent;
  constructor() {}
  ngOnInit(): void {
    //fonctionne quand {static = true}
    this.listUser?.users.push('Tiema', 'Buenos', 'Dias');
  }

  ngAfterViewInit(): void {
    this.listUser?.users.push('Tiema', 'Buenos', 'Dias');
  }

  public refresh(): void {
    this.listUser?.refresh();
  }
}
