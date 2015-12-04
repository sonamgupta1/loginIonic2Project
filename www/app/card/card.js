import {IonicApp, Page, NavController} from 'ionic/ionic';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';

import "./card.scss";

@Page({
    templateUrl: 'app/card/card.html'
})


export class CardPage {

    constructor(nav: NavController, app: IonicApp) {
        this.nav = nav;
        this.app = app;
    }

    next_page()
    {
        this.nav.push(HelloIonicPage);
        console.log("click successful");


    }
}
