import { HttpInterceptorFn } from '@angular/common/http';

export const authGuardsInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
