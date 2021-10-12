import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import {USERDB} from 'src/app/db.js';

const STORAGE_VALUES: any = {
    ISLOGGEDIN: 'isLoggedIn'
};

@Injectable({
    providedIn: 'root'
})
export class AppService {
    userLoggedIn = new BehaviorSubject<boolean>(false);

    constructor(
        private router: Router
    ) {}

    loginUser(user: {username: string, password: string}) {
        const { username, password } = user;
        const validUser = USERDB.find((user: any) => user.username === username && user.password === password)
        if (validUser) {
            this.userLoggedIn.next(true)
          sessionStorage.setItem(STORAGE_VALUES.ISLOGGEDIN, 'true')
          
          return true;
        }
        return false;
    }
    // chekuserlogin(){
    //     if (sessionStorage.getItem('isLoggedIn')) {
    //         return true;
    //     }
        
    // }

    logOutUser() {
        this.userLoggedIn.next(false);
        Object.keys(STORAGE_VALUES).map(key => sessionStorage.removeItem(STORAGE_VALUES[key]))
        this.router.navigate(['/'])
        return;
    }
}