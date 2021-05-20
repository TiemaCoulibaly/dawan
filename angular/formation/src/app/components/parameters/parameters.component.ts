import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css'],
})
export class ParametersComponent implements OnInit {
  //string, null, undefined
  name?: string | null;
  page?: string | null;

  data$?: Observable<Data>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    // paramMap(ValueObject = lecture seule) => type Object c'est un Observeur
    // params => type Array c'est un observeur

    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('name')) {
        this.name = params.get('name');
      }
    });
    this.route.queryParamMap.subscribe((queryparams: ParamMap) => {
      this.page = queryparams.has('page') ? queryparams.get('page') : '1';
      // if (queryparams.has('page')) {
      //   this.page = queryparams.get('page');
      // }
    });
    this.data$ = this.route.data;
  }
  public goback(): void {
    this.location.back(); // redirige vers la page precedente

    //this.router.navigateByUrl('/parameters');// redirige vers une nouvelle url indiquer
    //window.history.back();
  }
}
