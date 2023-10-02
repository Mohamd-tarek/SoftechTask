import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, of } from "rxjs";

@Injectable()

export class CacheInterceptor implements HttpInterceptor {

  private cache = new Map<string, any>();
  constructor() {}
  
  intercept( request: HttpRequest<any>, next: HttpHandler  ): Observable<HttpEvent<any>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }
  
    let url = request.url.split('0000/');
    url = url[1].split('/');
    
    if(url[0] == "Orders" ||url[0] == "Products" )
    {
      const cachedResponse = this.cache.get(request.url);
      if (cachedResponse) {
          return of(cachedResponse);
        }
    }
   

    return next.handle(request).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          this.cache.set(request.url, response);
        }
      })
    );
  }
}

