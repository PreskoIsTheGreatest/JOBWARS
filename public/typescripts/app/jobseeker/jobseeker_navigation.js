var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var JobSeekerNavigation = (function () {
    function JobSeekerNavigation() {
    }
    JobSeekerNavigation = __decorate([
        core_1.Component({
            selector: 'jobseeker'
        }),
        router_1.RouteConfig([
            new router_1.AsyncRoute({
                path: '/jobposts',
                loader: function () { return System.import('./typescripts/app/jobseeker/load_jobseeker_jobposts').then(function (m) { return m.JobSeekerJobPostsComponent; }); },
                name: 'SeekerJobposts',
                useAsDefault: true
            }),
            new router_1.AsyncRoute({
                path: '/applied',
                loader: function () { return System.import('./typescripts/app/jobseeker/load_applied_jobpost_form').then(function (m) { return m.AppliedJobPostComponent; }); },
                name: 'SeekerApplied'
            }),
            new router_1.AsyncRoute({
                path: '/profile',
                loader: function () { return System.import('./typescripts/app/jobseeker/jobseeker_profile').then(function (m) { return m.JobSeekerFormComponent; }); },
                name: 'SeekerProfile'
            })
        ]),
        core_1.View({
            templateUrl: './typescripts/app/templates/jobseeker/jobseeker_navigation_temp.html',
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [])
    ], JobSeekerNavigation);
    return JobSeekerNavigation;
})();
browser_1.bootstrap(JobSeekerNavigation, [
    core_1.provide(router_2.APP_BASE_HREF, { useValue: '/' }),
    http_1.HTTP_PROVIDERS,
    router_2.ROUTER_PROVIDERS,
    core_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy })
]);
//# sourceMappingURL=jobseeker_navigation.js.map