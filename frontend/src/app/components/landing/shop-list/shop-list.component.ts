import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { AuthService } from 'src/app/services/auth.service';
import { ShopItemService } from 'src/app/services/shop-item.service';


@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

    shopList: any[] = [];
    currentUser: any;
    email: String;

    constructor(private authService: AuthService, private shopItemService: ShopItemService, private ref: ChangeDetectorRef) {
        this.shopItemService.getShopList().subscribe(shops => {
            this.shopList = shops;
            console.log(this.shopList);
            this.ref.detectChanges();
        });
    }
    
    ngOnInit(): void {
        this.initiateProcess();
    }

    async initiateProcess() {
        this.currentUser = await Auth.currentAuthenticatedUser();
        if (this.currentUser) {
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
    }

}
