import {Component,Inject} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {JobPostsService} from '../services/jobposts'

@Component({
    selector: 'applied-candidates',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl:'typescripts/app/templates/company/load_applied_candidates_temp.html',
    styleUrls:['stylesheets/jobpost_table_styles.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers: [JobPostsService]
})
export class AppliedCandidatesComponent {

    public jobseekers;

    constructor(public http:Http,public service:JobPostsService) {}


    loadAppliedTable(event) {
        var jobPostId = event.target.value;
        this.http.get('/jobpost/applied/' + JSON.stringify(jobPostId))
            .subscribe(data => {
                this.jobseekers = data.json().map((el)=>el.jobseeker);
            });
    }
}

