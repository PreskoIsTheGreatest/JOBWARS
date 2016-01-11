import {Component,View,provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS,AsyncRoute} from 'angular2/router';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {JobSeekerJobPostsComponent} from './load_jobseeker_jobposts'
import {AppliedJobPostComponent} from './load_applied_jobpost_form';
import {JobSeekerFormComponent} from './jobseeker_profile';

declare var System:any;

@Component({
    selector: 'jobseeker'
})
@RouteConfig([
    new AsyncRoute({
        path: '/jobposts',
        loader: ()=>System.import('./typescripts/app/jobseeker/load_jobseeker_jobposts').then(m=>m.JobSeekerJobPostsComponent),
        name: 'SeekerJobposts',
        useAsDefault: true
    }),
    new AsyncRoute({
        path: '/applied',
        loader: ()=>System.import('./typescripts/app/jobseeker/load_applied_jobpost_form').then(m=>m.AppliedJobPostComponent),
        name: 'SeekerApplied'
    }),
    new AsyncRoute({
        path: '/profile',
        loader: ()=>System.import('./typescripts/app/jobseeker/jobseeker_profile').then(m=>m.JobSeekerFormComponent),
        name: 'SeekerProfile'
    })
])
@View({
    templateUrl: './typescripts/app/templates/jobseeker/jobseeker_navigation_temp.html',
    directives: [ROUTER_DIRECTIVES],
})

class JobSeekerNavigation {
    constructor() {
    }
}

bootstrap(JobSeekerNavigation, [
    provide(APP_BASE_HREF, {useValue: '/'}),
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);