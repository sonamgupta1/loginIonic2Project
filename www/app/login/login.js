import {IonicApp, Page, NavController} from 'ionic/ionic';
import {HomePage} from '../home/home';

import "./login.scss";

@Page({
    templateUrl: 'app/login/login.html'
})


export class LoginPage {
    constructor(nav: NavController, app: IonicApp) {
        this.nav = nav;
        this.app = app;
    }

    login() {
        this.nav.push(HomePage);
    }
}

