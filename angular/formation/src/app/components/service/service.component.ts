import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Rot13Service } from 'src/app/services/rot13/rot13.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  // ? => string ou null ou undefined
  message = '';
  crypted?: string = '';
  constructor(private title: Title, private cipher: Rot13Service) {}

  ngOnInit(): void {
    //private title: Title + this.title.setTtile => Va changer le titre de la page
    this.title.setTitle('les services');
  }
  public crypt(): void {
    this.crypted = this.cipher.encode(this.message);
  }
}
