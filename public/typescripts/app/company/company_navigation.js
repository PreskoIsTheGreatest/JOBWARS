System.register(['angular2/core', 'angular2/platform/browser', 'angular2/http', 'angular2/router', './create_jobpost_form'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, http_1, router_1, router_2, create_jobpost_form_1;
    var CompanyNavigation;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (create_jobpost_form_1_1) {
                create_jobpost_form_1 = create_jobpost_form_1_1;
            }],
        execute: function() {
            CompanyNavigation = (function () {
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
                        {
                            path: '/publish',
                            component: create_jobpost_form_1.JobPostFormComponent,
                            name: 'Publish'
                        },
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
        }
    }
});
//# sourceMappingURL=company_navigation.js.map