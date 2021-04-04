import { Component, OnInit } from '@angular/core';
import Auth from '@aws-amplify/auth';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

    currentUser: any;
    email: String;

    constructor() { }

    ngOnInit(): void {
        this.initiateProcess();
    }

    async initiateProcess() {
        this.currentUser = await Auth.currentAuthenticatedUser();
        if (this.currentUser) {
            this.email = this.currentUser.attributes.email;
        } else {
            // TODO: Redirect to home page where amplify will handle the routing ...
        }
    }


}
