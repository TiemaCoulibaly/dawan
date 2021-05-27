import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith(environment.externe.api)) {
      console.log(`User Interceptor; ${req.url} `);

      // Http: Les entetes personnalisées commence par X-...
      const httpsReq = req.clone({
        url: req.url.replace('http://', 'https://'),
        headers: req.headers.append('Authorization', '...token...'),
      });
      return next.handle(httpsReq).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && event.status === 200) {
            const body = event.body;
            body.push({
              id: 100,
              name: 'Jack Bauer',
              phone: '+221 456 789 98',
              email: 'jack.bauer@gmail.com',
            });
            return event.clone({ body });
          }
          return event;
        })
      );
    }

    return next.handle(req);
  }
}
