System.register(['angular2/core', 'angular2/common', 'angular2/http', '../models/company'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, company_1;
    var CompanyFormComponent;
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
            function (company_1_1) {
                company_1 = company_1_1;
            }],
        execute: function() {
            CompanyFormComponent = (function () {
                function CompanyFormComponent(http) {
                    var _this = this;
                    this.http = http;
                    this.model = new company_1.Company("", undefined, "", "", "");
                    this.http.get('/company/current')
                        .subscribe(function (data) {
                        var name = data.json().name;
                        var email = data.json().email;
                        var website = data.json().website;
                        var description = data.json().description;
                        var bulstat = parseInt(data.json().bulstat);
                        _this.model = new company_1.Company(name, bulstat, email, website, description);
                    });
                    this.isNotShowSuccess = true;
                }
                CompanyFormComponent.prototype.editCompany = function () {
                    var _this = this;
                    var company = {
                        "name": this.model.name,
                        "email": this.model.email,
                        "website": this.model.website,
                        "description": this.model.description,
                        "bulstat": this.model.bulstat
                    };
                    var stringifiedCompany = encodeURIComponent(JSON.stringify(company));
                    this.http.post('/company/edit/' + stringifiedCompany, stringifiedCompany, {
                        headers: new http_1.Headers({
                            'Content-Type': 'application/json'
                        })
                    }).subscribe(function (res) {
                        _this.isNotShowSuccess = false;
                    });
                    return false;
                };
                CompanyFormComponent = __decorate([
                    core_1.Component({
                        selector: 'company-form',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        templateUrl: 'typescripts/app/templates/company/company_profile_temp.html',
                        styleUrls: ['stylesheets/validation.css'],
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CompanyFormComponent);
                return CompanyFormComponent;
            })();
            exports_1("CompanyFormComponent", CompanyFormComponent);
        }
    }
});
//# sourceMappingURL=company_profile_form.js.map