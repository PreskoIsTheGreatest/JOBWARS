import {Component,View,provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS,AsyncRoute} from 'angular2/router';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {CompanyFormComponent} from './company_profile_form';
import {JobPostFormComponent} from './create_jobpost_form';
import {JobPostComponent} from './load_job_post';
import {AppliedCandidatesComponent} from './load_applied_candidates';

declare var System:any;

@Component({
    selector: 'company'
})
@RouteConfig([
    new AsyncRoute({
        path: '/jobposts',
        loader: ()=>System.import('./typescripts/app/company/load_job_post').then(m=>m.JobPostComponent),
        name: 'Jobposts',
        useAsDefault: true
    }),
    new AsyncRoute({
        path: '/publish',
        loader: ()=>System.import('./typescripts/app/company/create_jobpost_form').then(m=>m.JobPostFormComponent),
        name: 'Publish'
    }),
    new AsyncRoute({
        path: '/candidates',
        loader: ()=>System.import('./typescripts/app/company/load_applied_candidates').then(m=>m.AppliedCandidatesComponent),
        name: 'Candidates'
    }),
    new AsyncRoute({
        path: '/profile',
        loader: ()=>System.import('./typescripts/app/company/company_profile_form').then(m=>m.CompanyFormComponent),
        name: 'Profile'
    })
])
@View({
    templateUrl: './typescripts/app/templates/company/company_navigation_temp.html',
    directives: [ROUTER_DIRECTIVES],
})

class CompanyNavigation {
    constructor() {
    }
}

bootstrap(CompanyNavigation, [
    provide(APP_BASE_HREF, {useValue: '/'}),
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);