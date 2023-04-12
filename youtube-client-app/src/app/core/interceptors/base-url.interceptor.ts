/* eslint-disable class-methods-use-this */
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('search')) {
      const url = req.url.replace('search', 'https://www.googleapis.com/youtube/v3/search');
      const newReq = req.clone({ url });
      return next.handle(newReq);
    }
    if (req.url.includes('stats')) {
      const url = req.url.replace('stats', 'https://returnyoutubedislikeapi.com/votes');
      const newReq = req.clone({ url });
      return next.handle(newReq);
    }
    if (req.url.includes('comments')) {
      const url = req.url.replace('comments', 'https://www.googleapis.com/youtube/v3/videos');
      const newReq = req.clone({ url });
      return next.handle(newReq);
    }

    // If the request is not for a base URL, forward it as is
    return next.handle(req);
  }
}
