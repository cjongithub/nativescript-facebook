import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppComponent } from "./app.component";

import { NativeScriptFacebookModule } from "nativescript-facebook/angular";

import * as application from 'application';
let nsFacebook = require('nativescript-facebook');

application.on(application.launchEvent, function (args) {
    nsFacebook.init("1771472059772879");
});

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        NativeScriptModule,
        NativeScriptFacebookModule
    ],
    declarations: [ AppComponent ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
