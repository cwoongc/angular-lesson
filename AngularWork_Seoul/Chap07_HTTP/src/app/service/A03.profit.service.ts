import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProfitService {

    constructor(private http: Http) {}

    getProfit(): Observable<string[]> {
        return this.http.get('/assets/resources/productData.json')
        .map((res: Response) => res.json())
        .catch(this.handleError);
    }


    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        // console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}