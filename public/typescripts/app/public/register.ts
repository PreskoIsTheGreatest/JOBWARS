import {Component,provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Http,Headers,HTTP_PROVIDERS} from 'angular2/http';

declare var System:any;

@Component({
    selector: 'register',
    templateUrl: 'typescripts/app/templates/public/register_temp.html',
    styleUrls:['stylesheets/register.css','stylesheets/validation.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class RegisterComponent {

    public username:string;
    public isJobSeeker:boolean = true;
    public isCompany:boolean = true;
    public isNavigation:boolean = false;
    public isNotOpenPassNotMatch:boolean = true;
    public isNotOpenUserExist:boolean = true;
    public isNotOpenSuccess:boolean = true;


    constructor(public http:Http) {
        this.username = "";
    }

    public register(pass, conf):boolean {
        this.isNotOpenPassNotMatch = true;
        this.isNotOpenUserExist = true;
        this.isNotOpenSuccess = true;
        if (pass.value !== conf.value) {
            this.isNotOpenPassNotMatch = false;
            return false;
        }

        let user = {
            username: this.username,
            password: pass.value
        };

        let stringUser = JSON.stringify(user);

        let registerPath:string = "";
        if (!this.isCompany) {
            registerPath = "/company";
        } else {
            registerPath = "/jobseeker";
        }

        this.http.post(registerPath + '/register/' + stringUser, stringUser, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).subscribe(res => {
            this.isNotOpenSuccess = false;
            this.username="";
            pass.value="";
            conf.value="";
        }, err=> {
            this.isNotOpenUserExist = false
        });
        return true;
    }

    onCompany() {
        this.isNavigation = true;
        this.isCompany = false;
    }


    onJobSeeker() {
        this.isNavigation = true;
        this.isJobSeeker = false;
    }

    reset() {
        this.isCompany = true;
        this.isJobSeeker = true;
        this.isNavigation = false;
        this.isNotOpenPassNotMatch = true;
        this.isNotOpenUserExist = true;
        this.isNotOpenSuccess = true;
        this.username = "";
    }

}

bootstrap(RegisterComponent, [
    HTTP_PROVIDERS
]);