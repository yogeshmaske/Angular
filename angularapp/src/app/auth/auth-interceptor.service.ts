import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('base request',req);
        // const modifiedReq = req.clone()

        // // we can set our headers

        // modifiedReq.headers.set("test","testnew")

        // // will set new header application/json
        //  modifiedReq.headers.set("Content-Type","application/json")

        //  return next.handle(modifiedReq)

        return next.handle(req.clone({
            url:req.url.replace("http://","https://")
        }));
    }

}