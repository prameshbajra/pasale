import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ShopItemService } from 'src/app/services/shop-item.service';

import { CognitoUserInterface } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

    shopList: any[] = [];
    currentUser: CognitoUserInterface;
    email: String;

    constructor(private authService: AuthService, private shopItemService: ShopItemService, private ref: ChangeDetectorRef) {
        this.shopItemService.getShopList().subscribe(shops => {
            this.shopList = shops;
            console.log(this.shopList);
            this.ref.detectChanges();
        });
    }
    
    ngOnInit(): void {
        this.authService.getCurrentUser().subscribe((user: CognitoUserInterface) => {
            if (user) {
                this.currentUser = user;
                this.email = this.currentUser.attributes.email;
                const userPayload = { email: this.email }
                this.shopItemService.getShopsForUser(userPayload).subscribe((response) => {
                    this.shopItemService.setShopList(response.shopsForUser);
                }, (error) => {
                    console.error(error);
                });
            } else {
                // TODO: Redirect to home page where amplify will handle the routing ...
            }
        }, (error) => {
            console.error(error);
        });
    }

}
