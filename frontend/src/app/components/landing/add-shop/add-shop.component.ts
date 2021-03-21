import { Component, OnInit } from '@angular/core';

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

    constructor() { }

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

}
