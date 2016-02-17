import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';


interface Render {
    id:string,
    applied:boolean,
    jobpost:any
}

@Component({
    selector: 'jobseeker-jobposts',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'typescripts/app/templates/jobseeker/load_jobseeker_jobposts_temp.html',
    styleUrls:['stylesheets/jobseeker_posts_styles.css','stylesheets/jobpost_table_styles.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class JobSeekerJobPostsComponent {

    public renderArray:Array<Render>;
    public isNotShowSuccess:boolean=true;

    constructor(public http:Http) {
        this.reloadJobPosts(true);
    }

    public apply(value) {
        this.http.post('/jobpost/jobseeker/apply/'+JSON.stringify(value),JSON.stringify(value), {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).subscribe(() => {
            this.reloadJobPosts(false);
        });
    }

    reloadJobPosts(closed:boolean){
        this.http.get('jobpost/jobseeker/render')
            .subscribe(jobposts=> {
                console.log( jobposts.json());
                this.renderArray = jobposts.json();
                this.isNotShowSuccess=closed;
            })
    }
}
