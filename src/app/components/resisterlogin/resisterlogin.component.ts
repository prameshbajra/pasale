import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';


@Component({
  selector: 'app-resisterlogin',
  templateUrl: './resisterlogin.component.html',
  styleUrls: ['./resisterlogin.component.scss']
})
export class ResisterloginComponent implements OnInit {

    public authState: AuthState;
    public user: CognitoUserInterface | undefined;

    constructor(private ref: ChangeDetectorRef) { }

    ngOnInit(): void {
        onAuthUIStateChange((authState, authData) => {
            this.authState = authState;
            this.user = authData as CognitoUserInterface;
            this.ref.detectChanges();
            console.log({ authState }, { authData });
        })
    }

}
