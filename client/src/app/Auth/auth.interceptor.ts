import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req);
  let token = localStorage.getItem('access_token');
  if (token) {
    let cloneReq = req.clone({
      headers: new HttpHeaders().set('Authorization', `bearer ${token}`),
    });
    return next(cloneReq);
  }
  return next(req);
};
