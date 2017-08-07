﻿import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

declare var window: any;

@Injectable()
export class ApprovementServices {
    private apiUrl = window.GlobalSettings.ApiBase + 'Approvement';

    constructor(private _http: AuthHttp) {

    }

    ApproveProduct(id: number): Observable<any> {
        return this._http.get(this.apiUrl + "/ProductApprove/" + id).map(res => res.json());
    }
}