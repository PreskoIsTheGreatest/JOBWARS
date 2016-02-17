import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';
import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import {JobSeeker} from '../models/jobseeker';

declare var skills:any;

@Component({
    selector: 'jobseeker-form',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'typescripts/app/templates/jobseeker/jobseeker_profile_temp.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class JobSeekerFormComponent {

    public model:JobSeeker;
    public isNotShowSuccess:boolean;

    constructor(public http:Http) {
        this.model = new JobSeeker("", "","");
        this.http.get('/jobseeker/current')
            .subscribe(data => {
                let jobseeker = data.json();
                let full_name:string = jobseeker.full_name;
                let desired_position:string = jobseeker.desired_position;
                let typeahead_tags:string = jobseeker.skill_rel.map(r=>r.skill.name).join(', ');
                this.model = new JobSeeker(full_name, desired_position,typeahead_tags);
            },(err)=>console.log(err));
        this.isNotShowSuccess=true;
    };

    editJobSeeker(tags):boolean {
        this.isNotShowSuccess=true;
        let skillsTagsArr = tags.split(", ");
        let skills_tags_ids = skillsTagsArr.map((elem)=> {
            return skills[elem];
        });

        let jobseeker = {
            job_seeker_name: this.model.full_name,
            preferred_pos: this.model.desired_position,
            skills_tags_ids: skills_tags_ids
        };

        let stringifiedJobSeeker = encodeURIComponent(JSON.stringify(jobseeker));

        this.http.post('/jobseeker/edit/' + stringifiedJobSeeker, stringifiedJobSeeker, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).subscribe(res => {
            this.isNotShowSuccess=false;
        });
        return false;
    }
}
