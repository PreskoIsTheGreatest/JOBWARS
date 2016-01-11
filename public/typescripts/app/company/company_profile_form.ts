import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';
import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import { Company } from '../models/company';

@Component({
    selector: 'company-form',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'typescripts/app/templates/company/company_profile_temp.html',
    styleUrls:['stylesheets/validation.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class CompanyFormComponent {

    public model:Company;
    public isNotShowSuccess:boolean;

    constructor(public http:Http) {
        this.model = new Company("",undefined,"","","");
        this.http.get('/company/current')
            .subscribe(data => {
                var name:string = data.json().name;
                var email:string = data.json().email;
                var website:string = data.json().website;
                var description:string = data.json().description;
                var bulstat:number = parseInt(data.json().bulstat);
                this.model = new Company(name, bulstat, email, website, description);
            });
        this.isNotShowSuccess=true;
    }

    editCompany():boolean {
        let company = {
            "name": this.model.name,
            "email": this.model.email,
            "website": this.model.website,
            "description": this.model.description,
            "bulstat": this.model.bulstat
        };

        var stringifiedCompany = encodeURIComponent(JSON.stringify(company));
        this.http.post('/company/edit/' + stringifiedCompany, stringifiedCompany, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).subscribe(res => {
            this.isNotShowSuccess=false;
        });
        return false;
    }
}
