import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ShopItemService {

    SERVER_URL = "https://3stlpiadj2.execute-api.ap-south-1.amazonaws.com/dev/";

    constructor(private http: HttpClient) { }

    public addShop(shop): Observable<any> {
        console.log(shop);
        return this.http.post(`${this.SERVER_URL}addShopByUser`, shop);
    }

}
