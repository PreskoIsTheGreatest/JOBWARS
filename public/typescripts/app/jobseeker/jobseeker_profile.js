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
var jobseeker_1 = require('../models/jobseeker');
var JobSeekerFormComponent = (function () {
    function JobSeekerFormComponent(http) {
        var _this = this;
        this.http = http;
        this.model = new jobseeker_1.JobSeeker("", "", "");
        this.http.get('/jobseeker/current')
            .subscribe(function (data) {
            var jobseeker = data.json();
            var full_name = jobseeker.full_name;
            var desired_position = jobseeker.desired_position;
            var typeahead_tags = jobseeker.skill_rel.map(function (r) { return r.skill.name; }).join(', ');
            _this.model = new jobseeker_1.JobSeeker(full_name, desired_position, typeahead_tags);
        });
        this.isNotShowSuccess = true;
    }
    ;
    JobSeekerFormComponent.prototype.editJobSeeker = function (tags) {
        var _this = this;
        this.isNotShowSuccess = true;
        var skillsTagsArr = tags.split(", ");
        var skills_tags_ids = skillsTagsArr.map(function (elem) {
            return skills[elem];
        });
        var jobseeker = {
            job_seeker_name: this.model.full_name,
            preferred_pos: this.model.desired_position,
            skills_tags_ids: skills_tags_ids
        };
        var stringifiedJobSeeker = encodeURIComponent(JSON.stringify(jobseeker));
        this.http.post('/jobseeker/edit/' + stringifiedJobSeeker, stringifiedJobSeeker, {
            headers: new http_1.Headers({
                'Content-Type': 'application/json'
            })
        }).subscribe(function (res) {
            _this.isNotShowSuccess = false;
        });
        return false;
    };
    JobSeekerFormComponent = __decorate([
        core_1.Component({
            selector: 'jobseeker-form',
            viewProviders: [http_1.HTTP_PROVIDERS],
            templateUrl: 'typescripts/app/templates/jobseeker/jobseeker_profile_temp.html',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JobSeekerFormComponent);
    return JobSeekerFormComponent;
})();
exports.JobSeekerFormComponent = JobSeekerFormComponent;
//# sourceMappingURL=jobseeker_profile.js.map