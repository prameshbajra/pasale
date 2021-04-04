import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import Auth from '@aws-amplify/auth';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

    currentUser: any;
    email: String;

    constructor(private ref: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.initiateProcess();
    }

    async initiateProcess() {
        try {
            this.currentUser = await Auth.currentAuthenticatedUser();
            this.email = this.currentUser.attributes.email;
            this.ref.detectChanges();
        } catch (error) {
            console.error(error);
        }
    }


}
