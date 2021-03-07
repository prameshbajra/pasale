import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-resisterlogin',
  templateUrl: './resisterlogin.component.html',
  styleUrls: ['./resisterlogin.component.scss']
})

export class ResisterloginComponent implements OnInit {

    public authState: AuthState;
    public user: CognitoUserInterface | undefined;

    constructor(private ref: ChangeDetectorRef, private authService: AuthService) { }

    ngOnInit(): void {
        onAuthUIStateChange((authState, authData) => {
            this.authState = authState;
            this.user = authData as CognitoUserInterface;
            this.authService.setCurrentUser(this.user);
            this.ref.detectChanges();
        });
    }

}
