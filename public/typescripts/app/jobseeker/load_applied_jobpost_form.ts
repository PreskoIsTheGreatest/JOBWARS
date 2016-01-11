import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'applied-jobpost',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl:'typescripts/app/templates/jobseeker/applied_jobpost_temp.html',
    styleUrls:['stylesheets/jobpost_table_styles.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class AppliedJobPostComponent {

    public jobposts:Array<any>;

    constructor(public http:Http) {
        this.http.get('/jobpost/jobseeker/applied')
            .subscribe(data => {
                this.jobposts = data.json().map(el=>el.jobpost);
            });
    }
}
