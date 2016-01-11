import {Component,provide,Inject} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {JobPostsService} from '../services/jobposts'

@Component({
    selector: 'jobposts',
    templateUrl: 'typescripts/app/templates/company/load_jobpost_temp.html',
    styleUrls:['stylesheets/jobpost_table_styles.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers: [JobPostsService]
})

export class JobPostComponent {
    constructor(public service:JobPostsService) {}
}

