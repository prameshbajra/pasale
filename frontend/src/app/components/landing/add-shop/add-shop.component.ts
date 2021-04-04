import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ShopItemService } from 'src/app/services/shop-item.service';
import { CognitoUserInterface } from '@aws-amplify/ui-components';
import { v4 as uuidv4 } from 'uuid';


@Component({
    selector: 'app-add-shop',
    templateUrl: './add-shop.component.html',
    styleUrls: ['./add-shop.component.scss']
})


export class AddShopComponent implements OnInit {

    position: string;
    displayModal: boolean;
    displayBasic: boolean;
    displayBasic2: boolean;
    displayMaximizable: boolean;
    displayPosition: boolean;

    shopName: String = '';
    shopDescription: String = '';
    currentUser: CognitoUserInterface;
    email: String = '';

    constructor(private shopItemService: ShopItemService, private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.getCurrentUser().subscribe((user: CognitoUserInterface) => {
            if (user) {
                this.currentUser = user;
                this.email = this.currentUser.attributes.email;
            } else {
                // TODO: Redirect to home page where amplify will handle the routing ...
            }
        }, (error) => {
            console.error(error);
        });
    }


    showModalDialog() {
        this.displayModal = true;
    }

    showBasicDialog() {
        this.displayBasic = true;
    }

    showBasicDialog2() {
        this.displayBasic2 = true;
    }

    showMaximizableDialog() {
        this.displayMaximizable = true;
    }

    showPositionDialog(position: string) {
        this.position = position;
        this.displayPosition = true;
    }

    isShopNameValid(): boolean {
        if (this.shopName && this.shopName.length > 0) {
            return true;
        }
        return false;
    }

    saveShop(): void {
        this.displayPosition = false;
        const shopPayload = {
            "email": this.email,
            "shopId": uuidv4(),
            "shopName": this.shopName,
            "shopDescription": this.shopDescription
        }
        this.shopItemService.addShop(shopPayload).subscribe(response => {
            const userPayload = { email: this.email };
            this.shopItemService.getShopsForUser(userPayload).subscribe((response) => {
                this.shopItemService.setShopList(response.shopsForUser);
                this.email = "";
                this.shopName = "";
                this.shopDescription = "";
            }, (error) => {
                console.error(error);
            });
        }, (error) => {
            console.error(error);
        });
    }

}
