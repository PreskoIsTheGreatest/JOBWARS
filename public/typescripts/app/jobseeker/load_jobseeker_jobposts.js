System.register(['angular2/core', 'angular2/http', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, common_1;
    var JobSeekerJobPostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            JobSeekerJobPostsComponent = (function () {
                function JobSeekerJobPostsComponent(http) {
                    this.http = http;
                    this.isNotShowSuccess = true;
                    this.reloadJobPosts(true);
                }
                JobSeekerJobPostsComponent.prototype.apply = function (value) {
                    var _this = this;
                    this.http.post('/jobpost/jobseeker/apply/' + JSON.stringify(value), JSON.stringify(value), {
                        headers: new http_1.Headers({
                            'Content-Type': 'application/json'
                        })
                    }).subscribe(function () {
                        _this.reloadJobPosts(false);
                    });
                };
                JobSeekerJobPostsComponent.prototype.reloadJobPosts = function (closed) {
                    var _this = this;
                    this.http.get('jobpost/jobseeker/render')
                        .subscribe(function (jobposts) {
                        console.log(jobposts.json());
                        _this.renderArray = jobposts.json();
                        _this.isNotShowSuccess = closed;
                    });
                };
                JobSeekerJobPostsComponent = __decorate([
                    core_1.Component({
                        selector: 'jobseeker-jobposts',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        templateUrl: 'typescripts/app/templates/jobseeker/load_jobseeker_jobposts_temp.html',
                        styleUrls: ['stylesheets/jobseeker_posts_styles.css', 'stylesheets/jobpost_table_styles.css'],
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], JobSeekerJobPostsComponent);
                return JobSeekerJobPostsComponent;
            })();
            exports_1("JobSeekerJobPostsComponent", JobSeekerJobPostsComponent);
        }
    }
});
//# sourceMappingURL=load_jobseeker_jobposts.js.map