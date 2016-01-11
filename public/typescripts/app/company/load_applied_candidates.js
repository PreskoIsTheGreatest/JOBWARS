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
var http_1 = require('angular2/http');
var common_1 = require('angular2/common');
var jobposts_1 = require('../services/jobposts');
var AppliedCandidatesComponent = (function () {
    function AppliedCandidatesComponent(http, service) {
        this.http = http;
        this.service = service;
    }
    AppliedCandidatesComponent.prototype.loadAppliedTable = function (event) {
        var _this = this;
        var jobPostId = event.target.value;
        this.http.get('/jobpost/applied/' + JSON.stringify(jobPostId))
            .subscribe(function (data) {
            _this.jobseekers = data.json().map(function (el) { return el.jobseeker; });
        });
    };
    AppliedCandidatesComponent = __decorate([
        core_1.Component({
            selector: 'applied-candidates',
            viewProviders: [http_1.HTTP_PROVIDERS],
            templateUrl: 'typescripts/app/templates/company/load_applied_candidates_temp.html',
            styleUrls: ['stylesheets/jobpost_table_styles.css'],
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            providers: [jobposts_1.JobPostsService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, jobposts_1.JobPostsService])
    ], AppliedCandidatesComponent);
    return AppliedCandidatesComponent;
})();
exports.AppliedCandidatesComponent = AppliedCandidatesComponent;
//# sourceMappingURL=load_applied_candidates.js.map