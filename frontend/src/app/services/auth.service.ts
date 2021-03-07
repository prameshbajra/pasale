import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CognitoUserInterface } from '@aws-amplify/ui-components';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    public currentUser = new Subject<any>();

    constructor() { }

    public getCurrentUser(): Observable<any> {
        return this.currentUser.asObservable();
    }

    public setCurrentUser(currentUser: CognitoUserInterface): void {
        this.currentUser.next(currentUser);
    }

}
