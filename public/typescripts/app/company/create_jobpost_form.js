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
var common_1 = require('angular2/common');
var http_1 = require('angular2/http');
var jobpost_1 = require('../models/jobpost');
var JobPostFormComponent = (function () {
    function JobPostFormComponent(http) {
        this.http = http;
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
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JobPostFormComponent);
    return JobPostFormComponent;
})();
exports.JobPostFormComponent = JobPostFormComponent;
//# sourceMappingURL=create_jobpost_form.js.map