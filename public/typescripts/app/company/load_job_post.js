System.register(['angular2/core', 'angular2/common', '../services/jobposts'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, jobposts_1;
    var JobPostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (jobposts_1_1) {
                jobposts_1 = jobposts_1_1;
            }],
        execute: function() {
            JobPostComponent = (function () {
                function JobPostComponent(service) {
                    this.service = service;
                }
                JobPostComponent = __decorate([
                    core_1.Component({
                        selector: 'jobposts',
                        templateUrl: 'typescripts/app/templates/company/load_jobpost_temp.html',
                        styleUrls: ['stylesheets/jobpost_table_styles.css'],
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        providers: [jobposts_1.JobPostsService]
                    }), 
                    __metadata('design:paramtypes', [jobposts_1.JobPostsService])
                ], JobPostComponent);
                return JobPostComponent;
            })();
            exports_1("JobPostComponent", JobPostComponent);
        }
    }
});
//# sourceMappingURL=load_job_post.js.map