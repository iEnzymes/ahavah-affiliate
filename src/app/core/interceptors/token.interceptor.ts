import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

import { LocalStorageService } from '../services/local-storage.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const storageService = inject(LocalStorageService);
  const router = inject(Router);

  request = request.clone({
    headers: request.headers
      .append('Content-Type', 'application/json')
      .append(
        'Authorization',
        `Token ae0a6d5bd35a4396ca92077c51f9fc712e1ab2c8`,
      ),
  });

  return next(request).pipe(
    catchError((err) => {
      if (err instanceof HttpErrorResponse) {
        // Handle HTTP errors
        if (err.status === 401) {
          storageService.clearData();
          router.navigateByUrl('/', { replaceUrl: true });
        } else {
          // Handle other HTTP error codes
          // eslint-disable-next-line no-console
          console.error('HTTP error:', err);
        }
      } else {
        // Handle non-HTTP errors
        // eslint-disable-next-line no-console
        console.error('An error occurred:', err);
      }

      // Re-throw the error to propagate it further
      return throwError(() => err);
    }),
  );
};
