import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';
import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import { JobPost } from '../models/jobpost';
import {JobPostsService} from '../services/jobposts'

declare var skills:any;

@Component({
    selector: 'jobpost-form',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'typescripts/app/templates/company/create_job_post_temp.html',
    styleUrls:['stylesheets/validation.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers: [JobPostsService]
})
export class JobPostFormComponent {

    public model:JobPost;
    public isNotShowSuccess:boolean;

    constructor(public http:Http,public service:JobPostsService) {
        this.model = new JobPost("", "", "");
        this.isNotShowSuccess=true;
    }

    createJobPost(tags):boolean {
        let jobPostTagsArr = tags.value.split(", ");
        let jobPostTagsIds = jobPostTagsArr.map(function (elem) {
            return skills[elem];
        });

        let jobPost = {
            header: this.model.header,
            description: this.model.description,
            tags: jobPostTagsIds
        };

        let stringFieldJobPost = JSON.stringify(jobPost);

        this.http.post('/jobpost/create/' + stringFieldJobPost, stringFieldJobPost, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).subscribe(res => {
            this.isNotShowSuccess=false;
            tags.value="";
            this.service.reloadObservable();
        });

        this.model = new JobPost("", "", "");

        return false;
    }
}
