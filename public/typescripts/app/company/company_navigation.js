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
var CompanyNavigation = (function () {
    function CompanyNavigation() {
    }
    CompanyNavigation = __decorate([
        core_1.Component({
            selector: 'company'
        }),
        router_1.RouteConfig([
            new router_1.AsyncRoute({
                path: '/jobposts',
                loader: function () { return System.import('./typescripts/app/company/load_job_post').then(function (m) { return m.JobPostComponent; }); },
                name: 'Jobposts',
                useAsDefault: true
            }),
            new router_1.AsyncRoute({
                path: '/publish',
                loader: function () { return System.import('./typescripts/app/company/create_jobpost_form').then(function (m) { return m.JobPostFormComponent; }); },
                name: 'Publish'
            }),
            new router_1.AsyncRoute({
                path: '/candidates',
                loader: function () { return System.import('./typescripts/app/company/load_applied_candidates').then(function (m) { return m.AppliedCandidatesComponent; }); },
                name: 'Candidates'
            }),
            new router_1.AsyncRoute({
                path: '/profile',
                loader: function () { return System.import('./typescripts/app/company/company_profile_form').then(function (m) { return m.CompanyFormComponent; }); },
                name: 'Profile'
            })
        ]),
        core_1.View({
            templateUrl: './typescripts/app/templates/company/company_navigation_temp.html',
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [])
    ], CompanyNavigation);
    return CompanyNavigation;
})();
browser_1.bootstrap(CompanyNavigation, [
    core_1.provide(router_2.APP_BASE_HREF, { useValue: '/' }),
    http_1.HTTP_PROVIDERS,
    router_2.ROUTER_PROVIDERS,
    core_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy })
]);
//# sourceMappingURL=company_navigation.js.map