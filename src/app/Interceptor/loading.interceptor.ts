import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../Shared/Services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private _LoadingService:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('LoadingInterceptor');

    this._LoadingService.show();
    return next.handle(request).pipe(
      finalize(() => this._LoadingService.hide()),
    );;
  }
}
