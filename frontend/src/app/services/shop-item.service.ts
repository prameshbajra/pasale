import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ShopItemService {

    public shopList = new Subject<any>();

    SERVER_URL = "https://3stlpiadj2.execute-api.ap-south-1.amazonaws.com/dev/";

    constructor(private http: HttpClient) { }

    public addShop(shop): Observable<any> {
        return this.http.post(`${this.SERVER_URL}addShopByUser`, shop);
    }

    public getShopsForUser(user): Observable<any> {
        return this.http.post(`${this.SERVER_URL}fetchShopDataForUser`, user);
    }

    public getShopList(): Observable<any> {
        return this.shopList.asObservable();
    }

    public setShopList(shopList: any[]): void {
        this.shopList.next(shopList);
    }

}
