import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { CognitoUserInterface } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

    currentUser: CognitoUserInterface | null;
    email: String;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.getCurrentUser().subscribe((user: CognitoUserInterface) => {
            console.log(user);
            this.currentUser = user;
            this.email = this.currentUser.attributes.email;
        }, (error) => {
            console.error(error);
        });
    }

}
