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
    var AppliedJobPostComponent;
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
            AppliedJobPostComponent = (function () {
                function AppliedJobPostComponent(http) {
                    var _this = this;
                    this.http = http;
                    this.http.get('/jobpost/jobseeker/applied')
                        .subscribe(function (data) {
                        _this.jobposts = data.json().map(function (el) { return el.jobpost; });
                    });
                }
                AppliedJobPostComponent = __decorate([
                    core_1.Component({
                        selector: 'applied-jobpost',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        templateUrl: 'typescripts/app/templates/jobseeker/applied_jobpost_temp.html',
                        styleUrls: ['stylesheets/jobpost_table_styles.css'],
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppliedJobPostComponent);
                return AppliedJobPostComponent;
            })();
            exports_1("AppliedJobPostComponent", AppliedJobPostComponent);
        }
    }
});
//# sourceMappingURL=load_applied_jobpost_form.js.map