import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  private readonly apiKey: string = environment.apiKey;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      url: `${req.url}?key=${this.apiKey}`,
    });
    return next.handle(modifiedReq);
  }
}
