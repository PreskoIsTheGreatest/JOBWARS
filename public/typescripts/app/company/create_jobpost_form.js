System.register(['angular2/core', 'angular2/common', 'angular2/http', '../models/jobpost', '../services/jobposts'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, jobpost_1, jobposts_1;
    var JobPostFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (jobpost_1_1) {
                jobpost_1 = jobpost_1_1;
            },
            function (jobposts_1_1) {
                jobposts_1 = jobposts_1_1;
            }],
        execute: function() {
            JobPostFormComponent = (function () {
                function JobPostFormComponent(http, service) {
                    this.http = http;
                    this.service = service;
                    this.model = new jobpost_1.JobPost("", "", "");
                    this.isNotShowSuccess = true;
                }
                JobPostFormComponent.prototype.createJobPost = function (tags) {
                    var _this = this;
                    var jobPostTagsArr = tags.value.split(", ");
                    var jobPostTagsIds = jobPostTagsArr.map(function (elem) {
                        return skills[elem];
                    });
                    var jobPost = {
                        header: this.model.header,
                        description: this.model.description,
                        tags: jobPostTagsIds
                    };
                    var stringFieldJobPost = JSON.stringify(jobPost);
                    this.http.post('/jobpost/create/' + stringFieldJobPost, stringFieldJobPost, {
                        headers: new http_1.Headers({
                            'Content-Type': 'application/json'
                        })
                    }).subscribe(function (res) {
                        _this.isNotShowSuccess = false;
                        tags.value = "";
                        _this.service.reloadObservable();
                    });
                    this.model = new jobpost_1.JobPost("", "", "");
                    return false;
                };
                JobPostFormComponent = __decorate([
                    core_1.Component({
                        selector: 'jobpost-form',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        templateUrl: 'typescripts/app/templates/company/create_job_post_temp.html',
                        styleUrls: ['stylesheets/validation.css'],
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        providers: [jobposts_1.JobPostsService]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, jobposts_1.JobPostsService])
                ], JobPostFormComponent);
                return JobPostFormComponent;
            })();
            exports_1("JobPostFormComponent", JobPostFormComponent);
        }
    }
});
//# sourceMappingURL=create_jobpost_form.js.map