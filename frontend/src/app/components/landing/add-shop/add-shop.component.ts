import { Component, OnInit } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { ShopItemService } from 'src/app/services/shop-item.service';
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
    currentUser: any;
    email: String = '';

    constructor(private shopItemService: ShopItemService) { }

    ngOnInit(): void {
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

    async saveShop() {
        this.displayPosition = false;
        if (this.email.length === 0) {
            this.currentUser = await Auth.currentAuthenticatedUser();
            this.email = this.currentUser.attributes.email;
        }
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
